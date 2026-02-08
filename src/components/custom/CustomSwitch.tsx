import { useState } from "react";
import Flex from "./Flex";
import * as Switch from "@radix-ui/react-switch";

type Props = {
  label: string;
  value: boolean;
  onChange?: (value: boolean) => void;
};

const CustomSwitch = ({ label, value, onChange }: Props) => {
  const [checked, setChecked] = useState(value);

  const onHandleChange = (checked: boolean) => {
    setChecked(checked);

    if (onChange) onChange(checked);
  };

  return (
    <Flex className="flex-row! items-center gap-2">
      <Switch.Root
        checked={checked}
        onCheckedChange={onHandleChange}
        className="relative inline-flex h-6 w-11 items-center rounded-full bg-border transition data-[state=checked]:bg-primary"
      >
        <Switch.Thumb className="size-5 transform rounded-full bg-white transition translate-x-0.5 data-[state=checked]:translate-x-5.5" />
      </Switch.Root>

      <p className="text-body2 text-text">{label}</p>
    </Flex>
  );
};

export default CustomSwitch;
