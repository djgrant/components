import React from "react";
import { tw } from "tailwindcss-classnames";

const classes = tw("prose-sm", "lg:prose", "xl:prose-xl");

export const Prose = ({ children, className }) => (
  <div className={`${classes} ${className}`}>{children}</div>
);
