"use client";

import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";
import type { ReactNode } from "react";

const theme = createTheme({
  palette: {
    primary: {
      main: "#111827",
    },
    secondary: {
      main: "#6b7280",
    },
    background: {
      default: "#f9fafb",
    },
  },
  typography: {
    fontFamily: "inherit",
    h1: {
      fontSize: "1.875rem",
      fontWeight: 700,
    },
    body2: {
      fontSize: "0.875rem",
    },
  },
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
}
