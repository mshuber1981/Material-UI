import React from "react";
// Media
import footerAdornment from "../../assets/Footer Adornment.svg";
// Components
import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: "100%",
    position: "relative",
    zIndex: theme.zIndex.modal + 2,
  },
  mainContainer: {
    position: "absolute",
  },
  link: {
    color: "white",
    fontFamily: "Arial",
    fontSize: "0.75rem",
    fontWeight: "bold",
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
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Grid container justifyContent="center" className={classes.mainContainer}>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid item className={classes.link}>
              Home
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid item className={classes.link}>
              Services
            </Grid>
            <Grid item className={classes.link}>
              Custom Software Development
            </Grid>
            <Grid item className={classes.link}>
              Mobile App Development
            </Grid>
            <Grid item className={classes.link}>
              Website Development
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid item className={classes.link}>
              The Revolution
            </Grid>
            <Grid item className={classes.link}>
              Vision
            </Grid>
            <Grid item className={classes.link}>
              Technology
            </Grid>
            <Grid item className={classes.link}>
              Process
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid item className={classes.link}>
              About Us
            </Grid>
            <Grid item className={classes.link}>
              History
            </Grid>
            <Grid item className={classes.link}>
              Team
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid item className={classes.link}>
              Contact Us
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <img
        src={footerAdornment}
        alt="black decorative slash"
        className={classes.adornment}
      />
    </footer>
  );
}
