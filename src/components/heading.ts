import React from "react";
import { tw } from "../utils/tw";
import { switchcase } from "../utils/fp";

type Level = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface Props {
  Level: boolean;
  className: string;
}

const getHeadingComponent = (level: Level) =>
  tw(level)(
    switchcase(level, {
      h1: ["text-2xl", "font-bold", "font-heading"],
      h2: ["text-xl", "font-heading"],
      h3: ["text-lg", "font-bold", "text-gray-800", "font-heading"],
      h4: ["font-bold", "text-gray-500"],
      h5: ["text-sm", "font-bold", "uppercase", "text-gray-800"],
      h6: ["text-xs", "font-medium", "uppercase", "text-gray-500"],
    })
  );

export const Heading: React.FC<Props> = ({
  children,
  className,
  ...levels
}) => {
  const level = (Object.keys(levels).filter(Boolean)[0] || "h3") as Level;
  return React.createElement(
    getHeadingComponent(level),
    { className },
    children
  );
};
