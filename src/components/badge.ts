import { tw, TBackgroundColor, TwClass } from "../utils/tw";

interface Props {
  color: TBackgroundColor;
}

export const Badge = tw.span<Props>((props) => [
  "w-6",
  "h-6",
  "leading-6",
  "text-xs",
  "text-center",
  "text-white",
  "font-bold",
  `text-${props.color}-600` as TwClass,
  `bg-${props.color}-300` as TwClass,
  "rounded-lg",
]);
