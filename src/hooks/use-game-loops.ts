import { useEffect, useRef } from "react";
// TODO: Examine the hook together

export function useGameLoop(
  callback: () => void,
  speed: number,
  isRunning: boolean
) {
  const savedCallback = useRef<() => void>(() => { });
  useEffect(() => {
    savedCallback.current = callback;
  });
  useEffect(() => {
    if (!isRunning) return;
    const id = setInterval(() => {
      savedCallback.current?.();
    }, speed);
    return () => clearInterval(id);
    // const handleKey = (e: KeyboardEvent) => {
    //   if (e.key === ' ') {
    //     savedCallback.current?.();
    //   }
    // }
    // window.addEventListener("keydown", handleKey);
    // return () => window.removeEventListener("keydown", handleKey);
  }, [speed, isRunning]);
}
