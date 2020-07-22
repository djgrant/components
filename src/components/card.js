import React from "react";
import { tw } from "tailwindcss-classnames";

const classes = tw("rounded", "overflow-hidden", "shadow-lg", "bg-white");

export const Card = (props) => (
  <div {...props} className={[classes, props.className].join(" ")} />
);
