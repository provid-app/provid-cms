import { ButtonFlex } from "@components/layout";
import Flex from "./Flex";
import { IconDotsCircleHorizontal } from "@tabler/icons-react";
import type { RowActionType } from "types/page.type";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

type Props = {
  actionData: RowActionType[];
};

const CustomActionButton = ({ actionData }: Props) => {
  const [showMenu, setShowMenu] = useState(false);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        !wrapperRef.current?.contains(event.target as Node) &&
        !menuRef.current?.contains(event.target as Node)
      ) {
        setShowMenu(false);
      }
    };

    document.addEventListener("pointerdown", handleClickOutside);

    return () => {
      document.removeEventListener("pointerdown", handleClickOutside);
    };
  }, []);

  return (
    <Flex ref={wrapperRef} className="relative">
      <ButtonFlex
        className="size-6 items-center justify-center text-disabled hover:bg-border transition-colors duration-300 rounded-sm"
        onClick={() => setShowMenu((prev) => !prev)}
      >
        <IconDotsCircleHorizontal size={18.5} />
      </ButtonFlex>

      <AnimatePresence>
        {showMenu && (
          <motion.div
            ref={menuRef}
            className="flex flex-col absolute top-[calc(100%+5px)] p-1 right-0 rounded-md bg-white border border-border z-10 origin-top-right min-w-49.5"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
          >
            {actionData.map((item, index) => (
              <>
                {item.type === "delete" && (
                  <Flex className="py-1">
                    <div className="h-px bg-border" />
                  </Flex>
                )}

                <ButtonFlex
                  key={index.toString()}
                  className={`px-2 py-1.5 justify-start! text-title ${item.type === "delete" ? "hover:bg-danger-main hover:text-danger-primary" : "hover:bg-border"} transition-colors duration-300 rounded-md`}
                  onClick={() => {
                    setShowMenu(false);
                    item.onClick();
                  }}
                >
                  <p className="text-body2">{item.label}</p>
                </ButtonFlex>
              </>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </Flex>
  );
};

export default CustomActionButton;
