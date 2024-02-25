import { createTheme } from "@mui/material/styles";
import { DM_Sans } from "next/font/google";
import theme from "../theme";
import { colors } from "./colors";

// Augment the palette to include an ochre color
declare module '@mui/material/styles' {
  interface Palette {
    white: Palette['primary'];
    black: Palette['primary'];
  }

  interface PaletteOptions {
    white?: PaletteOptions['primary'];
    black?: PaletteOptions['primary'];
  }
}

export const dm = DM_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

const baselightTheme = createTheme({
  direction: "ltr",
  palette: {
    white: {
      main: colors.white["white"],
    },
    black: {
      main: colors.black["black"],
    },
    primary: {
      main: colors.brand["500"],
      light: colors.brand["200"],
      dark: colors.brand["800"],
      contrastText: colors.brand["50"],
    },
    secondary: {
      main: colors.gray["500"],
      light: colors.gray["100"],
      dark: colors.gray["700"],
      contrastText: colors.gray["50"],
    },
    success: {
      main: colors.success["500"],
      light: colors.success["200"],
      dark: colors.success["800"],
      contrastText: colors.success["50"],
    },
    info: {
      main: colors.orange["500"],
      light: colors.orange["200"],
      dark: colors.orange["800"],
      contrastText: colors.orange["50"],
    },
    error: {
      main: colors.error["500"],
      light: colors.error["200"],
      dark: colors.error["800"],
      contrastText: colors.error["50"],
    },
    warning: {
      main: colors.warning["500"],
      light: colors.warning["200"],
      dark: colors.warning["800"],
      contrastText: colors.warning["50"],
    },
    grey: {
      100: "#F2F6FA",
      200: "#EAEFF4",
      300: "#DFE5EF",
      400: "#767e89",
      500: "#5A6A85",
      600: "#2A3547",
    },
    text: {
      primary: theme.palette.secondary.main,
      secondary: theme.palette.secondary.main,
    },
    action: {
      disabledBackground: "rgba(73,82,88,0.12)",
      hoverOpacity: 0.02,
      hover: "#f6f9fc",
    },
    divider: "#e5eaef",
    background: {
      default: "#fafbfb",
      paper: "#fafbfb",
    },
  },

  typography: {
    fontFamily: dm.style.fontFamily,
    h1: {
      fontWeight: 500,
      fontSize: "1.875rem",
      lineHeight: "1.5",
    },
    h2: {
      fontWeight: 500,
      fontSize: "1.5rem",
      lineHeight: "1.5",
    },
    h3: {
      fontWeight: 500,
      fontSize: "1.3125rem",
      lineHeight: "1.5",
    },
    h4: {
      fontWeight: 500,
      fontSize: "1.125rem",
      lineHeight: "1.5",
    },
    h5: {
      fontWeight: 500,
      fontSize: "1rem",
      lineHeight: "1.5",
    },
    h6: {
      fontWeight: 500,
      fontSize: "0.875rem",
      lineHeight: "1.5",
    },
    button: {
      textTransform: "none",
      fontWeight: "400",
    },
    subtitle1: {
      fontSize: "1rem",
      fontWeight: "400",
    },
    subtitle2: {
      fontSize: "0.875rem",
      fontWeight: "400",
    },
  },
  components: {

  
    MuiCssBaseline: {
      styleOverrides: {
        ".MuiPaper-elevation9, .MuiPopover-root .MuiPaper-elevation": {
          boxShadow:
            "0px 7px 30px 0px rgba(90, 114, 123, 0.11) !important",
        },
        a: {
          textDecoration: "none",
        },
      },
    },
    MuiButtonGroup: {
      styleOverrides: {
        root: {
          boxShadow: "none",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: "none",
        },
      },
    },
    MuiFab: {
      styleOverrides: {
        root: {
          boxShadow: "none",
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          padding: "16px 24px",
        },
        title: {
          fontSize: "1.125rem",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          padding: "0",
          boxShadow: "0px 7px 30px 0px rgba(90, 114, 123, 0.11)",
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: "30px",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: `1px solid #e5eaef`,
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          "&:last-child td": {
            borderBottom: 0,
          },
        },
      },
    },

  },
  
});

export { baselightTheme };
