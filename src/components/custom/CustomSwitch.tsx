import { useState } from "react";
import Flex from "./Flex";
import * as Switch from "@radix-ui/react-switch";

type Props = {
  label: string;
  value: boolean;
};

const CustomSwitch = ({ label, value }: Props) => {
  const [checked, setChecked] = useState(value);

  return (
    <Flex className="flex-row! items-center gap-2">
      <Switch.Root
        checked={checked}
        onCheckedChange={setChecked}
        className="relative inline-flex h-6 w-11 items-center rounded-full bg-border transition data-[state=checked]:bg-primary"
      >
        <Switch.Thumb className="size-5 transform rounded-full bg-white transition translate-x-0.5 data-[state=checked]:translate-x-5.5" />
      </Switch.Root>

      <p className="text-body2 text-text">{label}</p>
    </Flex>
  );
};

export default CustomSwitch;
