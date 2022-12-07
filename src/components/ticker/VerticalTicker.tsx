import React, { useEffect, useMemo, useRef } from 'react';

import { TickerProps } from './TickerProps';
import { animate } from './animate';
import { useElementSize } from './useElementSize';

export const VerticalTicker: React.FC<TickerProps> = ({
  children,
  duration,
  easing,
  delay,
  reverse = false,
}) => {
  const track1 = useRef<HTMLDivElement>(null);
  const track2 = useRef<HTMLDivElement>(null);
  const track3 = useRef<any>(null);
  const track4 = useRef<any>(null);
  const track5 = useRef<any>(null);
  const track6 = useRef<any>(null);
  const options = useMemo<KeyframeAnimationOptions>(
    () => ({
      duration,
      easing: 'ease',
      delay,
      iterations: 1,
      fill: 'forwards',
      direction: reverse ? 'reverse' : 'normal',
    }),
    [duration, easing, delay, reverse],
  );
  const { height: trackHeight } = useElementSize(track1);

  useEffect(() => {
    // if (!trackHeight || !track1.current || !track2.current) {
    //   return;
    // }

    if (!trackHeight || !track1.current) {
      return;
    }

    const height = trackHeight;
    const track1El = track1.current;
    const track2El = track2.current;
    const track3El = track3.current;
    const track4El = track4.current;
    const track5El = track5.current;
    const track6El = track6.current;
    const endController = new AbortController();
    let stopController = new AbortController();
    let playController = new AbortController();

    track3El.addEventListener('mouseover', () => {
      stopController.abort();
    });
    track3El.addEventListener('mouseleave', () => {
      playController.abort();
    });

    async function toggle(): Promise<void> {
      const zeroToMinusOne = [
        { transform: 'translateY(0px)' },
        { transform: `translateY(${-20}px)` },
      ];

      const oneToZero = [
        { transform: `translateY(${-20}px)` },
        { transform: `translateY(${-40}px)` },
      ];

      const oneToZero2 = [
        { transform: `translateY(${-40}px)` },
        { transform: `translateY(${-60}px)` },
      ];

      const minusOneToMinusTwo = [
        { transform: `translateY(${-1 * 20}px)` },
        { transform: `translateY(${-2 * 20}px)` },
      ];

      const animations = [zeroToMinusOne, oneToZero, oneToZero2];
      const foo = async () => {
        let index = 0;
        while (true) {
          index = await animate(
            track1El,
            animations[index],
            options,
            endController.signal,
            stopController.signal,
            playController.signal,
            track4El,
            track5El,
            track6El,
            index,
          );
          if (index === 3) break;
        }
        toggle();
      };
      foo();
      // const promise2 = animate(
      //   track2El,
      //   zeroToMinusOne,
      //   options,
      //   endController.signal,
      //   stopController.signal,
      //   playController.signal,
      //   track4El
      // ).then(() =>
      //   animate(
      //     track2El,
      //     oneToZero2,
      //     options,
      //     endController.signal,
      //     stopController.signal,
      //     playController.signal,
      //     track4El
      //   )
      // );

      // return Promise.all([promise1]).then(() => toggle());
    }
    toggle();

    return () => {
      endController.abort();
      track3El.removeEventListener('click', () => {
        stopController.abort();
      });
      track3El.removeEventListener('mouseleave', () => {
        playController.abort();
      });
    };
  }, [trackHeight, options]);

  return (
    <div style={{ display: 'flex' }}>
      <div
        style={{
          overflow: 'hidden',
          height: '100%',
        }}>
        <div ref={track1}>{children}</div>
        {/* <div ref={track2}>{children}</div> */}
      </div>
      <button ref={track3}>stop</button>
      <button ref={track4}>test</button>
      <button ref={track5}>up</button>
      <button ref={track6}>down</button>
    </div>
  );
};
