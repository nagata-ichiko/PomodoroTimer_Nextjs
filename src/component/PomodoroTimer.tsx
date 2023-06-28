`use client`;
// components/PomodoroTimer.tsx
import React, { useEffect, useState } from "react";
import { useTimer } from "../hooks/useTimer";
import useSound from "use-sound";
import bellSound from "../public/sound/Horagai01-1.mp3"; // あなたのプロジェクトに適したサウンドファイルを使用してください。
export const PomodoroTimer: React.FC = () => {
  const workTimer = useTimer(25, 0);
  const breakTimer = useTimer(5, 0);
  const [isWorking, setIsWorking] = useState(true);

  useEffect(() => {
    if (isWorking && workTimer.minutes === 0 && workTimer.seconds === 0) {
      setIsWorking(false);
      workTimer.resetTimer();
      breakTimer.toggleTimer();
    } else if (
      !isWorking &&
      breakTimer.minutes === 0 &&
      breakTimer.seconds === 0
    ) {
      setIsWorking(true);
      breakTimer.resetTimer();
      workTimer.toggleTimer();
    }
  }, [
    workTimer.minutes,
    workTimer.seconds,
    breakTimer.minutes,
    breakTimer.seconds,
  ]);
  return (
    <div>
      <h1>Pomodoro Timer</h1>
      <audio controls src="/sound/Horagai01-1.mp3" />
      <audio controls src="src\sound\Horagai01-1.mp3" />
      <audio
        controls
        src="webpack-internal:///(app-client)/sound/Horagai01-1.mp3"
      />
      {/* <audio controls src={bellSound} />
      <audio controls src={bellSound} /> */}
      {isWorking ? (
        <>
          <p>
            Work Time Left: {workTimer.minutes}:
            {workTimer.seconds < 10
              ? `0${workTimer.seconds}`
              : workTimer.seconds}
          </p>
          <button onClick={workTimer.toggleTimer}>
            {workTimer.isRunning ? "Pause" : "Start"}
          </button>
        </>
      ) : (
        <>
          <p>
            Break Time Left: {breakTimer.minutes}:
            {breakTimer.seconds < 10
              ? `0${breakTimer.seconds}`
              : breakTimer.seconds}
          </p>
          <button onClick={breakTimer.toggleTimer}>
            {breakTimer.isRunning ? "Pause" : "Start"}
          </button>
        </>
      )}
      <button
        onClick={() => {
          workTimer.resetTimer();
          breakTimer.resetTimer();
          setIsWorking(true);
        }}
      >
        Reset
      </button>
    </div>
  );
};
