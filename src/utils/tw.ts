import React from "react";
import { classnames, TArgs, TClasses } from "tailwindcss-classnames";
import { tags, Tag } from "./tags";

export * from "tailwindcss-classnames";
export type TwClass = "TAILWIND_CLASS";

export type TwClasses = TArgs<TClasses>;

type Props<T> = T & {
  as?: Tag;
  className?: string;
};

type As = Tag | React.ElementType;
type Args<T> = TwClasses[] | [TwMapper<T>];
type TwMapper<T> = (props: T) => TwClasses[];
type TwComponent<TProps> = React.FC<Props<TProps>>;

const isMapper = <T>(args: Args<T>): args is [TwMapper<T>] =>
  typeof args[0] === "function";

function createTwComponentFactory(as: As) {
  return <TProps>(...args: Args<TProps>): TwComponent<TProps> => {
    return (props) => {
      const twClasses: TwClasses[] = isMapper(args) ? args[0](props) : args;
      return React.createElement(props.as || as, {
        ...props,
        className: [
          classnames(...(twClasses as TwClasses[])),
          props.className,
        ].join(" "),
      });
    };
  };
}

interface Tw extends TwTagMethods {
  (as: As): <T>(...args: Args<T>) => TwComponent<T>;
}

type TwTagMethods = {
  [k in Tag]: <T>(...args: Args<T>) => TwComponent<T>;
};

interface Tw {
  classnames: (classes: TwClass) => "TAILWIND_CLASS";
}

const methods = {} as TwTagMethods;
tags.forEach((tag) => {
  methods[tag] = createTwComponentFactory(tag);
});

export const tw: Tw = Object.assign(createTwComponentFactory, methods, {
  classnames: (classes: TwClass) => classnames(classes as TArgs<TClasses>),
});
