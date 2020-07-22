import React from "react";
import { Link as InternalLink } from "@reach/router";
import { tw } from "tailwindcss-classnames";

const getLinkClasses = (props) => tw("text-green-600", props.className);

export const Link = (props) => {
  if (props.to.startsWith("http")) {
    return (
      <a {...props} href={props.to} className={getLinkClasses(props)}>
        {props.children}
      </a>
    );
  }
  return <InternalLink {...props} className={getLinkClasses(props)} />;
};
