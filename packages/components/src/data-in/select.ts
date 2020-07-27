import { tw, ifElse } from "@djgrant/react-tailwind";

export interface SelectProps {
  multiple: boolean;
}

export const Select = tw.select((props: SelectProps) =>
  ifElse(props.multiple, ["form-multiselect", "block"], "form-select")
);
