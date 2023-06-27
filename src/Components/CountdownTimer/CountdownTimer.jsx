import React, { useEffect, useState } from 'react';
import './CountdownTimer.scss'

const CountdownTimer = () => {
  const countdownDate = new Date(); //Set target countdown date
  countdownDate.setDate(countdownDate.getDate() + 20);

  const calculateTimeLeft = () => {
    const difference = +countdownDate - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className='countDown'>
      <h1>Time Left</h1>
      {timeLeft.days > 0 && (
        <div>
          <p>{timeLeft.days} days</p>
          <p>{timeLeft.hours} hours</p>
          <p>{timeLeft.minutes} minutes</p>
          <p>{timeLeft.seconds} seconds</p>
        </div>
      )}
      {timeLeft.days === 0 && (
        <div>
          <p>{timeLeft.hours} hours</p>
          <p>{timeLeft.minutes} minutes</p>
          <p>{timeLeft.seconds} seconds</p>
        </div>
      )}
      {timeLeft.days === 0 && timeLeft.hours === 0 && (
        <div>
          <p>{timeLeft.minutes} minutes</p>
          <p>{timeLeft.seconds} seconds</p>
        </div>
      )}
      {timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && (
        <div>
          <p>{timeLeft.seconds} seconds</p>
        </div>
      )}
      {Object.keys(timeLeft).length === 0 && (
        <p>Countdown timer has ended!</p>
      )}
    </div>
  );
};

export default CountdownTimer;
