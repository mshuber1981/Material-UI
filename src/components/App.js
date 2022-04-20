import { HashRouter, Route, Routes } from "react-router-dom";
// MUI - https://v4.mui.com/components/css-baseline/#css-baseline
import { CssBaseline, ThemeProvider } from "@material-ui/core";
// Components
// import ScrollToTop from "./ScrollToTop";
import theme from "./ui/Theme";
import Header from "./ui/Header";
// Pages
import Home from "../pages/Home";
import Services from "../pages/Services";
import TheRevolution from "../pages/TheRevolution";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";

export default function App() {
  return (
    <HashRouter>
      {/* <ScrollToTop /> */}
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Services" element={<Services />} />
          <Route exact path="/The-Revolution" element={<TheRevolution />} />
          <Route exact path="/About-Us" element={<AboutUs />} />
          <Route exact path="/Contact-Us" element={<ContactUs />} />
        </Routes>
      </ThemeProvider>
    </HashRouter>
  );
}
