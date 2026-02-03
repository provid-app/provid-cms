import { Flex } from "@components/custom";
import type { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  layout?: "center" | "right";
};

const ModalContainer = ({ children, layout = "center" }: Props) => {
  return (
    <Flex
      className={`absolute w-dvw h-dvh ${layout === "right" ? "items-end" : "items-center justify-center"} bg-dark-40`}
    >
      {children}
    </Flex>
  );
};

export default ModalContainer;
