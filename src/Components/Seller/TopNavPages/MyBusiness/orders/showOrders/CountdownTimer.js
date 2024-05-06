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

  const getBorderColor = (value) => {
    if (value <= 0) {
      return "#ccc"; // Default color
    } else if (value <= 1) {
      return "#8B0000";
    } else if (value <= 10) {
      return "red";
    } else if (value <= 20) {
      return "#FF8C00"; // Red color when time is less than or equal to 10
    } else if (value <= 30) {
      return "#f7b233";
    } else if (value <= 40) {
      return "#32CD32";
    } else if (value <= 50) {
      return "green"; // Orange color when time is less than or equal to 30
    } else {
      return "#006400"; // Green color for normal time
    }
  };

  return (
    <Root>
      <div
        className="countdown-timer"
        style={{ textAlign: "center", padding: "10px" }}
      >
        {timeLeft.days > -1 && (
          <Circle borderColor={getBorderColor(timeLeft.days)}>
            {timeLeft.days}d
          </Circle>
        )}
        {timeLeft.hours > 0 && (
          <Circle borderColor={getBorderColor(timeLeft.hours)}>
            {timeLeft.hours}h
          </Circle>
        )}
        {timeLeft.minutes > -1 && (
          <Circle borderColor={getBorderColor(timeLeft.minutes)}>
            {timeLeft.minutes}m
          </Circle>
        )}
        {timeLeft.seconds > -1 && (
          <Circle borderColor={getBorderColor(timeLeft.seconds)}>
            {timeLeft.seconds}s
          </Circle>
        )}
        {Object.keys(timeLeft).length === 0 && <span>Order completed!</span>}
      </div>
    </Root>
  );
};

export default CountdownTimer;

const Root = styled.section`
  .countdown-timer {
    width: 60vw;
    height: 200px;
    margin: 40px 20px;
    display: flex !important;
    justify-content: space-between;
  }
`;

const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin: 20px;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  box-shadow: 1px 5px 15px 1px #ccc;
  border: 6px solid ${(props) => props.borderColor};
  transition: border-color 2s ease;
`;
