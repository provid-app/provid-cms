import type { IconProps } from "@tabler/icons-react";
import type { ForwardRefExoticComponent } from "react";

type Props = {
  type?: "button" | "submit";
  mode?: "primary" | "secondary" | "outline" | "ghost";
  size?: "lg" | "md";
  label?: string;
  icon?: ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
};

const CustomButton = ({
  type = "button",
  mode = "primary",
  size = "lg",
  label,
  icon,
}: Props) => {
  const Icon = icon;

  return (
    <button
      type={type}
      className={`flex items-center justify-center rounded-xl active:ring-4 ${size === "md" ? "py-2" : "py-3"} ${mode === "primary" ? "bg-primary text-white active:ring-brand-main" : mode === "secondary" ? "bg-brand-main text-primary active:ring-brand-second" : `bg-transparent text-title ${mode === "outline" && "border border-border hover:border-brand-main"} hover:bg-brand-main hover:text-primary transition-colors duration-300 active:ring-second`} gap-2 px-3.5`}
    >
      {Icon && <Icon size={size === "md" ? 16 : 20} />}

      {label && <p className="text-body2 font-semibold">{label}</p>}
    </button>
  );
};

export default CustomButton;
