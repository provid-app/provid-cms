import { LogoFull } from "@assets/index";
import { Flex } from "@components/custom";
import { sidebarData } from "@utils/constant/page.data";
import { Link, Outlet, useLocation, useNavigate } from "react-router";
import ButtonFlex from "./ButtonFlex";
import {
  IconDotsCircleHorizontal,
  IconLayoutSidebarLeftCollapse,
} from "@tabler/icons-react";
import * as Separator from "@radix-ui/react-separator";
import { generateBreadcrumb } from "@utils/helper/generator";

const AppLayout = () => {
  const { pathname } = useLocation();
  const nav = useNavigate();

  const crumbs = generateBreadcrumb(pathname);

  return (
    <Flex className="flex-1 flex-row!">
      <Flex className="w-75 border-r border-r-border">
        <Flex className="px-6 h-18 justify-center border-b border-b-border">
          <LogoFull width={119.25} height={24} />
        </Flex>

        <Flex className="flex-1 p-4 gap-2">
          {sidebarData.map((item, index) => {
            const Icon = item.icon;

            return (
              <Flex key={index.toString()}>
                <ButtonFlex
                  className={`group justify-start! gap-3 px-3 py-2 rounded-lg ${
                    item.dest === "/"
                      ? pathname === "/"
                        ? "bg-brand-main text-primary font-semibold"
                        : "bg-white text-inactive"
                      : pathname.includes(item.dest as string)
                        ? "bg-brand-main text-primary font-semibold"
                        : "bg-white text-inactive"
                  } hover:text-primary hover:bg-brand-main hover:font-semibold transition-all duration-300`}
                  onClick={() => nav(item.dest)}
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

                  <p className="text-body2">{item.label}</p>
                </ButtonFlex>
              </Flex>
            );
          })}
        </Flex>

        <Flex className="p-4 border-t border-t-border flex-row! items-center gap-4">
          <Flex className="size-10 rounded-full items-center justify-center bg-border">
            <p className="text-body2 font-semibold text-title">A</p>
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
        <Flex className="flex-row! items-center px-4 h-18 border-b border-b-border gap-4">
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

        <Outlet />
      </Flex>
    </Flex>
  );
};

export default AppLayout;
