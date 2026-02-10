import { forwardRef, type CSSProperties, type ReactNode } from "react";

type Props = {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  tooltipId?: string;
};

const Flex = forwardRef<HTMLDivElement, Props>(
  ({ children, className, style, tooltipId }, ref) => {
    return (
      <div
        ref={ref}
        data-tooltip-id={tooltipId}
        className={`flex flex-col ${className}`}
        style={style}
      >
        {children}
      </div>
    );
  },
);

Flex.displayName = "Flex";

export default Flex;
