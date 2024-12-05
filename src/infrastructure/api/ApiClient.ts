interface RequestInit {
  next?: NextFetchRequestConfig | undefined;
}

export const fetcher = (input: string | URL | globalThis.Request, init?: RequestInit): Promise<Response> => {
  return fetch(input, init).then((res) => res.json());
};
