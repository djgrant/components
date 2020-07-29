import React from "react";
import { tw, switchcase, ifElse } from "@djgrant/react-tailwind";

type IntrinsicProps = JSX.IntrinsicElements["input"];
export interface StyledInputProps {
  type?: IntrinsicProps["type"];
  size?: "sm" | "lg";
  color?: string;
}

export type InputProps = IntrinsicProps & StyledInputProps;

export const BaseInput = tw.input<StyledInputProps>(({ type, size, color }) => [
  switchcase(type, {
    checkbox: "form-checkbox",
    radio: "form-radio",
    default: "form-input",
  }),
  ifElse(["checkbox", "radio"].includes(type || ""), [
    switchcase(size, {
      sm: ["w-4", "h-4"],
      lg: ["w-6", "h-6"],
      default: ["w-5", "h-5"],
    }),
    ifElse(color, `text-${color}-600`),
  ]),
]);

const getInputStyles = ({ type }: InputProps) =>
  switchcase<{}>(type, {
    search: {
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23a0aec0' viewBox='0 0 20 20' %3E%3Cpath d='M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z'%3E%3C/path%3E%3C/svg%3E")`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "calc(100% - 8px) 50%",
      backgroundSize: "20px 20px",
    },
  });

export const Input: React.FC<InputProps> = (props) => {
  return (
    <BaseInput
      {...props}
      type={props.type || "text"}
      style={getInputStyles(props)}
    />
  );
};
