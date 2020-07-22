import React from "react";
import { tw } from "tailwindcss-classnames";

const baseClasses = tw("font-semibold", "rounded");

const solidClasses = tw("bg-blue-500", "hover:bg-blue-700", "text-white");

const outlineClasses = tw(
  "bg-white",
  "hover:bg-gray-100",
  "text-gray-800",
  "border-gray-400",
  "border"
);

const getTypeClasses = (props) =>
  ({
    solid: solidClasses,
    outline: outlineClasses,
  }[props.type || "solid"]);

const getSizeClasses = (props) =>
  ({
    lg: tw("text-base", "py-3", "px-4"),
    md: tw("text-sm", "py-2", "px-3"),
    sm: tw("text-xs", "py-1", "px-2"),
  }[props.size || "md"]);

export const Button = (props) => (
  <button
    {...props}
    className={tw(
      baseClasses,
      getTypeClasses(props),
      getSizeClasses(props),
      props.className
    )}
  />
);
