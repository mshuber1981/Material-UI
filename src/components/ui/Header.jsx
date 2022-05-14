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
      } else if (pathname === "/Estimate" && value !== 5) {
        setValue(5);
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
          <ListItem
            component={Link}
            to="/"
            divider
            button
            selected={value === 0}
            onClick={() => {
              setOpenDrawer(false);
              setValue(0);
            }}
          >
            <ListItemText
              className={
                value === 0
                  ? `${classes.drawerItem} ${classes.drawerItemSelected}`
                  : classes.drawerItem
              }
              disableTypography
            >
              Home
            </ListItemText>
          </ListItem>
          <ListItem
            component={Link}
            to="/Services"
            divider
            button
            selected={value === 1}
            onClick={() => {
              setOpenDrawer(false);
              setValue(1);
            }}
          >
            <ListItemText
              className={
                value === 1
                  ? `${classes.drawerItem} ${classes.drawerItemSelected}`
                  : classes.drawerItem
              }
              disableTypography
            >
              Services
            </ListItemText>
          </ListItem>
          <ListItem
            component={Link}
            to="/The-Revolution"
            divider
            button
            selected={value === 2}
            onClick={() => {
              setOpenDrawer(false);
              setValue(2);
            }}
          >
            <ListItemText
              className={
                value === 2
                  ? `${classes.drawerItem} ${classes.drawerItemSelected}`
                  : classes.drawerItem
              }
              disableTypography
            >
              The Revolution
            </ListItemText>
          </ListItem>
          <ListItem
            component={Link}
            to="/About-Us"
            divider
            button
            selected={value === 3}
            onClick={() => {
              setOpenDrawer(false);
              setValue(3);
            }}
          >
            <ListItemText
              className={
                value === 3
                  ? `${classes.drawerItem} ${classes.drawerItemSelected}`
                  : classes.drawerItem
              }
              disableTypography
            >
              About Us
            </ListItemText>
          </ListItem>
          <ListItem
            component={Link}
            to="/Contact-Us"
            divider
            button
            selected={value === 4}
            onClick={() => {
              setOpenDrawer(false);
              setValue(4);
            }}
          >
            <ListItemText
              className={
                value === 4
                  ? `${classes.drawerItem} ${classes.drawerItemSelected}`
                  : classes.drawerItem
              }
              disableTypography
            >
              Contact Us
            </ListItemText>
          </ListItem>
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
