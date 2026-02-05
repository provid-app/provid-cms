import type { AddMissionInput } from "@utils/validator/mission.validator";

export type DropdownType = {
  label: string;
  value: string;
};

export type RadioBoxType = DropdownType & {
  subTitle: string;
};

export type InputType = {
  type:
    | "text"
    | "password"
    | "dropdown"
    | "horizontal"
    | "number"
    | "textarea"
    | "radiobox";
  name: string;
  label?: string;
  placeholder?: string;
  required: boolean;
  dropdown?: DropdownType[];
  inputs?: InputType[];
  radiobox?: RadioBoxType[];
};

export type FormType<T> = {
  inputs: InputType[];
  defaultValues: T;
};

export type MissionFormType = {
  inputs: InputType[][];
  defaultValues: AddMissionInput;
};
