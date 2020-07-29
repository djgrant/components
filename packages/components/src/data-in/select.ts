import { tw, ifElse } from "@djgrant/react-tailwind";

export interface SelectProps {
  multiple?: boolean;
}

export const Select = tw.select<SelectProps>((props) =>
  ifElse(props.multiple, ["form-multiselect", "block"], ["form-select"])
);
