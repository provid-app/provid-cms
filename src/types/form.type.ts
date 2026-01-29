export type DropdownType = {
  label: string;
  value: string;
};

export type InputType = {
  type: "text" | "password";
  name: string;
  label?: string;
  placeholder?: string;
  required: boolean;
};

export type FormType<T> = {
  inputs: InputType[];
  defaultValues: T;
};
