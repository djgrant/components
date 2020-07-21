import React from "react";

const baseClasses = ["font-semibold", "rounded"];

const secondaryClasses = [
  "bg-white",
  "hover:bg-gray-100",
  "text-gray-800",
  "border-gray-400",
  "border",
];

const primaryClasses = ["bg-blue-500", "hover:bg-blue-700", "text-white"];

const blankClasses = ["font-semibold", "text-gray-800"];

const getTypeClasses = (props) =>
  ({
    blank: blankClasses,
    primary: primaryClasses,
    [undefined]: secondaryClasses,
  }[props.type]);

const getSizeClasses = (props) =>
  ({
    l: ["text-s", "py-3", "px-4"],
    m: ["text-xs", "py-2", "px-3"],
    s: ["text-xs", "py-1", "px-2"],
    0: ["text-xs"],
    [undefined]: ["text-xs", "py-2", "px-3"],
  }[props.size]);

export const Button = (props) => (
  <button
    {...props}
    className={[
      ...baseClasses,
      ...getTypeClasses(props),
      ...getSizeClasses(props),
      props.className,
    ].join(" ")}
  />
);
