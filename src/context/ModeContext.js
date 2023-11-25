import { createContext } from "react";
export const ModeContext = createContext("light");

export const THEMEMode = {
  light: {
    backgroundColor: "white",
    textColor: "Gray",
  },
  dark: {
    backgroundColor: "gray",
    textColor: "white",
  },
};
