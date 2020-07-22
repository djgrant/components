import React from "react";
import { Link as BaseLink } from "@reach/router";
import { tw } from "tailwindcss-classnames";

const getLinkClasses = (props) => tw("text-green-600", props.className);

export const Link = (props) => (
  <BaseLink {...props} className={getLinkClasses(props)} />
);
