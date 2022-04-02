import { cloneElement } from "react";
// MUI
import {
  AppBar,
  makeStyles,
  Tab,
  Tabs,
  Toolbar,
  useScrollTrigger,
} from "@material-ui/core";
// Media
import logo from "../../assets/logo.svg";

// https://v4.mui.com/components/app-bar/#elevate-app-bar
function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

// https://v4.mui.com/styles/basics/#getting-started
const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
  },
  logo: {
    height: "7em",
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px",
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <>
      <ElevationScroll>
        <AppBar>
          <Toolbar disableGutters>
            <img src={logo} alt="company logo" className={classes.logo} />
            <Tabs className={classes.tabContainer}>
              <Tab label="Home" className={classes.tab} />
              <Tab label="Services" className={classes.tab} />
              <Tab label="The Revolution" className={classes.tab} />
              <Tab label="About Us" className={classes.tab} />
              <Tab label="Contact Us" className={classes.tab} />
            </Tabs>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      {/* Fixed AppBar spacer */}
      <div className={classes.toolbarMargin} />
      Hello world!
    </>
  );
}
