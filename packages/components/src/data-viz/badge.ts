import { tw } from "@djgrant/react-tailwind";
import { TBackgroundColor } from "tailwindcss-classnames";

export interface BadgeProps {
  color: TBackgroundColor;
}

export const Badge = tw.span((props: BadgeProps) => [
  "w-6",
  "h-6",
  "leading-6",
  "text-xs",
  "text-center",
  "text-white",
  "font-bold",
  `text-${props.color}-600`,
  `bg-${props.color}-300`,
  "rounded-lg",
]);
