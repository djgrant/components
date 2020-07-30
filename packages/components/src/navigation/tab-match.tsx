import React from "react";
import { Match, Location, WindowLocation } from "@reach/router";

/* 
  TabMatch
  
  @prop default   When passed, if none of the other tabs are active, this tab will be made active
  @prop match     A @reach/router compatible path. Matches relative to current @reach/router route context
  @prop children  Rendered when props.match matches the current url
  
  @side-effect    When the default case is reached, the component redirects *and* renders children. 
                  This avoids a flash of content.
*/

export interface TabMatchPropsNoChildren {
  match: string;
  default?: boolean;
  defaultOf?: string;
}
export interface TabMatchProps extends TabMatchPropsNoChildren {
  children: (b: boolean) => React.ReactNode;
}

export const TabMatch: React.FC<TabMatchProps> = ({
  children,
  match,
  default: isDefault,
  defaultOf,
}) => {
  isDefault = isDefault || typeof defaultOf === "string";
  match = stripLeadingSlash(stripTrailingSlash(match));
  const parentPath = defaultOf || "./";

  return (
    <Match path={parentPath}>
      {({ match: parentPathMatch }) => {
        let isDefaultMatch = isDefault && Boolean(parentPathMatch);

        if (match.includes("#")) {
          return (
            <Location>
              {({ location, navigate }) => {
                const isMatch = location.hash === `#${match.split("#")[1]}`;
                isDefaultMatch =
                  isDefaultMatch && ["", "#"].includes(location.hash);
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

const stripTrailingSlash = (str: string) => str.replace(/\/+$/, "");
const stripLeadingSlash = (str: string) => str.replace(/^\/+/, "");

const getNavigateUrl = (
  location: WindowLocation,
  parentPath: string,
  match: string
) => {
  const parentPathSegment = parentPath.replace("./", "");
  const pathRelativeToParent = match
    .replace(`${parentPathSegment}${parentPathSegment && "/"}`, "")
    .replace("/*", "");

  return [location.pathname, pathRelativeToParent]
    .map(stripTrailingSlash)
    .join("/");
};
