import React from "react";
import { Link, useLocation } from "react-router-dom";
// MUI
import {
  AppBar,
  Button,
  makeStyles,
  Menu,
  MenuItem,
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
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: "white",
    borderRadius: 0,
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
  },
}));

export default function Header() {
  const [value, setValue] = React.useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const { pathname } = useLocation();
  const classes = useStyles();

  function handleChange(e, value) {
    setValue(value);
  }

  function handleClick(e) {
    setAnchorEl(e.currentTarget);
    setOpen(true);
  }

  function handleClose(e) {
    setAnchorEl(null);
    setOpen(false);
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
                aria-owns={anchorEl ? "simple-menu" : undefined}
                aria-haspopup={anchorEl ? "true" : undefined}
                onMouseOver={(e) => handleClick(e)}
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
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={open}
              elevation={0}
              classes={{ paper: classes.menu }}
              onClose={handleClose}
              MenuListProps={{ onMouseLeave: handleClose }}
            >
              <MenuItem
                component={Link}
                to="Services"
                classes={{ root: classes.menuItem }}
                onClick={() => {
                  handleClose();
                  setValue(1);
                }}
              >
                Services
              </MenuItem>
              <MenuItem
                component={Link}
                to="Custom-Software"
                classes={{ root: classes.menuItem }}
                onClick={() => {
                  handleClose();
                  setValue(1);
                }}
              >
                Custom Software Developement
              </MenuItem>
              <MenuItem
                component={Link}
                to="Mobile-Apps"
                classes={{ root: classes.menuItem }}
                onClick={() => {
                  handleClose();
                  setValue(1);
                }}
              >
                Mobile App Developement
              </MenuItem>
              <MenuItem
                component={Link}
                to="Websites"
                classes={{ root: classes.menuItem }}
                onClick={() => {
                  handleClose();
                  setValue(1);
                }}
              >
                Website Developement
              </MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      {/* Fixed AppBar spacer */}
      <div className={classes.toolbarMargin} />
    </>
  );
}
