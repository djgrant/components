import React from "react";
import { tw, switchcase } from "@djgrant/react-tailwind";

type Level = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type LevelProps = {
  [k in Level]: boolean;
};

export interface HeadingProps extends LevelProps {
  as?: Level;
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

export const Heading: React.FC<HeadingProps> = ({
  children,
  as,
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
