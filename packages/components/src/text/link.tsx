import React from "react";
import { Link as RouterLink, LinkProps } from "@reach/router";
import { tw } from "@djgrant/react-tailwind";

export const ExternalLink = tw.a("text-green-600");
const InternalLink = tw(RouterLink)("text-green-600");

export const Link: React.FC<LinkProps<{}>> = ({ to, ...props }) => {
  if (to.startsWith("http")) {
    return (
      <ExternalLink {...props} href={to}>
        {props.children}
      </ExternalLink>
    );
  }
  // @ts-ignore
  return <InternalLink to={to} {...props} />;
};
