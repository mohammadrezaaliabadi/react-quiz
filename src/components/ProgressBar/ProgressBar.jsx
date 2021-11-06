import React from "react";
import { useEffect } from "react/cjs/react.development";
import "./ProgressBar.scss";
const ProgressBar = ({
  number,
  progress,
  counter,
  strokeDashoffset,
  decrease,
  finishTimeFunction,
}) => {
  useEffect(() => {
    let x = setInterval(() => {
      let count = counter();
      if (count === 0) {
        clearInterval(x);
        finishTimeFunction();
      } else {
        if (progress.current) {
          decrease(1);
          progress.current.style.strokeDashoffset =
            progress.current.style.strokeDashoffset - strokeDashoffset;
          number.current.innerHTML = count + "s";
        }
      }
    }, 1000);
  }, []);
  return (
    <div className="progressme">
      <div className="progress__outer">
        <div className="progress__inner">
          <div ref={number} className="progress__number"></div>
        </div>
      </div>
      <svg
        className="progress__svg"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="5rem"
        height="5rem"
      >
        <defs>
          <linearGradient id="GradientColor">
            <stop offset="0%" stop-color="#e91e63" />
            <stop offset="100%" stop-color="#673ab7" />
          </linearGradient>
        </defs>
        <circle
          ref={progress}
          className="progress__circle"
          cx="40"
          cy="40"
          r="35"
          stroke-linecap="round"
        />
      </svg>
    </div>
  );
};

export default ProgressBar;
