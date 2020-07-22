import React from "react";
import { TabMatch } from "./tab-match";
import { Link } from "@reach/router";
import { tw } from "../utils/tw";
import { switchOn, ifElse } from "../utils/fp";

const StyledTabs = tw.nav(({ direction }) => [
  "flex",
  switchOn(direction, {
    vertical: "flex-col",
    horizontal: "sm:flex-row",
  }),
]);

const tabStyles = ({ active, direction }) =>
  tw.classnames(
    "block",
    "font-medium",
    "text-gray-600",
    "hover:text-blue-500",
    "no-underline",
    "border-transparent",
    "text-base",
    switchOn(direction, {
      vertical: ["py-3", "pl-5", "border-l-4"],
      horizontal: ["py-4", "px-6", "border-b-4"],
    }),
    ifElse(active, ["text-blue-500", "border-blue-500"]),
    ifElse(
      active,
      switchOn(direction, {
        vertical: "border-l-4",
        horizontal: "border-b-4",
      })
    )
  );

export const Tabs = ({ children, direction = "horizontal" }) => (
  <StyledTabs direction={direction}>
    {React.Children.map(children, (el) =>
      React.cloneElement(el, { direction })
    )}
  </StyledTabs>
);

export const Tab = ({ children, to, direction, ...props }) => (
  <TabMatch match={to.startsWith("#") ? to : `${to}/*`} {...props}>
    {(active) =>
      active ? (
        <div className={tabStyles({ active, direction })}>{children}</div>
      ) : (
        <Link
          className={tabStyles({ active, direction })}
          to={to.startsWith("#") ? window.location.pathname + to : to}
          replace={to.startsWith("#")}
        >
          {children}
        </Link>
      )
    }
  </TabMatch>
);

export const TabPanel = (props) => (
  <TabMatch {...props}>
    {(isMatch) =>
      isMatch ? <>{props.children}</> : <div hidden>{props.children}</div>
    }
  </TabMatch>
);

export const TabPage = (props) => (
  <TabMatch {...props}>
    {(isMatch) => (isMatch ? <>{props.children}</> : null)}
  </TabMatch>
);
