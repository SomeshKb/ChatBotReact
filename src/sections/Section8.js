import React from "react";
import Section from "../components/Section";
import { Grid, Typography, makeStyles } from "@material-ui/core";
import dashboardImg from "../images/dashboard-extended.svg";

const useStyles = makeStyles((theme) => ({
  span: { color: "#3f51b5" },
  iconContainer: {
    width: "100%",
    display: "flex",
    maxWidth: 320,
    justifyContent: "space-between",
  },
  typoGraphy: {
    fontWeight: "bold",
  },
  image: { display: "block", width: "100%", height: "100%" },
}));

function Left() {
  const classes = useStyles();
  return (
    <Grid item xs={12} md={6}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography
                color="textPrimary"
                align="left"
                variant="h4"
                className={classes.typoGraphy}
              >
                <span>
                  Stay focused on your business.
                  <br />
                  <span class={classes.span}>Let us handle the design.</span>
                </span>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography color="textSecondary" align="left" variant="h6">
                You have a business to run. Stop worring about cross-browser
                bugs, designing new pages, keeping your components up to date.
                Let us do that for you.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.iconContainer}>
            <div>
              <Typography
                variant="h4"
                color="primary"
                gutterBottom
                align="center"
              >
                99%
              </Typography>
              <Typography
                variant="subtitle1"
                color="textSecondary"
                align="center"
              >
                Countries
              </Typography>
            </div>
            <div>
              <Typography
                variant="h4"
                color="primary"
                gutterBottom
                align="center"
              >
                24/7
              </Typography>
              <Typography
                variant="subtitle1"
                color="textSecondary"
                align="center"
              >
                Support
              </Typography>
            </div>
            <div>
              <Typography
                variant="h4"
                color="primary"
                gutterBottom
                align="center"
              >
                80K +
              </Typography>
              <Typography
                variant="subtitle1"
                color="textSecondary"
                align="center"
              >
                Desks
              </Typography>
            </div>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
}

function Right() {
  const classes = useStyles();
  return (
    <Grid container item alignItems="center" justify="center" xs={12} md={6}>
      <img src={dashboardImg} alt="dashboard" className={classes.image} />
    </Grid>
  );
}

export default function Section8() {
  return (
    <Section>
      <Grid container spacing={4}>
        <Left />
        <Right />
      </Grid>
    </Section>
  );
}
