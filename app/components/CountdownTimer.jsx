import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const CountdownTimer = () => {
  const children = ({ remainingTime }) => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;

    return `${minutes}:${seconds}`;
  };

  const renderTime = ({ remainingTime }) => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;

    return (
      <div className="timer flex flex-col items-center">
        <div className="text">Thời gian còn lại:</div>
        <div className="value text-4xl">{`${minutes}:${seconds}`}</div>
      </div>
    );
  };

  return (
    <div className="timer-wrapper">
      <CountdownCircleTimer
        isPlaying
        duration={1200}
        colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
        colorsTime={[10, 6, 3, 0]}
        onComplete={() => ({ shouldRepeat: true, delay: 1 })}>
        {renderTime}
      </CountdownCircleTimer>
    </div>
  );
};

export default CountdownTimer;
