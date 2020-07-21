import React from "react";
import { tw } from "tailwindcss-classnames";

const getClassNames = (level) =>
  ({
    h1: tw("text-2xl", "font-bold"),
    h2: tw("text-xl"),
    h3: tw("text-lg", "font-bold", "text-gray-800"),
    h4: tw("font-bold", "text-gray-500"),
    h5: tw("text-sm", "font-bold", "uppercase", "text-gray-800"),
    h6: tw("text-xs", "font-medium", "uppercase", "text-gray-500"),
  }[level]);

export const Heading = ({ children, as, className, ...levels }) => {
  const level = Object.keys(levels).filter(Boolean)[0] || "h3";
  return React.createElement(
    as || level,
    { className: tw(getClassNames(level), className) },
    children
  );
};
