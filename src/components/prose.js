import React from "react";
import { tw } from "tailwindcss-classnames";

const classes = tw("prose", "prose-sm", "lg:prose");

export const Prose = ({ children, className }) => (
  <div className={`${classes} ${className}`}>{children}</div>
);
