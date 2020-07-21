import React from "react";
import { tw } from "tailwindcss-classnames";

const getClassNames = (level) =>
  tw(
    {
      h1: tw("text-2xl", "font-bold", "font-heading"),
      h2: tw("text-xl", "font-heading"),
      h3: tw("text-lg", "font-bold", "text-gray-800", "font-heading"),
      h4: tw("font-bold", "text-gray-500"),
      h5: tw("text-sm", "font-bold", "uppercase", "text-gray-800"),
      h6: tw("text-xs", "font-medium", "uppercase", "text-gray-500"),
    }[level]
  );

export const Heading = ({ children, as, className, ...levels }) => {
  const level = Object.keys(levels).filter(Boolean)[0] || "h3";
  return React.createElement(
    as || level,
    { className: tw(getClassNames(level), className) },
    children
  );
};
