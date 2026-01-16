import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { VisitorFEController } from '@/core/domains/controllers/visitor.fe.controller';

const visitorFEController = new VisitorFEController();

export const useTrackVisit = () => {
  const router = useRouter();

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const path = router.asPath;
    const payload = {
      path,
      referer: document.referrer || undefined,
      user_agent: navigator.userAgent,
      locale: router.locale,
    };
    visitorFEController.createVisit(payload).catch(() => {
      // ignore tracking failures
    });
  }, [router.asPath, router.locale]);
};
