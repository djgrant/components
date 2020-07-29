import { tw, switchcase } from "@djgrant/react-tailwind";

export interface LabelProps {
  layout?: "col" | "inline";
}

export const Label = tw.label<LabelProps>((props) => [
  "block",
  "text-gray-700",
  switchcase(props.layout, {
    col: [
      "w-full",
      "space-y-2",
      "md:flex",
      "md:items-center",
      "md:space-x-3",
      "md:space-y-0",
      "md:text-right",
    ],
    inline: ["flex", "items-center", "space-y-0", "space-x-2"],
    default: "space-y-2",
  }),
]);
