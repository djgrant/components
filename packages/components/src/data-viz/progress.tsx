import React from "react";
import { tw, switchcase } from "@djgrant/react-tailwind";

type Size = "sm" | "lg";

interface ProgressProps {
  bars: Array<{
    className: string;
    size?: Size;
    label: string;
    pc: number;
  }>;
  size: Size;
}

interface BarProps {
  className: string;
  size?: Size;
}

interface TextProps {
  size: Size;
}

const BarContainer = tw.div([
  "relative",
  "flex",
  "w-full",
  "overflow-hidden",
  "bg-gray-300",
  "rounded-md",
  "shadow-inner",
]);

const Bar = tw.div<BarProps>(({ size }) => [
  "px-2",
  "py-1",
  switchcase(size, {
    sm: "h-6",
    default: "h-8",
    lg: "h-10",
  }),
]);

const Text = tw.div<TextProps>(({ size }) => [
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
          className={bar.className}
          size={size}
          style={{ width: `${bar.pc}%` }}
          title={bar.label}
        />
      ))}
      <Text size={size}>{children}</Text>
    </BarContainer>
  );
};
