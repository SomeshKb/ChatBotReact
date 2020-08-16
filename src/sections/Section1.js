import React from "react";
import { Grid, Typography, makeStyles, Button } from "@material-ui/core";
import image from "../images/mind-map.svg";
import Section from "../components/Section";

const useStyles = makeStyles((theme) => ({
  typography: { fontWeight: "bold" },
  span: { color: "#3f51b5" },
  button: { marginLeft: 8 },
  image: { width: "100%", height: "100%" },
}));
function RightSection() {
  const classes = useStyles();
  return (
    <Grid item xs={12} md={6}>
      <img src={image} alt="TheFront Company" className={classes.image}></img>
    </Grid>
  );
}

function LeftSection() {
  const classes = useStyles();
  return (
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
              Welcome to <span className={classes.span}>Chatbot.io</span>
              <br />
              <span>Create AI chatbots, easily</span>
            </span>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" align="left" color="textSecondary">
            Choose from a vast number of AI based chatbots or build yourself
            one.
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
  );
}

export default function Section1() {
  return (
    <Section>
      <Grid container justify="space-between" spacing={4}>
        <LeftSection />
        <RightSection />
      </Grid>
    </Section>
  );
}
