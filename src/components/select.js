import React from "react";
import { tw } from "tailwindcss-classnames";

const classes = tw(
  "appearance-none",
  "w-full",
  "bg-gray-100",
  "border",
  "border-gray-400",
  "text-gray-700",
  "py-3",
  "px-4",
  "pr-8",
  "rounded",
  "leading-tight",
  "focus:outline-none",
  "focus:bg-white",
  "focus:border-gray-500"
);

export const Select = (props) => (
  <div className={`${tw("relative", "inline-block")} ${props.className}`}>
    <select {...props} className={classes} />
    <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
      <svg
        className="w-4 h-4 fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
      </svg>
    </div>
  </div>
);
