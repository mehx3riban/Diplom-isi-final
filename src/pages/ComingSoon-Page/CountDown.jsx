import React, { useState, useEffect } from "react";
import './CountDown.scss'
const CountDown = ({ delayResend = "1600900" }) => {
  const [delay, setDelay] = useState(+delayResend);
  const days = Math.floor(delay / (60 * 60 * 24));
  const hours = Math.floor((delay % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((delay % (60 * 60)) / 60);
  const seconds = Math.floor(delay % 60);
  useEffect(() => {
    const timer = setInterval(() => {
      setDelay(delay - 1);
    }, 1000);

    if (delay === 0) {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  });

  return (
    <>

        <div className=" d-flex  ">
            <div className="count-down d-flex flex-column justify-content-center align-items-center ">
                <div className="countdowns">
                     {days}
                </div>
                <h4 className="count-time">days</h4>
            </div>

            <div className="count-down d-flex flex-column justify-content-center align-items-center ">
                <div className="countdowns">
                    {hours}
                </div>
                
                <h4 className="count-time">hours</h4>
            </div>

            <div className="count-down  d-flex flex-column justify-content-center align-items-center ">
                <div className="countdowns">
                    {minutes}
                </div>
                <h4 className="count-time d-flex flex-column justify-content-center align-items-center ">minutes</h4>
            </div>

            <div className="count-down d-flex flex-column justify-content-center align-items-center ">
                <div className="countdowns">
                     {seconds}
                </div>
                <h4 className="count-time">seconds</h4>
            </div>
        </div>
      
    </>
  );
};

export default CountDown;