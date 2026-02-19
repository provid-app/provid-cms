import type { ControllerRenderProps } from "react-hook-form";
import Flex from "./Flex";
import { ButtonFlex } from "@components/layout";
import { IconCheck, IconChevronDown } from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import useMissionController from "@controllers/mission.controller";
import { Coin } from "@assets/index";
import { convertNumberFormat } from "@utils/helper/converter";

type Props = {
  field: ControllerRenderProps<any, string>;
};

const CustomDropdownEstimation = ({ field }: Props) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const wrapperRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const { useGetMissionEstimationDropdownService } = useMissionController();

  const { finalData } = useGetMissionEstimationDropdownService();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        !wrapperRef.current?.contains(event.target as Node) &&
        !dropdownRef.current?.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("pointerdown", handleClickOutside);

    return () => {
      document.removeEventListener("pointerdown", handleClickOutside);
    };
  }, []);

  return (
    <Flex className="gap-1 relative">
      <p className="text-caption font-semibold text-title">Misi</p>

      <ButtonFlex
        ref={wrapperRef}
        className="px-3 py-2.5 justify-between! border border-border rounded-md bg-white"
        onClick={() => setShowDropdown((prev) => !prev)}
      >
        <Flex className="flex-row! items-center gap-2">
          {field.value ? (
            <>
              <p className="text-body2 text-title">{field.value.label}</p>

              <Flex className="flex-row! items-center gap-1 px-1 py-0.5 bg-second rounded-sm">
                <Coin width={16} height={16} />

                <p className="text-body2 text-text">
                  {convertNumberFormat(Number(field.value.value))}
                </p>
              </Flex>
            </>
          ) : (
            <p className="text-body2 text-title">Pilih Misi</p>
          )}
        </Flex>

        <IconChevronDown size={20} color="#071220" stroke={1.5} />
      </ButtonFlex>

      <AnimatePresence>
        {showDropdown && (
          <motion.div
            ref={dropdownRef}
            className="flex flex-col min-w-39 absolute bg-white border border-border rounded-lg shadow-md left-0 right-0 top-[calc(100%+5px)] origin-top z-50 overflow-hidden"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
          >
            {finalData.map((item, index) => (
              <ButtonFlex
                key={index.toString()}
                className="justify-between! p-2 hover:bg-border transition-colors duration-300 gap-6"
                onClick={() => {
                  field.onChange(item);
                  setShowDropdown(false);
                }}
              >
                <Flex className="flex-row! items-center gap-2">
                  <p className="text-body2 text-title truncate">{item.label}</p>

                  <Flex className="flex-row! items-center gap-1 px-1 py-0.5 bg-second rounded-sm">
                    <Coin width={16} height={16} />

                    <p className="text-body2 text-text">
                      {convertNumberFormat(Number(item.value))}
                    </p>
                  </Flex>
                </Flex>

                <IconCheck
                  size={16}
                  color={
                    field.value && field.value.label === item.label
                      ? "#071220"
                      : "white"
                  }
                />
              </ButtonFlex>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </Flex>
  );
};

export default CustomDropdownEstimation;
