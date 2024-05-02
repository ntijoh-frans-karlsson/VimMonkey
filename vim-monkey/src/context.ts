import { Context, createContext, useContext } from "react";
import { mode } from "./types";

export const TextBodyContext = createContext([" "]);
export const CursorPosContext = createContext(0);
export const ModeContext = createContext("INSERT");
