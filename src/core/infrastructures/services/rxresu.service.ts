// Server only: never import this service into page components or shared constants.
export class RxresuConfigurationError extends Error {}

type ResumeDocument = {
  data: {
    summary?: { hidden?: boolean; content?: string };
    sections?: {
      experience?: {
        hidden?: boolean;
        items?: {
          hidden?: boolean;
          company: string;
          period: string;
          location: string;
          position: string;
          description: string;
          dates?: { start?: string; end?: string; present?: boolean };
        }[];
      };
    };
  };
};
let resumeCache: { key: string; value: ResumeDocument; expires: number } | undefined;
let pendingResume: { key: string; promise: Promise<ResumeDocument> } | undefined;

async function getResumeDocument(): Promise<ResumeDocument> {
  const id = process.env.RXRESU_RESUME_ID;
  if (!id) throw new RxresuConfigurationError('Missing resume ID');
  const key = `${process.env.RXRESU_URL}:${id}`;
  if (resumeCache?.key === key && resumeCache.expires > Date.now()) return resumeCache.value;
  if (pendingResume?.key === key) return pendingResume.promise;
  const promise = (async () => {
    const response = await requestRxresu(`resumes/${encodeURIComponent(id)}`);
    if (!response.ok) throw new Error('Resume unavailable');
    const value: ResumeDocument = await response.json();
    resumeCache = { key, value, expires: Date.now() + 300_000 };
    return value;
  })();
  pendingResume = { key, promise };
  try {
    return await promise;
  } finally {
    if (pendingResume?.promise === promise) pendingResume = undefined;
  }
}

export type ResumeExperience = {
  company: string;
  date: string;
  location: string;
  role: string;
  points: string[];
  start: string | null;
  end: string | null;
};

export async function getResumeExperience(): Promise<ResumeExperience[]> {
  try {
    const resume = await getResumeDocument();
    const section = resume.data?.sections?.experience;
    if (section?.hidden || !Array.isArray(section?.items)) return [];
    return section.items
      .filter((item: { hidden?: boolean }) => !item.hidden)
      .map(
        (item: {
          company: string;
          period: string;
          location: string;
          position: string;
          description: string;
          dates?: { start?: string; end?: string; present?: boolean };
        }) => ({
          company: item.company,
          date: item.period,
          location: item.location,
          role: item.position,
          start: item.dates?.start ?? null,
          end: item.dates?.present ? new Date().toISOString().slice(0, 7) : (item.dates?.end ?? null),
          points: item.description
            .replace(/<br\s*\/?\s*>|<\/p>|<\/li>/gi, '\n')
            .replace(/<[^>]*>/g, '')
            .replace(/&nbsp;/g, ' ')
            .replace(/&amp;/g, '&')
            .replace(/&quot;/g, '"')
            .replace(/&#39;|&apos;/g, "'")
            .split('\n')
            .map((point: string) => point.replace(/^\s*[-•]\s*/, '').trim())
            .filter(Boolean),
        }),
      );
  } catch {
    return [];
  }
}

export async function requestRxresu(path: string, options: RequestInit = {}) {
  if (typeof window !== 'undefined') {
    throw new Error('RxResume requests must run on the server');
  }
  const baseUrl = process.env.RXRESU_URL;
  const apiKey = process.env.RXRESU_API_KEY;
  if (!baseUrl || !apiKey) {
    throw new RxresuConfigurationError('RxResume is not configured');
  }
  const url = new URL(`${baseUrl.replace(/\/$/, '')}/api/openapi/${path.replace(/^\//, '')}`);
  const headers = new Headers(options.headers);
  headers.set('x-api-key', apiKey);
  return fetch(url, {
    ...options,
    headers,
    cache: 'no-store',
    signal: options.signal ?? AbortSignal.timeout(30000),
    redirect: 'error',
  });
}

export function downloadResumePdf(id: string) {
  return requestRxresu(`resumes/${encodeURIComponent(id)}/exports/pdf`, {
    headers: { Accept: 'application/pdf' },
  });
}

export async function getResumeSummary(): Promise<string> {
  try {
    const resume = await getResumeDocument();
    const summary = resume.data?.summary;
    const content = !summary?.hidden && typeof summary?.content === 'string' ? summary.content : '';
    const description = content
      .replace(/<[^>]*>/g, ' ')
      .replace(/&nbsp;/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/&quot;/g, '"')
      .replace(/&#39;|&apos;/g, "'")
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/\s+/g, ' ')
      .trim();
    return description;
  } catch {
    return '';
  }
}
