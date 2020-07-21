import React from "react";
import { Match, Location } from "@reach/router";

/* 
  TabMatch
  
  @prop default   When passed, if none of the other tabs are active, this tab will be made active
  @prop match     A @reach/router compatible path. Matches relative to current @reach/router route context
  @prop children  Rendered when props.match matches the current url
  
  @side-effect    When the default case is reached, the component redirects *and* renders children. 
                  This avoids a flash of content.
*/

export const TabMatch = ({
  children,
  match,
  default: isDefault,
  defaultOf,
}) => {
  isDefault = isDefault || typeof defaultOf === "string";
  match = stripLeadingSlash(stripTrailingSlash(match));
  const parentPath = defaultOf || "./";

  if (match.startsWith("#")) {
    return (
      <Location>
        {({ location, navigate }) => {
          const isMatch = location.hash === match;
          const isDefaultMatch = isDefault && ["", "#"].includes(location.hash);
          if (isMatch) return children(true);
          if (!isDefaultMatch) return children(false);
          const navigateUrl = getNavigateUrl(location, parentPath, match);
          navigate(navigateUrl, { replace: true });
          return children(true);
        }}
      </Location>
    );
  }
  return (
    <Match path={parentPath}>
      {({ match: parentPathMatch }) => {
        const isDefaultMatch = isDefault && Boolean(parentPathMatch);
        return (
          <Match path={match}>
            {({ match: pathMatch, location, navigate }) => {
              if (pathMatch) return children(true);
              if (!isDefaultMatch) return children(false);
              const navigateUrl = getNavigateUrl(location, parentPath, match);
              navigate(navigateUrl, { replace: true });
              return children(true);
            }}
          </Match>
        );
      }}
    </Match>
  );
};

const stripTrailingSlash = (str) => str.replace(/\/+$/, "");
const stripLeadingSlash = (str) => str.replace(/^\/+/, "");

const getNavigateUrl = (location, parentPath, match) => {
  const parentPathSegment = parentPath.replace("./", "");
  const pathRelativeToParent = match
    .replace(`${parentPathSegment}/`, "")
    .replace("/*", "");

  return [location.pathname, pathRelativeToParent]
    .map(stripTrailingSlash)
    .join("/");
};
