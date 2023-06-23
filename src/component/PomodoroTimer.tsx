// components/PomodoroTimer.tsx
import React, { useState } from "react";
import { useTimer } from "../hooks/useTimer";
import { TimerSetting } from "./TimerSetting";

export const PomodoroTimer: React.FC = () => {
  const [workMinutes, setWorkMinutes] = useState(25);
  const [workSeconds, setWorkSeconds] = useState(0);
  const [breakMinutes, setBreakMinutes] = useState(5);
  const [breakSeconds, setBreakSeconds] = useState(0);
  const workTimer = useTimer(workMinutes, workSeconds);
  const breakTimer = useTimer(breakMinutes, breakSeconds);
  const [isWorking, setIsWorking] = useState(true);

  const handleSettingChange = (
    workMins: number,
    workSecs: number,
    breakMins: number,
    breakSecs: number
  ) => {
    setWorkMinutes(workMins);
    setWorkSeconds(workSecs);
    setBreakMinutes(breakMins);
    setBreakSeconds(breakSecs);
    workTimer.resetTimer();
    breakTimer.resetTimer();
    setIsWorking(true);
  };

  return (
    <div>
      <TimerSetting onSettingChange={handleSettingChange} />
      <h1>Pomodoro Timer</h1>
    </div>
  );
};
