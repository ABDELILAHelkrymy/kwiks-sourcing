import { createTheme } from "@mui/material/styles";
import { colors } from "./theme/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: colors.brand["500"],
      light: colors.brand["200"],
      dark: colors.brand["800"],
      contrastText: colors.brand["50"],
    },
    secondary: {
      main: colors.gray["500"],
      light: colors.gray["200"],
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
  },
});

export default theme;
