import { forwardRef, type MouseEvent, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  tooltipId?: string;
  type?: "submit" | "button";
  className?: string;
  onClick?: (e?: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void;
};

const ButtonFlex = forwardRef<HTMLButtonElement, Props>(
  ({ children, tooltipId, type = "button", className, onClick }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        data-tooltip-id={tooltipId}
        className={`flex flex-row items-center justify-center cursor-pointer ${className}`}
        onClick={onClick}
      >
        {children}
      </button>
    );
  },
);

ButtonFlex.displayName = "ButtonFlex";

export default ButtonFlex;
