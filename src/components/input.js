import React from "react";
import { tw } from "tailwindcss-classnames";

const getInputClasses = (props) =>
  tw(
    "appearance-none",
    "bg-gray-100",
    "border",
    "border-gray-400",
    "text-gray-700",
    "py-3",
    "px-3",
    "rounded",
    "leading-tight",
    "focus:outline-none",
    "focus:bg-white",
    "focus:border-gray-500",
    "text-sm",
    {
      "pr-8": props.icon,
    }
  );

const iconClasses = tw(
  "absolute",
  "inset-y-0",
  "right-0",
  "flex",
  "items-center",
  "px-2",
  "text-gray-700",
  "pointer-events-none"
);

export const Input = (props) => (
  <div className={tw("relative", "inline-block", props.className)}>
    {React.createElement(props.as || "input", {
      ...props,
      className: tw(getInputClasses(props)),
    })}
    {props.icon && <div className={iconClasses}>{props.icon}</div>}
  </div>
);

export const Search = (props) => (
  <Input
    {...props}
    type="search"
    icon={
      <svg
        className="w-4 h-4 fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
      </svg>
    }
  />
);

export const Select = (props) => (
  <Input
    {...props}
    as="select"
    icon={
      <svg
        className="w-4 h-4 fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
      </svg>
    }
  />
);
