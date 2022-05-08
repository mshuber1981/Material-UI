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
import CustomSoftware from "../pages/CustomSoftware";
import MobileDev from "../pages/MobileDev";
import WebDev from "../pages/WebDev";
import TheRevolution from "../pages/TheRevolution";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import Estimate from "../pages/Estimate";

export default function App() {
  return (
    <HashRouter>
      {/* <ScrollToTop /> */}
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="Services" element={<Services />} />
          <Route exact path="Custom-Software" element={<CustomSoftware />} />
          <Route exact path="Mobile-Apps" element={<MobileDev />} />
          <Route exact path="Websites" element={<WebDev />} />
          <Route exact path="The-Revolution" element={<TheRevolution />} />
          <Route exact path="About-Us" element={<AboutUs />} />
          <Route exact path="Contact-Us" element={<ContactUs />} />
          <Route exact path="Estimate" element={<Estimate />} />
        </Routes>
      </ThemeProvider>
    </HashRouter>
  );
}
