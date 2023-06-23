// components/TimerSetting.tsx
import React, { useState } from "react";

interface TimerSettingProps {
  onSettingChange: (
    workMinutes: number,
    workSeconds: number,
    breakMinutes: number,
    breakSeconds: number
  ) => void;
}

export const TimerSetting: React.FC<TimerSettingProps> = ({
  onSettingChange,
}) => {
  const [workMinutes, setWorkMinutes] = useState(25);
  const [workSeconds, setWorkSeconds] = useState(0);
  const [breakMinutes, setBreakMinutes] = useState(5);
  const [breakSeconds, setBreakSeconds] = useState(0);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSettingChange(workMinutes, workSeconds, breakMinutes, breakSeconds);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Work Minutes:
        <input
          type="number"
          value={workMinutes}
          onChange={(e) => setWorkMinutes(Number(e.target.value))}
        />
      </label>
      <label>
        Work Seconds:
        <input
          type="number"
          value={workSeconds}
          onChange={(e) => setWorkSeconds(Number(e.target.value))}
        />
      </label>
      <label>
        Break Minutes:
        <input
          type="number"
          value={breakMinutes}
          onChange={(e) => setBreakMinutes(Number(e.target.value))}
        />
      </label>
      <label>
        Break Seconds:
        <input
          type="number"
          value={breakSeconds}
          onChange={(e) => setBreakSeconds(Number(e.target.value))}
        />
      </label>
      <button type="submit">Set Timer</button>
    </form>
  );
};
