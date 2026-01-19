import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { VisitorFEController } from '@/core/domains/controllers/visitor.fe.controller';

const visitorFEController = new VisitorFEController();

export const useTrackVisit = () => {
  const router = useRouter();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const path = router.asPath;
    const lastTrackedKey = `visit:lastTracked:${path}`;
    const lastTracked = Number(localStorage.getItem(lastTrackedKey));

    const MIN_TRACK_INTERVAL_MS = 5 * 60 * 1000;
    const now = Date.now();

    if (!Number.isNaN(lastTracked) && now - lastTracked < MIN_TRACK_INTERVAL_MS) {
      return;
    }

    const delayMs = 1500;
    const timeoutId = window.setTimeout(() => {
      const payload = {
        path,
        referer: document.referrer || undefined,
        user_agent: navigator.userAgent,
        locale: router.locale,
      };

      visitorFEController
        .createVisit(payload)
        .then(() => {
          localStorage.setItem(lastTrackedKey, `${Date.now()}`);
        })
        .catch(() => {
          // ignore tracking failures
        });
    }, delayMs);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [router.asPath, router.locale]);
};
