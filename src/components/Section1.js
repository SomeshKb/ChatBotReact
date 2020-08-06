import React from "react";
import { Grid, Typography, makeStyles, Button } from "@material-ui/core";
import image from "../images/mind-map.svg";

const useStyles = makeStyles((theme) => ({
  typography: { fontWeight: "bold" },
  span: { color: "#3f51b5" },
  button: { marginLeft: 8 },
  image: { width: "100%", height: "100%" },
}));

export default function Section1({ sectionStyles }) {
  const classes = useStyles();
  return (
    <section style={sectionStyles}>
      <Grid container justify="space-between" spacing={4}>
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography
                variant="h3"
                align="left"
                color="textPrimary"
                className={classes.typography}
              >
                <span>
                  Welcome to <span className={classes.span}>TheFront.</span>
                  <br />
                  <span>Develop anything your business needs.</span>
                </span>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" align="left" color="textSecondary">
                Build a beautiful, modern website with flexible, fully
                customizable, atomic Material UI components.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Grid container wrap="nowrap" alignItems="center">
                <Button variant="contained" color="primary" size="large">
                  View Pages
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  size="large"
                  className={classes.button}
                >
                  Documentation
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            src={image}
            alt="TheFront Company"
            className={classes.image}
          ></img>
        </Grid>
      </Grid>
    </section>
  );
}
