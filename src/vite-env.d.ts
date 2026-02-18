/// <reference types="vite-plugin-svgr/client" />

import "@tanstack/react-query";
import type { ResType } from "types/res.type";

declare module "@tanstack/react-query" {
  interface Register {
    defaultError: ResType;
  }
}
