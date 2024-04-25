import React from 'react'
import styled from 'styled-components'
import CountdownTimer from './CountdownTimer'

export default function ShowOrder() {
    const targetDate = new Date('2024-05-01T00:00:00');

    return (
      <div>
        <h1>Countdown Timer</h1>
        <CountdownTimer targetDate={targetDate} />
      </div>
    );
  };
const Root = styled.section`

`