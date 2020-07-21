import React from "react";
import { tw } from "tailwindcss-classnames";

const baseClasses = tw("font-semibold", "rounded");
const blankClasses = tw("font-semibold", "text-gray-800");
const primaryClasses = tw("bg-blue-500", "hover:bg-blue-700", "text-white");
const secondaryClasses = tw(
  "bg-white",
  "hover:bg-gray-100",
  "text-gray-800",
  "border-gray-400",
  "border"
);

const getTypeClasses = (props) =>
  ({
    blank: blankClasses,
    primary: primaryClasses,
    [undefined]: secondaryClasses,
  }[props.type]);

const getSizeClasses = (props) =>
  ({
    l: tw("text-s", "py-3", "px-4"),
    m: tw("text-xs", "py-2", "px-3"),
    s: tw("text-xs", "py-1", "px-2"),
    0: tw("text-xs"),
    [undefined]: tw("text-xs", "py-2", "px-3"),
  }[props.size]);

export const Button = (props) => (
  <button
    {...props}
    className={[
      baseClasses,
      getTypeClasses(props),
      getSizeClasses(props),
      props.className,
    ].join(" ")}
  />
);
