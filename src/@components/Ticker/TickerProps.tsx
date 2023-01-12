import type { PropsWithChildren } from 'react';

export type TickerProps = PropsWithChildren<{
  up: any;
  down: any;
  duration: KeyframeAnimationOptions['duration'];
  easing?: KeyframeAnimationOptions['easing'];
  delay?: KeyframeAnimationOptions['delay'];
  reverse?: boolean;
}>;
