import React from "react";
import { tw } from "tailwindcss-classnames";

const getClassNames = (level) =>
  ({
    h1: tw("text-2xl", "font-bold"),
    h2: tw("text-xl", "text-gray-700"),
    h3: tw("text-lg", "font-bold"),
    h4: tw("text-sm", "font-bold"),
    h5: tw("text-xs", "font-medium"),
  }[level]);

export const Heading = ({ children, as, className, ...levels }) => {
  const level = Object.keys(levels).filter(Boolean)[0] || "h3";
  return React.createElement(
    as || level,
    { className: tw(getClassNames(level), className) },
    children
  );
};
