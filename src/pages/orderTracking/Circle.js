import React from "react";
import PropTypes from "prop-types";

const CircleProgressBar = ({
  progressMinutes,
  totalMinutes,
  size,
  strokeWidth,
  backgroundColor,
  progressColor,
  textColor,
}) => {
  const progress = (progressMinutes / totalMinutes) * 100;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <svg width={size} height={size}>
      <circle
        className="circle-progress-bar-background"
        cx={size / 2}
        cy={size / 2}
        r={radius}
        strokeWidth={strokeWidth}
        fill="none"
        stroke={backgroundColor}
      />
      <circle
        className="circle-progress-bar-progress"
        cx={size / 2}
        cy={size / 2}
        r={radius}
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        fill="#fff"
        stroke={progressColor}
      />
      <text
        className="progress__width"
        x="50%"
        y="40%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill={textColor}>
        {progressMinutes}
      </text>
      <text
        className="circle-progress-bar-text "
        x="50%"
        y="65%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill={textColor}>
        min away
      </text>
    </svg>
  );
};

CircleProgressBar.propTypes = {
  progressMinutes: PropTypes.number,
  totalMinutes: PropTypes.number,
  size: PropTypes.number,
  strokeWidth: PropTypes.number,
  backgroundColor: PropTypes.string,
  progressColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default CircleProgressBar;
