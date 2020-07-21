import React from "react";

export const Prose = ({ children, className }) => (
  <div className={`prose-sm lg:prose xl:prose-xl ${className}`}>{children}</div>
);
