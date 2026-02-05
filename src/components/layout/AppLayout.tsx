import { LogoFull } from "@assets/index";
import { DropdownFilter, Flex } from "@components/custom";
import { sidebarData } from "@utils/constant/page.data";
import { Link, Outlet, useLocation } from "react-router";
import ButtonFlex from "./ButtonFlex";
import {
  IconCalendarWeek,
  IconChevronDown,
  IconDotsCircleHorizontal,
  IconLayoutSidebarLeftCollapse,
} from "@tabler/icons-react";
import * as Separator from "@radix-ui/react-separator";
import { generateBreadcrumb } from "@utils/helper/generator";
import { useChartFilter } from "@stores/page.store";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import AddCategoryModal from "./AddCategoryModal";
import AddMissionModal from "./AddMissionModal";

const AppLayout = () => {
  const [currentSub, setCurrentSub] = useState(0);

  const chartFilter = useChartFilter();

  const { pathname } = useLocation();

  const crumbs = generateBreadcrumb(pathname);

  return (
    <Flex className="relative flex-1 flex-row!">
      <Flex className="w-75 border-r border-r-border">
        <Flex className="px-6 h-18 justify-center border-b border-b-border">
          <LogoFull width={119.25} height={24} />
        </Flex>

        <Flex className="flex-1 p-4 gap-2">
          {sidebarData.map((item, index) => {
            const Icon = item.icon;

            return (
              <Flex key={index.toString()}>
                <Link
                  to={item.dest}
                  className={`flex items-center group justify-start! gap-3 px-3 py-2 rounded-lg ${
                    item.dest === "/"
                      ? pathname === "/"
                        ? "bg-brand-main text-primary font-semibold"
                        : "bg-white text-inactive"
                      : pathname.includes(item.dest as string)
                        ? "bg-brand-main text-primary font-semibold"
                        : "bg-white text-inactive"
                  } hover:text-primary hover:bg-brand-main hover:font-semibold transition-all duration-300`}
                  onClick={(e) => {
                    if (item.sub) {
                      e.preventDefault();
                      if (currentSub === index) {
                        setCurrentSub(0);
                      } else {
                        setCurrentSub(index);
                      }
                    }
                  }}
                >
                  <Icon
                    size={20}
                    stroke={1.5}
                    className={`${
                      item.dest === "/"
                        ? pathname === "/"
                          ? "stroke-2"
                          : "stroke-[1.5px]"
                        : pathname.includes(item.dest as string)
                          ? "stroke-2"
                          : "stroke-[1.5px]"
                    } group-hover:stroke-2 transition-all duration-300`}
                  />

                  <p className="text-body2 flex-1 text-left">{item.label}</p>

                  {item.sub && (
                    <motion.div
                      initial={{ rotate: "0deg" }}
                      animate={currentSub === index ? "active" : "inactive"}
                      variants={{
                        active: { rotate: "-180deg" },
                        inactive: { rotate: "0deg" },
                      }}
                      transition={{
                        duration: 0.2,
                        ease: "circInOut",
                      }}
                    >
                      <IconChevronDown size={18} />
                    </motion.div>
                  )}
                </Link>

                {item.sub && (
                  <motion.div
                    className="flex pl-5.5 gap-2 overflow-hidden"
                    initial={{ opacity: 0, height: 0, paddingTop: 0 }}
                    animate={currentSub === index ? "active" : "inactive"}
                    variants={{
                      active: {
                        opacity: 1,
                        height: "auto",
                        paddingTop: 4,
                      },
                      inactive: {
                        opacity: 0,
                        height: 0,
                        paddingTop: 0,
                      },
                    }}
                    transition={{ duration: 0.2, ease: "circInOut" }}
                  >
                    <Flex className="w-0.5 bg-border" />

                    <Flex className="flex-1 gap-1">
                      {item.sub.map((sub, index) => (
                        <Flex className="relative p-1">
                          <Link
                            key={index.toString()}
                            to={`${item.dest}${sub.dest}`}
                            className={`px-3 py-1.25 rounded-lg ${
                              pathname.includes(`${item.dest}${sub.dest}`)
                                ? "bg-brand-main text-primary font-semibold"
                                : "bg-white text-inactive"
                            } hover:text-primary hover:bg-brand-main hover:font-semibold transition-all duration-300`}
                          >
                            <p className="text-body2">{sub.label}</p>
                          </Link>

                          <AnimatePresence>
                            {pathname.includes(`${item.dest}${sub.dest}`) && (
                              <motion.div
                                className="absolute h-full top-0 w-0.5 bg-primary -left-2.5"
                                initial={{ height: 0 }}
                                animate={{ height: "100%" }}
                                exit={{ height: 0 }}
                                transition={{ duration: 0.2, ease: "circOut" }}
                              />
                            )}
                          </AnimatePresence>
                        </Flex>
                      ))}
                    </Flex>
                  </motion.div>
                )}
              </Flex>
            );
          })}
        </Flex>

        <Flex className="p-4 border-t border-t-border flex-row! items-center gap-4">
          <Flex className="size-10 rounded-full items-center justify-center bg-border">
            <p className="text-body2 font-semibold text-title">T</p>
          </Flex>

          <Flex className="flex-1">
            <p className="text-body2 font-semibold text-title">
              tionvriadi@gmail.com
            </p>

            <p className="text-body2 text-text">Admin</p>
          </Flex>

          <ButtonFlex className="size-6 rounded-md text-text hover:text-primary hover:bg-brand-main transition-colors duration-300">
            <IconDotsCircleHorizontal size={18.5} stroke={1.5} />
          </ButtonFlex>
        </Flex>
      </Flex>

      <Flex className="flex-1">
        <Flex className="flex-row! items-center justify-between px-4 h-18 border-b border-b-border ">
          <Flex className="flex-row! items-center gap-4">
            <ButtonFlex className="size-8 rounded-lg text-title hover:bg-brand-main hover:text-primary transition-colors duration-300">
              <IconLayoutSidebarLeftCollapse size={24} />
            </ButtonFlex>

            <Separator.Root
              orientation="vertical"
              className="h-6 w-px bg-border"
              decorative
            />

            <Flex className="flex-row! items-center">
              {crumbs.map((crumb, index) => (
                <h3 key={index.toString()} className="font-semibold">
                  {index === crumbs.length - 1 ? (
                    <span className="text-title">{crumb.label}</span>
                  ) : (
                    <>
                      <Link
                        to={crumb.dest}
                        className="text-text hover:text-title transition-colors duration-300"
                      >
                        {crumb.label}
                      </Link>

                      <span className="mx-2 text-inactive">•</span>
                    </>
                  )}
                </h3>
              ))}
            </Flex>
          </Flex>

          {pathname === "/" || pathname.includes("/analytic") ? (
            <DropdownFilter
              filterData={chartFilter}
              icon={IconCalendarWeek}
              mode="bold"
              position="prefix"
            />
          ) : null}
        </Flex>

        <Outlet />
      </Flex>

      <AddCategoryModal />
      <AddMissionModal />
    </Flex>
  );
};

export default AppLayout;
