import React from "react";

const classes = ["rounded", "overflow-hidden", "shadow-lg", "bg-white", "p-3"];

export const Card = props => (
  <div {...props} className={[...classes, props.className].join(" ")} />
);
