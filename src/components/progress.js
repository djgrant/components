import React from "react";
import { tw } from "../utils/tw";
import { switchOn } from "../utils/fp";

const BarContainer = tw.div(
  "relative",
  "flex",
  "w-full",
  "overflow-hidden",
  "bg-gray-300",
  "rounded-md",
  "shadow-inner"
);

const Bar = tw.div(({ color, size }) => [
  "px-2",
  "py-1",
  `bg-${color}-400`,
  switchOn(size, {
    sm: "h-6",
    default: "h-8",
    lg: "h-10",
  }),
]);

const Text = tw.div(({ size }) => [
  "absolute",
  "inset-0",
  "h-full",
  "px-2",
  "text-xs",
  "text-white",
  "pointer-events-none",
  switchOn(size, {
    sm: "leading-6",
    default: "leading-8",
    lg: "leading-10",
  }),
]);

export const Progress = ({ children, bars, size }) => {
  return (
    <BarContainer>
      {bars.map((bar, i) => (
        <Bar
          key={i}
          color={bar.color}
          size={size}
          style={{ width: `${bar.pc}%` }}
          title={bar.label}
        />
      ))}
      <Text size={size}>{children}</Text>
    </BarContainer>
  );
};
