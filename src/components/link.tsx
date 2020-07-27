import React from "react";
import { Link as RouterLink } from "@reach/router";
import { tw } from "../utils/tw";

const ExternalLink = tw.a("text-green-600");
const InternalLink = tw(RouterLink)("text-green-600");

// const A = () => <a />

interface Props {
  to: string;
}

export const Link: React.FC<Props> = ({ to, ...props }) => {
  if (to.startsWith("http")) {
    return (
      <ExternalLink {...props} href={to}>
        {props.children}
      </ExternalLink>
    );
  }
  return <InternalLink to={to} {...props} />;
};
