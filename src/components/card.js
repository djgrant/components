import React from "react";
import { tw } from "tailwindcss-classnames";

const classes = tw(
  "rounded",
  "overflow-hidden",
  "shadow-lg",
  "bg-white",
  "p-3"
);

export const Card = (props) => (
  <div {...props} className={[classes, props.className].join(" ")} />
);
