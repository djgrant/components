import React from "react";
import { tw } from "tailwindcss-classnames";

const getInputClasses = (props) =>
  tw(
    {
      "form-checkbox": props.type === "checkbox",
      "form-radio": props.type === "radio",
      "form-input": !["checkbox", "radio"].includes(props.type),
    },
    ["checkbox", "radio"].includes(props.type) && [
      props.color && `text-${props.color}-600`,
      {
        sm: ["w-4", "h-4"],
        lg: ["w-6", "h-6"],
      }[props.size] || ["w-5", "h-5"],
    ],
    props.className
  );

const getInputStyles = (props) =>
  ({
    search: {
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23a0aec0' viewBox='0 0 20 20' %3E%3Cpath d='M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z'%3E%3C/path%3E%3C/svg%3E")`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "calc(100% - 8px) 50%",
      backgroundSize: "20px 20px",
    },
  }[props.type]);

const getSelectClasses = (props) =>
  tw(
    props.multiple ? ["form-multiselect", "block"] : "form-select",
    props.className
  );

const getLabelClasses = (props) =>
  tw(
    "block",
    "text-gray-700",
    props.layout === "col" && [
      "w-full",
      "space-y-2",
      "md:flex",
      "md:items-center",
      "md:space-x-3",
      "md:space-y-0",
      "md:text-right",
    ],
    props.layout === "inline" && [
      "flex",
      "items-center",
      "space-y-0",
      "space-x-2",
    ],
    !props.layout && "space-y-2",
    props.className
  );

export const Input = (props) => (
  <input
    {...props}
    className={getInputClasses(props)}
    style={getInputStyles(props)}
  />
);

export const Select = (props) => (
  <select {...props} className={getSelectClasses(props)} />
);

export const Textarea = (props) => (
  <textarea {...props} className={tw("form-textarea", props.className)} />
);

export const Label = (props) => (
  <label {...props} className={getLabelClasses(props)} />
);
