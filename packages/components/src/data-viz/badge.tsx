import React from "react";
import { tw } from "@djgrant/react-tailwind";

interface BadgeProps {
  color: string;
}

const StyledBadge = tw.span<BadgeProps>((props) => [
  "h-6",
  "px-2",
  "leading-6",
  "text-xs",
  "text-center",
  "text-white",
  "font-bold",
  `text-${props.color}-600`,
  `bg-${props.color}-300`,
  "rounded-lg",
]);

export const Badge: React.FC<BadgeProps> = (props) => (
  <StyledBadge style={{ minWidth: "1.5rem" }} {...props} />
);

Badge.defaultProps = {
  color: "green",
};
