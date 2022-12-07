export function animate(
  element: HTMLElement,
  keyframes: Keyframe[],
  options: KeyframeAnimationOptions,
  endSignal: AbortSignal,
  stopSignal: AbortSignal,
  playSignal: AbortSignal,
  track4: HTMLElement,
  track5: HTMLElement,
  track6: HTMLElement,
  index: number,
): Promise<number> {
  return new Promise(resolve => {
    let newIndex = index;
    let reStart = true;
    const animation = element.animate(keyframes, options);
    const reverseOption: KeyframeAnimationOptions = {
      ...options,
      direction: 'reverse',
      easing: 'cubic-bezier(.82,-0.25,.93,.96)',
    };
    const endOnAbort = () => {
      animation.cancel();
    };
    const stopOnAbort = () => {
      animation.pause();
    };

    const playOnAbort = () => {
      animation.play();
    };

    const track6Event = () => {
      // 얻어걸렸는데 transelate는 현재위치에서 이동이 되나?
      animation.pause();
      reStart = false;
      function test(newIndex: number): Promise<void> {
        return new Promise(resolve => {
          element.animate(
            [
              { transform: `translateY(${-20 * (newIndex + 1)}px)` },
              { transform: `translateY(${-20 * (newIndex + 2)}px)` },
            ],
            reverseOption,
          );
          resolve();
        });
      }
      // clearTimeout(testTT);
      if (newIndex === 0) newIndex = 2;
      else newIndex -= 1;
      test(newIndex).then(() => {
        setTimeout(() => {
          reStart = !reStart;
        }, 3000);
        setTimeout(() => {
          if (reStart) onFinish(newIndex + 1);
        }, 3500);
      });
    };
    const onFinish = (newIndex: number) => {
      console.log('finish');
      endSignal.removeEventListener('abort', endOnAbort);
      stopSignal.removeEventListener('abort', stopOnAbort);
      playSignal.removeEventListener('abort', playOnAbort);
      animation.removeEventListener('finish', () => onFinish(newIndex - 1));
      track4.removeEventListener('mouseover', () => {
        animation.pause();
      });

      track4.removeEventListener('mouseleave', () => {
        animation.play();
      });

      track5.removeEventListener('click', () => {
        // 얻어걸렸는데 transelate는 현재위치에서 이동이 되나?

        animation.pause();
        element.animate(
          [
            { transform: `translateY(${-20}px)` },
            { transform: `translateY(${-40}px)` },
          ],
          options,
        );
        onFinish(newIndex + 1);
      });

      track6.removeEventListener('click', track6Event);
      resolve(newIndex);
    };

    endSignal.addEventListener('abort', endOnAbort);
    stopSignal.addEventListener('abort', stopOnAbort);
    playSignal.addEventListener('abort', playOnAbort);
    animation.addEventListener('finish', () => onFinish(newIndex + 1)); // 애니메이션이 끝나면 발생하는 이벤트
    track4.addEventListener('mouseover', () => {
      animation.pause();
    });

    track5.addEventListener('click', () => {
      // 얻어걸렸는데 transelate는 현재위치에서 이동이 되나?

      animation.pause();
      element.animate(
        [
          { transform: `translateY(${-20}px)` },
          { transform: `translateY(${-40}px)` },
        ],
        options,
      );
      onFinish(newIndex + 1);
    });
    track6.addEventListener('click', track6Event);

    track4.addEventListener('mouseleave', () => {
      animation.play();
    });
  });
}
