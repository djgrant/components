import React from "react";
import { tw } from "tailwindcss-classnames";

export const Badge = (props) => (
  <span
    {...props}
    className={tw(
      "w-6",
      "h-6",
      "leading-6",
      "text-xs",
      "text-center",
      "text-white",
      "font-bold",
      `text-${props.color}-600`,
      `bg-${props.color}-300`,
      "rounded-lg",
      props.className
    )}
  />
);
