import React from "react";
import { tw, switchcase, ifElse } from "@djgrant/react-tailwind";
import { TBackgroundColor } from "tailwindcss-classnames";

export interface InputProps {
  type: "checkbox" | "radio";
  size: "sm" | "lg";
  color: TBackgroundColor;
}

const BaseInput = tw.input(({ type, size, color }: InputProps) => [
  switchcase(type, {
    checkbox: "form-checkbox",
    radio: "form-radio",
    default: "form-input",
  }),
  ifElse(["checkbox", "radio"].includes(type), [
    switchcase(size, {
      sm: ["w-4", "h-4"],
      lg: ["w-6", "h-6"],
      default: ["w-5", "h-5"],
    }),
    ifElse(color, `text-${color}-600`),
  ]),
]);

const getInputStyles = ({ type }: { type: InputProps["type"] }) =>
  switchcase(type, {
    search: {
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23a0aec0' viewBox='0 0 20 20' %3E%3Cpath d='M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z'%3E%3C/path%3E%3C/svg%3E")`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "calc(100% - 8px) 50%",
      backgroundSize: "20px 20px",
    },
  });

export const Input = (props: InputProps) => {
  return <BaseInput {...props} style={getInputStyles(props)} />;
};
