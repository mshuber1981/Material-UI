// MUI - https://v4.mui.com/customization/theming/#createtheme-options-args-theme
import { createTheme } from "@material-ui/core";

// Main Colors
const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";

// https://v4.mui.com/customization/default-theme/#default-theme
export default createTheme({
  palette: {
    common: {
      blue: `${arcBlue}`,
      orange: `${arcOrange}`,
    },
    primary: {
      main: `${arcBlue}`,
    },
    secondary: {
      main: `${arcOrange}`,
    },
  },
  typography: {
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: 700,
      fontSize: "1rem",
    },
    estimate: {
      fontFamily: "Pacifico",
      fontSize: "1rem",
      textTransform: "none",
    },
  },
});
