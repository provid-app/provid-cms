import type { MouseEvent, ReactNode } from "react";

type Props = {
  children: ReactNode;
  tooltipId?: string;
  type?: "submit" | "button";
  className?: string;
  onClick?: (e?: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void;
};

const ButtonFlex = ({
  children,
  tooltipId,
  type = "button",
  className,
  onClick,
}: Props) => {
  return (
    <button
      type={type}
      data-tooltip-id={tooltipId}
      className={`flex flex-row items-center justify-center cursor-pointer ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonFlex;
