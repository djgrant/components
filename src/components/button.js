import { tw } from "../utils/tw";
import { switchOn } from "../utils/fp";

export const Button = tw.button(({ type, size }) => [
  "font-semibold",
  "rounded",
  switchOn(type, {
    outline: [
      "bg-white",
      "hover:bg-gray-100",
      "text-gray-800",
      "border-gray-400",
      "border",
    ],
    default: ["bg-blue-500", "hover:bg-blue-700", "text-white"],
  }),
  switchOn(size, {
    lg: ["text-base", "py-3", "px-4"],
    sm: ["text-xs", "py-1", "px-2"],
    default: ["text-sm", "py-2", "px-3"],
  }),
]);
