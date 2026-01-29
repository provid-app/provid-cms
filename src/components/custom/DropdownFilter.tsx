import { ButtonFlex } from "@components/layout";
import {
  IconCheck,
  IconChevronDown,
  type IconProps,
} from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";
import {
  useEffect,
  useRef,
  useState,
  type ForwardRefExoticComponent,
  type RefAttributes,
} from "react";
import type { ChartFilterStateType } from "types/state.type";

type Props = {
  filterData: ChartFilterStateType;
  icon?: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;
  position?: "prefix" | "suffix";
  mode?: "bold" | "regular";
};

const DropdownFilter = ({
  filterData,
  icon,
  position = "suffix",
  mode = "regular",
}: Props) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const Icon = icon;

  const wrapperRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

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
    <ButtonFlex
      ref={wrapperRef}
      className={`relative border border-border px-3 py-2 rounded-lg ${mode === "bold" ? "text-title" : "text-text"} gap-2 hover:bg-border transition-colors duration-300`}
      onClick={() => setShowDropdown((prev) => !prev)}
    >
      {Icon && position === "prefix" ? <Icon size={16} stroke={1} /> : null}

      <p className="text-body2">{filterData.data.label}</p>

      {Icon ? (
        position === "suffix" ? (
          <Icon size={16} stroke={1} />
        ) : null
      ) : (
        <IconChevronDown size={16} stroke={1} />
      )}

      <AnimatePresence>
        {showDropdown && (
          <motion.div
            ref={dropdownRef}
            className="flex flex-col min-w-39 absolute bg-white border border-border rounded-lg shadow-md right-0 top-[calc(100%+5px)] origin-top-right z-50 overflow-hidden"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.2, ease: "circOut" }}
          >
            {filterData.list.map((item, index) => (
              <ButtonFlex
                key={index.toString()}
                className="justify-between! p-2 hover:bg-border transition-colors duration-300 gap-6"
                onClick={(e) => {
                  e?.stopPropagation();
                  filterData.onChange(item);
                  setShowDropdown(false);
                  console.log(showDropdown);
                }}
              >
                <p className="text-body2 text-title truncate">{item.label}</p>

                <IconCheck
                  size={16}
                  color={
                    filterData.data.label === item.label ? "#071220" : "white"
                  }
                />
              </ButtonFlex>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </ButtonFlex>
  );
};

export default DropdownFilter;
