import React from "react";

export const Container = ({ children, className }) => (
  <div className={`max-w-lg mx-auto ${className}`}>{children}</div>
);
