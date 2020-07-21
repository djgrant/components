import React from "react";
import { TabMatch } from "../containers/tabs";
import { Link } from "@reach/router";

const getTabClasses = (active) =>
  [
    "block",
    "py-4",
    "px-6",
    "font-medium",
    "text-gray-600",
    "hover:text-blue-500",
    !active && "text-blue-500",
    !active && "border-b-4",
    "border-blue-500",
    "no-underline",
  ]
    .filter(Boolean)
    .join(" ");

export const Tabs = ({ children }) => (
  <nav className="flex sm:flex-row">{children}</nav>
);

export const Tab = ({ children, to, ...props }) => (
  <TabMatch match={to.startsWith("#") ? to : `${to}/*`} {...props}>
    {(active) =>
      active ? (
        <div className={getTabClasses(false)}>{children}</div>
      ) : (
        <Link
          to={to.startsWith("#") ? window.location.pathname + to : to}
          replace={to.startsWith("#")}
          className={getTabClasses(true)}
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
