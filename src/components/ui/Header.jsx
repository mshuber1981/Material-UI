import React from "react";
import { Link, useLocation } from "react-router-dom";
// Media
import logo from "../../assets/logo.svg";
// Components
import {
  AppBar,
  Button,
  makeStyles,
  Menu,
  MenuItem,
  Tab,
  Tabs,
  Toolbar,
  useMediaQuery,
  useTheme,
  useScrollTrigger,
} from "@material-ui/core";

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
    [theme.breakpoints.down("md")]: {
      marginBottom: "2.25em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1.25em",
    },
  },
  logo: {
    height: "8em",
    [theme.breakpoints.down("md")]: {
      height: "7em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "5.5em",
    },
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
  selected: {
    opacity: 1,
  },
}));

export default function Header() {
  const [value, setValue] = React.useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const { pathname } = useLocation();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const classes = useStyles();

  function handleChange(e, value) {
    setValue(value);
  }

  function handleClick(e) {
    setAnchorEl(e.currentTarget);
    setOpen(true);
  }

  function handleMenuItemClick(e, i) {
    setAnchorEl(null);
    setOpen(false);
    setSelectedIndex(i);
  }

  function handleClose(e) {
    setAnchorEl(null);
    setOpen(false);
  }

  const menuOptions = [
    { id: 1, name: "Services", link: "/Services" },
    { id: 2, name: "Custom Software Developement", link: "/Custom-Software" },
    { id: 3, name: "Mobile App Developement", link: "/Mobile-Apps" },
    { id: 4, name: "Website Developement", link: "/Websites" },
  ];

  // Check path and update active tab on a browser refresh
  React.useEffect(
    function () {
      if (pathname === "/" && value !== 0) {
        setValue(0);
      } else if (pathname === "/Services" && value !== 1) {
        setValue(1);
        setSelectedIndex(0);
      } else if (pathname === "/Custom-Software" && value !== 1) {
        setValue(1);
        setSelectedIndex(1);
      } else if (pathname === "/Mobile-Apps" && value !== 1) {
        setValue(1);
        setSelectedIndex(2);
      } else if (pathname === "/Websites" && value !== 1) {
        setValue(1);
        setSelectedIndex(3);
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

  const tabs = (
    <>
      <Tabs
        value={value}
        indicatorColor={"primary"}
        onChange={handleChange}
        className={classes.tabContainer}
      >
        <Tab label="Home" component={Link} to={"/"} className={classes.tab} />
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
      <Button variant="contained" color="secondary" className={classes.button}>
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
        {menuOptions.map(function (option, i) {
          return (
            <MenuItem
              key={option.id}
              component={Link}
              to={option.link}
              selected={i === selectedIndex && value === 1}
              classes={{
                root: classes.menuItem,
                selected: classes.selected,
              }}
              onClick={function (e) {
                handleMenuItemClick(e, i);
                setValue(1);
                handleClose();
              }}
            >
              {option.name}
            </MenuItem>
          );
        })}
      </Menu>
    </>
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
            {matches ? null : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      {/* Fixed AppBar spacer */}
      <div className={classes.toolbarMargin} />
    </>
  );
}
