import React from "react";
import { Link, useLocation } from "react-router-dom";
// MUI
import {
  AppBar,
  Button,
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

  return React.cloneElement(children, {
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
    height: "8em",
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px",
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "25px",
    height: "45px",
  },
}));

export default function Header() {
  const [value, setValue] = React.useState(0);
  const { pathname } = useLocation();
  const classes = useStyles();

  function handleChange(e, value) {
    setValue(value);
  }

  // Check path and update active tab on a browser refresh
  React.useEffect(
    function () {
      if (pathname === "/" && value !== 0) {
        setValue(0);
      } else if (pathname === "/Services" && value !== 1) {
        setValue(1);
      } else if (pathname === "/The-Revolution" && value !== 2) {
        setValue(2);
      } else if (pathname === "/About-Us" && value !== 3) {
        setValue(3);
      } else if (pathname === "/Contact-Us" && value !== 4) {
        setValue(4);
      }
    },
    [value, pathname]
  );

  return (
    <>
      <ElevationScroll>
        <AppBar>
          <Toolbar disableGutters>
            <Button
              // https://v4.mui.com/guides/composition/#component-prop
              component={Link}
              to={"/"}
              disableRipple
              onClick={() => setValue(0)}
              className={classes.logoContainer}
            >
              <img src={logo} alt="company logo" className={classes.logo} />
            </Button>
            <Tabs
              value={value}
              indicatorColor={"primary"}
              onChange={handleChange}
              className={classes.tabContainer}
            >
              <Tab
                label="Home"
                component={Link}
                to={"/"}
                className={classes.tab}
              />
              <Tab
                label="Services"
                component={Link}
                to={"/Services"}
                className={classes.tab}
              />
              <Tab
                label="The Revolution"
                component={Link}
                to={"/The-Revolution"}
                className={classes.tab}
              />
              <Tab
                label="About Us"
                component={Link}
                to={"/About-Us"}
                className={classes.tab}
              />
              <Tab
                label="Contact Us"
                component={Link}
                to={"/Contact-Us"}
                className={classes.tab}
              />
            </Tabs>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              Free Estimate
            </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      {/* Fixed AppBar spacer */}
      <div className={classes.toolbarMargin} />
    </>
  );
}
