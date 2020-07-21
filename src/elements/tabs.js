import React from "react";
import { TabMatch } from "../containers/tabs";
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
    "border-blue-500",
    "no-underline",
    {
      "text-blue-500": !active,
      "border-b-4": !active && direction === "horizontal",
      "border-l-4": !active && direction === "vertical",
    },
    direction === "vertical" && ["py-3", "pl-4"],
    direction === "horizontal" && ["py-4", "px-6"]
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
        <div className={getTabClasses(false, direction)}>{children}</div>
      ) : (
        <Link
          to={to.startsWith("#") ? window.location.pathname + to : to}
          replace={to.startsWith("#")}
          className={getTabClasses(true, direction)}
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
