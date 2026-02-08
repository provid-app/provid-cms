import { forwardRef, type MouseEvent, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  tooltipId?: string;
  type?: "submit" | "button";
  className?: string;
  disabled?: boolean;
  onClick?: (e?: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void;
};

const ButtonFlex = forwardRef<HTMLButtonElement, Props>(
  (
    { children, tooltipId, type = "button", className, disabled, onClick },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        data-tooltip-id={tooltipId}
        className={`flex flex-row items-center justify-center ${disabled ? "cursor-not-allowed" : "cursor-pointer"} ${className}`}
        disabled={disabled}
        onClick={onClick}
      >
        {children}
      </button>
    );
  },
);

ButtonFlex.displayName = "ButtonFlex";

export default ButtonFlex;
