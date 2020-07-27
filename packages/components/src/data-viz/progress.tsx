import React from "react";
import { tw, switchcase } from "@djgrant/react-tailwind";
import { TBackgroundColor } from "tailwindcss-classnames";

type Size = "sm" | "lg";

interface ProgressProps {
  bars: Array<BarProps>;
  size: Size;
}

interface BarProps {
  color: TBackgroundColor;
  size: Size;
  label: string;
  pc: number;
}

interface TextProps {
  size: Size;
}

const BarContainer = tw.div(
  "relative",
  "flex",
  "w-full",
  "overflow-hidden",
  "bg-gray-300",
  "rounded-md",
  "shadow-inner"
);

const Bar = tw.div(({ color, size }: BarProps) => [
  "px-2",
  "py-1",
  `bg-${color}-400`,
  switchcase(size, {
    sm: "h-6",
    default: "h-8",
    lg: "h-10",
  }),
]);

const Text = tw.div(({ size }: TextProps) => [
  "absolute",
  "inset-0",
  "h-full",
  "px-2",
  "text-xs",
  "text-white",
  "pointer-events-none",
  switchcase(size, {
    sm: "leading-6",
    default: "leading-8",
    lg: "leading-10",
  }),
]);

export const Progress: React.FC<ProgressProps> = ({ children, bars, size }) => {
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
