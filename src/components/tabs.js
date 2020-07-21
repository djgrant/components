import React from "react";
import { TabMatch } from "./tab-match";
import { Link } from "@reach/router";
import { tw } from "tailwindcss-classnames";

const getTabsClasses = (direction) =>
  tw("flex", {
    "flex-col": direction === "vertical",
    "sm:flex-row": direction === "horizonal",
  });

const getTabClasses = (active, direction) =>
  tw(
    "block",
    "font-medium",
    "text-gray-600",
    "hover:text-blue-500",
    "no-underline",
    "border-transparent",
    "text-base",
    {
      "text-blue-500": active,
      "border-blue-500": active,
    },
    direction === "vertical" && ["py-3", "pl-5", "border-l-4"],
    direction === "horizontal" && ["py-4", "px-6", "border-b-4"],
    direction === "vertical" && active && "border-l-4",
    direction === "horizontal" && active && "border-b-4"
  );

export const Tabs = ({ children, direction = "horizontal", className }) => (
  <nav className={tw(getTabsClasses(direction), className)}>
    {React.Children.map(children, (el) =>
      React.cloneElement(el, { direction })
    )}
  </nav>
);

export const Tab = ({ children, to, direction, ...props }) => (
  <TabMatch match={to.startsWith("#") ? to : `${to}/*`} {...props}>
    {(active) =>
      active ? (
        <div className={getTabClasses(true, direction)}>{children}</div>
      ) : (
        <Link
          to={to.startsWith("#") ? window.location.pathname + to : to}
          replace={to.startsWith("#")}
          className={getTabClasses(false, direction)}
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
