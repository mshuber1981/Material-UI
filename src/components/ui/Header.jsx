import React from "react";
import { Link, useLocation } from "react-router-dom";
import process from "process";
// Media
import logo from "../../assets/logo.svg";
// Icons
import MenuIcon from "@material-ui/icons/Menu";
// Components
import {
  AppBar,
  Button,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Menu,
  MenuItem,
  SwipeableDrawer,
  Tab,
  Tabs,
  Toolbar,
  useMediaQuery,
  useTheme,
  useScrollTrigger,
  IconButton,
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
  drawerIconContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  drawerIcon: {
    height: "50px",
    width: "50px",
  },
  drawer: {
    backgroundColor: theme.palette.common.blue,
  },
  drawerItem: {
    ...theme.typography.tab,
    color: "white",
    opacity: 0.7,
  },
  drawerItemEstimate: {
    backgroundColor: theme.palette.common.orange,
  },
  drawerItemSelected: {
    opacity: 1,
  },
}));

export default function Header() {
  const [value, setValue] = React.useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openMenu, setOpenMenu] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const { pathname } = useLocation();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const classes = useStyles();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  function handleChange(e, newValue) {
    setValue(newValue);
  }

  function handleClick(e) {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  }

  function handleMenuItemClick(e, i) {
    setAnchorEl(null);
    setOpenMenu(false);
    setSelectedIndex(i);
  }

  function handleClose(e) {
    setAnchorEl(null);
    setOpenMenu(false);
  }

  const menuOptions = React.useMemo(
    () => [
      {
        id: "1M",
        name: "Services",
        link: "/Services",
        activeIndex: 1,
        selectedIndex: 0,
      },
      {
        id: "2M",
        name: "Custom Software Developement",
        link: "/Custom-Software",
        activeIndex: 1,
        selectedIndex: 1,
      },
      {
        id: "3M",
        name: "Mobile App Developement",
        link: "/Mobile-Apps",
        activeIndex: 1,
        selectedIndex: 2,
      },
      {
        id: "4M",
        name: "Website Developement",
        link: "/Websites",
        activeIndex: 1,
        selectedIndex: 3,
      },
    ],
    []
  );

  const routes = React.useMemo(
    () => [
      { id: "1R", name: "Home", link: "/", activeIndex: 0 },
      {
        id: "2R",
        name: "Services",
        link: "/Services",
        activeIndex: 1,
        ariaOwns: anchorEl ? "simple-menu" : undefined,
        ariaPopup: anchorEl ? "true" : undefined,
        mouseOver: (e) => handleClick(e),
      },
      {
        id: "3R",
        name: "The Revolution",
        link: "/The-Revolution",
        activeIndex: 2,
      },
      { id: "4R", name: "About Us", link: "/About-Us", activeIndex: 3 },
      { id: "5R", name: "Contact Us", link: "/Contact-Us", activeIndex: 4 },
    ],
    [anchorEl]
  );

  // Check path and update active tab on a browser refresh
  React.useEffect(
    function () {
      if (pathname === "/Estimate") {
        setValue(5);
      }
      [...menuOptions, ...routes].forEach(function (route) {
        if (pathname === route.link) {
          setValue(route.activeIndex);
          if (route.selectedIndex && route.selectedIndex !== selectedIndex) {
            setSelectedIndex(route.selectedIndex);
          }
        }
      });
    },
    [value, pathname, selectedIndex, menuOptions, routes]
  );

  const tabs = (
    <>
      <Tabs
        value={value === 5 ? false : value}
        indicatorColor={"primary"}
        onChange={handleChange}
        className={classes.tabContainer}
      >
        {routes.map((route) => (
          <Tab
            key={route.id}
            className={classes.tab}
            component={Link}
            to={route.link}
            label={route.name}
            aria-owns={route.ariaOwns}
            aria-haspopup={route.ariaPopup}
            onMouseOver={route.mouseOver}
          />
        ))}
      </Tabs>
      <Button
        component={Link}
        to="/Estimate"
        variant="contained"
        color="secondary"
        className={classes.button}
      >
        Free Estimate
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={openMenu}
        elevation={0}
        classes={{ paper: classes.menu }}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
        keepMounted
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

  const drawer = (
    <>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        classes={{ paper: classes.drawer }}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
      >
        <List disablePadding>
          {routes.map((route) => (
            <ListItem
              key={route.id}
              divider
              button
              component={Link}
              to={route.link}
              selected={value === route.activeIndex}
              onClick={() => {
                setOpenDrawer(false);
                setValue(route.activeIndex);
              }}
            >
              <ListItemText
                disableTypography
                className={
                  value === route.activeIndex
                    ? `${classes.drawerItem} ${classes.drawerItemSelected}`
                    : classes.drawerItem
                }
              >
                {route.name}
              </ListItemText>
            </ListItem>
          ))}
          <ListItem
            component={Link}
            to="/Estimate"
            divider
            button
            selected={value === 5}
            className={classes.drawerItemEstimate}
            onClick={() => {
              setOpenDrawer(false);
              setValue(5);
            }}
          >
            <ListItemText
              className={
                value === 5
                  ? `${classes.drawerItem} ${classes.drawerItemSelected}`
                  : classes.drawerItem
              }
              disableTypography
            >
              Free Estimate
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        disableRipple
        className={classes.drawerIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
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
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      {/* Fixed AppBar spacer */}
      <div className={classes.toolbarMargin} />
    </>
  );
}
