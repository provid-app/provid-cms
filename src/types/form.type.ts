export type DropdownType = {
  label: string;
  value: string;
};

export type InputType = {
  type: "text" | "password" | "dropdown";
  name: string;
  label?: string;
  placeholder?: string;
  required: boolean;
  dropdown?: DropdownType[];
};

export type FormType<T> = {
  inputs: InputType[];
  defaultValues: T;
};
