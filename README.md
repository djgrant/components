# Component library

Packages for building user interfaces fast.

## [components](./packages/components)

A hacker-friendly collection of React components.

Lightweight, and written with [tailwindcss][tw], these components are intended for forking, rather than being bloated with configuration for every variant imaginable.

[Preview components →](https://components.danielgrant.co)

## [react-tailwind](./packages/react-tailwind)

Build React components using [tailwindcss][tw] and a clean, functional API.

Inspired by [styled-components][sc] and [classnames][cn].

```js
import { tw, switchcase } from "@djgrant/react-tailwind";

const Button = styled.button((props) => [
  "font-semibold",
  "rounded",
  switchcase(size, {
    lg: ["text-base", "py-3", "px-4"],
    sm: ["text-xs", "py-1", "px-2"],
    default: ["text-sm", "py-2", "px-3"],
  }),
]);

<Button size="lg">Submit</Button>;
```

[tw]: https://tailwindcss.com
[sc]: https://styled-components.com
[cn]: https://www.npmjs.com/package/classnames
