// hooks/useTimer.ts
import { useState, useEffect } from "react";
import useSound from "use-sound";
import sound from "../sound/Horagai01-1.mp3"; // あなたのプロジェクトに適したサウンドファイルを使用してください。

export function useTimer(initialMinutes: number, initialSeconds: number) {
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isRunning, setIsRunning] = useState(false);
  const [play] = useSound(sound);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isRunning && (minutes > 0 || seconds > 0)) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds > 0) {
            return prevSeconds - 1;
          }
          setMinutes((prevMinutes) => prevMinutes - 1);
          return 59;
        });
      }, 1000);
    } else if (isRunning && minutes === 0 && seconds === 0) {
      //   play();
      setIsRunning(false);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [minutes, seconds, isRunning, play]);
  // }, [minutes, seconds, isRunning]);

  const resetTimer = () => {
    setMinutes(initialMinutes);
    setSeconds(initialSeconds);
    setIsRunning(false);
  };

  const toggleTimer = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  return { minutes, seconds, isRunning, resetTimer, toggleTimer };
}
