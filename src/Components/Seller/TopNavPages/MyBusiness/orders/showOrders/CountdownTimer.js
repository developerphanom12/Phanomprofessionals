import React, { useState, useEffect } from "react";
import styled from "styled-components";

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <Root>
      <h2>Order Completion Countdown</h2>
      <div
        className="countdown-timer"
        style={{ textAlign: "center", padding: "20px" }}
      >
        {timeLeft.days > 0 && <span>{timeLeft.days}d </span>}
        {timeLeft.hours > 0 && <span>{timeLeft.hours}h </span>}
        {timeLeft.minutes > 0 && <span>{timeLeft.minutes}m </span>}
        {timeLeft.seconds > 0 && <span>{timeLeft.seconds}s </span>}
        {Object.keys(timeLeft).length === 0 && <span>Order completed!</span>}
      </div>
    </Root>
  );
};

export default CountdownTimer;
const Root = styled.section`
  span {
    padding: 20px 10px;
    margin: 5px;
    border: 1px solid #ccc;
  }
`;
