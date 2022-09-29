import type { FC, ReactNode } from "react";

export type Children = { children?: ReactNode };

export type FuncComponent<T = {}> = FC<T & Children>;
