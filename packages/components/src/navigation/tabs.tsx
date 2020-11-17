import React from "react";
import { Link } from "@reach/router";
import { tw, switchcase, ifElse } from "@djgrant/react-tailwind";
import { TabMatch, TabMatchPropsNoChildren } from "./tab-match";

type Direction = "horizontal" | "vertical";

export interface TabsProps {
  direction?: Direction;
}

export interface TabProps extends Partial<TabMatchPropsNoChildren> {
  to: string;
  direction?: Direction;
  className?: string;
}

const StyledTabs = tw.nav(({ direction }: TabsProps) => [
  "flex",
  switchcase(direction, {
    vertical: "flex-col",
    horizontal: "sm:flex-row",
  }),
]);

const tabStyles = ({
  active,
  direction,
  className,
}: {
  active: boolean;
  direction: Direction;
  className?: string;
}) =>
  tw.classnames(
    "block",
    "font-medium",
    "text-gray-600",
    "hover:text-blue-500",
    "no-underline",
    "border-transparent",
    "text-base",
    switchcase(direction, {
      vertical: ["py-3", "pl-5", "border-l-4"],
      horizontal: ["py-4", "px-6", "border-b-4"],
    }),
    ifElse(active, ["text-blue-500", "border-blue-500"]),
    ifElse(
      active,
      switchcase(direction, {
        vertical: "border-l-4",
        horizontal: "border-b-4",
      })
    ),
    className
  );

export const Tabs: React.FC<TabsProps> = ({
  children,
  direction = "horizontal",
}) => (
  <StyledTabs direction={direction}>
    {React.Children.map(children, (el) => {
      if (React.isValidElement(el) && el.type === Tab) {
        return React.cloneElement(el, { direction });
      }
      return el;
    })}
  </StyledTabs>
);

export const Tab: React.FC<TabProps & { getClassName?: typeof tabStyles }> = ({
  children,
  to,
  direction = "horizontal",
  getClassName = tabStyles,
  ...props
}) => {
  return (
    <TabMatch match={to.startsWith("#") ? to : `${to}/*`} {...props}>
      {(active) =>
        active ? (
          <div
            className={getClassName({
              active,
              direction,
              className: props.className,
            })}
          >
            {children}
          </div>
        ) : (
          <Link
            className={getClassName({
              active,
              direction,
              className: props.className,
            })}
            to={to.startsWith("#") ? window.location.pathname + to : to}
            replace={to.startsWith("#")}
          >
            {children}
          </Link>
        )
      }
    </TabMatch>
  );
};

export const TabPanel: React.FC<TabMatchPropsNoChildren> = (props) => (
  <TabMatch {...props}>
    {(isMatch) =>
      isMatch ? <>{props.children}</> : <div hidden>{props.children}</div>
    }
  </TabMatch>
);

export const TabPage: React.FC<TabMatchPropsNoChildren> = (props) => (
  <TabMatch {...props}>
    {(isMatch) => (isMatch ? <>{props.children}</> : null)}
  </TabMatch>
);
