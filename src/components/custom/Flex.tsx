import { forwardRef, type ReactNode } from "react";

type Props = {
  children?: ReactNode;
  className?: string;
};

const Flex = forwardRef<HTMLDivElement, Props>(
  ({ children, className }, ref) => {
    return (
      <div ref={ref} className={`flex flex-col ${className}`}>
        {children}
      </div>
    );
  },
);

Flex.displayName = "Flex";

export default Flex;
