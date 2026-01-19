'use client';

import { useEffect } from 'react';

export function useTitleAnimation(pageName: string) {
  useEffect(() => {
    const steps = '/-\\|';
    let step = 0;
    let lastTimestep = 0;
    const FPS = 2;
    const frameInterval = 1000 / FPS;

    function animation(timestamp: number) {
      if (lastTimestep + frameInterval < timestamp) {
        document.title = `${steps[step]} ${pageName} | Dandung`;
        step = (step + 1) % steps.length;
        lastTimestep = timestamp;
      }
      requestAnimationFrame(animation);
    }

    const animationId = requestAnimationFrame(animation);

    return () => cancelAnimationFrame(animationId);
  }, [pageName]);
}
