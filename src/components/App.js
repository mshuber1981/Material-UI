// MUI - https://v4.mui.com/components/css-baseline/#css-baseline
import { CssBaseline, ThemeProvider } from "@material-ui/core";
// Components
import theme from "./ui/Theme";
import Header from "./ui/Header";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
    </ThemeProvider>
  );
}
