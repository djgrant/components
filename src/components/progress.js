import React from "react";
import { tw } from "tailwindcss-classnames";

const getHeight = (config) =>
  ({
    sm: 6,
    md: 8,
    lg: 10,
  }[config.size || "md"]);

const getWrapperClasses = () =>
  tw(
    "relative",
    "flex",
    "w-full",
    "overflow-hidden",
    "bg-gray-300",
    "rounded-md",
    "shadow-inner"
  );

const getBarClass = (bar, config) =>
  tw(`h-${getHeight(config)}`, "px-2", "py-1", `bg-${bar.color}-400`);

const getTextClasses = (config) =>
  tw(
    "absolute",
    "inset-0",
    "h-full",
    "px-2",
    "text-xs",
    "text-white",
    `leading-${getHeight(config)}`,
    "pointer-events-none"
  );

export const Progress = ({ children, bars, ...config }) => {
  return (
    <div className={getWrapperClasses(config)}>
      {bars.map((bar, i) => (
        <div
          key={i}
          className={getBarClass(bar, config)}
          style={{ width: `${bar.pc}%` }}
          title={bar.label}
        ></div>
      ))}
      <div className={getTextClasses(config)}>{children}</div>
    </div>
  );
};
