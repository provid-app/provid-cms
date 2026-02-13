import type { IconProps } from "@tabler/icons-react";
import type { ForwardRefExoticComponent } from "react";

type Props = {
  type?: "button" | "submit";
  mode?: "primary" | "secondary" | "outline" | "ghost" | "danger-outline";
  size?: "lg" | "md";
  label?: string;
  icon?: ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
  disabled?: boolean;
  onClick?: () => void;
};

const CustomButton = ({
  type = "button",
  mode = "primary",
  size = "lg",
  label,
  icon,
  disabled,
  onClick,
}: Props) => {
  const Icon = icon;

  return (
    <button
      type={type}
      className={`flex items-center justify-center active:ring-4 ${size === "md" ? "py-2 rounded-lg" : "py-3 rounded-xl"} ${mode === "primary" ? "bg-primary text-white active:ring-brand-main" : mode === "secondary" ? "bg-brand-main text-primary active:ring-brand-second" : `bg-transparent text-title ${mode === "outline" || mode === "danger-outline" ? `border border-border ${disabled ? "" : mode === "danger-outline" ? "hover:border-danger-primary hover:bg-danger-primary hover:text-white" : "hover:border-brand-main hover:bg-brand-main hover:text-primary"}` : ""} transition-all duration-300 active:ring-second`} gap-2 px-3.5 ${disabled ? "opacity-40 cursor-not-allowed" : "cursor-pointer"}`}
      disabled={disabled}
      onClick={onClick}
    >
      {Icon && <Icon size={size === "md" ? 16 : 20} />}

      {label && <p className="text-body2 font-semibold">{label}</p>}
    </button>
  );
};

export default CustomButton;
