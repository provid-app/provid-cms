import { useEffect, useRef, useState } from "react";
import Flex from "./Flex";
import CustomButton from "./CustomButton";
import { IconAdjustmentsHorizontal, IconCheck } from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";
import type { FilterType } from "types/page.type";
import * as CheckBox from "@radix-ui/react-checkbox";

type Props = {
  filterData: FilterType[];
};

const PageFilter = ({ filterData }: Props) => {
  const [showFilter, setShowFilter] = useState(false);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        !wrapperRef.current?.contains(event.target as Node) &&
        !dropdownRef.current?.contains(event.target as Node)
      ) {
        setShowFilter(false);
      }
    };

    document.addEventListener("pointerdown", handleClickOutside);

    return () => {
      document.removeEventListener("pointerdown", handleClickOutside);
    };
  }, []);

  return (
    <Flex ref={wrapperRef} className="relative">
      <CustomButton
        label="Filter"
        icon={IconAdjustmentsHorizontal}
        size="md"
        mode="outline"
        onClick={() => setShowFilter((prev) => !prev)}
      />

      <AnimatePresence>
        {showFilter && (
          <motion.div
            ref={dropdownRef}
            className="flex flex-col min-w-65 absolute bg-white border border-border rounded-lg shadow-md left-0 top-[calc(100%+5px)] origin-top-left z-50 overflow-hidden"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
          >
            <Flex className="p-1">
              {filterData.map((item, index) => (
                <Flex key={index.toString()}>
                  <p className="px-2 py-1.5 text-metadata font-semibold text-title">
                    {item.title}
                  </p>

                  {item.data.map((item2, index2) => (
                    <Flex
                      key={index2.toString()}
                      className="flex-row! items-center justify-between px-2 py-1.5"
                    >
                      <Flex className="flex-row! items-center gap-2">
                        <CheckBox.Root
                          checked={item2.isSelected}
                          onCheckedChange={item2.onSelect}
                          className="size-4 rounded-sm border border-border cursor-pointer transition data-[state=checked]:bg-primary data-[state=checked]:border-brand-main"
                        >
                          <CheckBox.Indicator>
                            <IconCheck size={14} color="#ffffff" />
                          </CheckBox.Indicator>
                        </CheckBox.Root>

                        <p className="text-body2 text-title">{item2.label}</p>
                      </Flex>

                      <Flex className="size-5 rounded-sm items-center justify-center bg-second">
                        <p className="text-body2 text-text">{item2.count}</p>
                      </Flex>
                    </Flex>
                  ))}
                </Flex>
              ))}
            </Flex>
          </motion.div>
        )}
      </AnimatePresence>
    </Flex>
  );
};

export default PageFilter;
