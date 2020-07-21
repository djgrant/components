import React from "react";
import { tw } from "tailwindcss-classnames";

const classes = tw("max-w-lg", "mx-auto");

export const Container = ({ children, className }) => (
  <div className={`${classes} ${className}`}>{children}</div>
);
