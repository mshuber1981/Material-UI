import React from "react";
import { Link } from "react-router-dom";
// Icons
import { Facebook, Twitter, Instagram } from "@material-ui/icons";
// Media
import footerAdornment from "../../assets/Footer Adornment.svg";
// Components
import { Grid, Hidden, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: "100%",
    position: "relative",
    zIndex: theme.zIndex.modal + 1,
  },
  mainContainer: {
    position: "absolute",
  },
  link: {
    color: "white",
    fontFamily: "Arial",
    fontSize: "0.75rem",
    fontWeight: "bold",
    textDecoration: "none",
  },
  gridItem: {
    margin: "3rem",
  },
  adornment: {
    width: "25em",
    verticalAlign: "bottom",
    [theme.breakpoints.down("md")]: {
      width: "15em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "15em",
    },
  },
  icon: {
    fontSize: "4em",
    color: "white",
    [theme.breakpoints.down("xs")]: {
      fontSize: "2.5em",
    },
  },
  socialContainer: {
    position: "absolute",
    marginTop: "-6em",
    right: "1.5em",
    [theme.breakpoints.down("xs")]: {
      right: "0.6em",
    },
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid
          container
          justifyContent="center"
          className={classes.mainContainer}
        >
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid item component={Link} to="/" className={classes.link}>
                Home
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                to="/Services"
                className={classes.link}
              >
                Services
              </Grid>
              <Grid
                item
                component={Link}
                to="/Custom-Software"
                className={classes.link}
              >
                Custom Software Development
              </Grid>
              <Grid
                item
                component={Link}
                to="/Mobile-Apps"
                className={classes.link}
              >
                Mobile App Development
              </Grid>
              <Grid
                item
                component={Link}
                to="/Websites"
                className={classes.link}
              >
                Website Development
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                to="/The-Revolution"
                className={classes.link}
              >
                The Revolution
              </Grid>
              <Grid
                item
                component={Link}
                to="/The-Revolution"
                className={classes.link}
              >
                Vision
              </Grid>
              <Grid
                item
                component={Link}
                to="/The-Revolution"
                className={classes.link}
              >
                Technology
              </Grid>
              <Grid
                item
                component={Link}
                to="/The-Revolution"
                className={classes.link}
              >
                Process
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                to="/About-Us"
                className={classes.link}
              >
                About Us
              </Grid>
              <Grid
                item
                component={Link}
                to="/About-Us"
                className={classes.link}
              >
                History
              </Grid>
              <Grid
                item
                component={Link}
                to="/About-Us"
                className={classes.link}
              >
                Team
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                to="/Contact-Us"
                className={classes.link}
              >
                Contact Us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>

      <img
        src={footerAdornment}
        alt="black decorative slash"
        className={classes.adornment}
      />
      <Grid
        container
        justifyContent="flex-end"
        spacing={2}
        className={classes.socialContainer}
      >
        <Grid item component={"a"} href="https://www.facebook.com">
          <Facebook className={classes.icon} />
        </Grid>
        <Grid item component={"a"} href="https://www.twiiter.com">
          <Twitter className={classes.icon} />
        </Grid>
        <Grid item component={"a"} href="https://www.instagram.com">
          <Instagram className={classes.icon} />
        </Grid>
      </Grid>
    </footer>
  );
}
