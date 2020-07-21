import React from "react";

const getClassNames = (level) =>
  ({
    h1: "text-2xl font-bold",
    h2: "text-xl text-gray-700",
    h3: "text-lg font-bold ",
  }[level]);

export const Heading = ({ children, as, ...levels }) => {
  const level = Object.keys(levels).filter(Boolean)[0] || "h3";
  return React.createElement(
    as || level,
    { className: getClassNames(level) },
    children
  );
};
