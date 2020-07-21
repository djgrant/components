import React from "react";
import { tw } from "tailwindcss-classnames";

const classes = tw("inline-block", "border-2", "rounded-full", "w-6", "h-6");

const getEntity = (props) =>
  ({
    plus: "+",
    minus: "-",
  }[props.type]);

export const Icon = (props) => (
  <span className={`${classes.join(" ")} ${props.className}}`}>
    {getEntity(props)}
  </span>
);
