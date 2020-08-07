import React from "react";
import Section from "./Section";
import {
  Grid,
  Typography,
  makeStyles,
  Button,
  Avatar,
} from "@material-ui/core";
import backgroundImage from "../images/map.png";
import slackImg from "../images/slack.svg";
import mailChimpImg from "../images/mailchimp.svg";
import dropboxImg from "../images/dropbox.svg";
import googleDriveImg from "../images/google-drive.svg";
import googleAdManagerImg from "../images/google-ad-manager.svg";
import atlassianImg from "../images/atlassian.svg";

const useStyles = makeStyles((theme) => ({
  span: {
    color: "#f9b934",
    fontWeight: "bold",
  },
  h4: {
    fontWeight: "bold",
  },
  button: {
    marginLeft: 8,
  },
  image: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: "center",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  },
  topContainer: {
    marginBottom: 32,
  },
  imagesContainer: {
    maxWidth: 600,
    margin: "0 auto",
  },
  avatar: {
    width: 80,
    height: 80,
    border: "8px solid white",
    boxShadow: "0 2px 10px 0 rgba(23,70,161,.11)",
    marginTop: 4,
  },
}));

function Top() {
  const classes = useStyles();
  return (
    <Grid container spacing={2} className={classes.topContainer}>
      <Grid item xs={12}>
        <Typography
          color="primary"
          align="center"
          variant="overline"
          variantMapping={{ overline: "p" }}
        >
          BUILD UP A COMMUNITY
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography
          color="textPrimary"
          align="center"
          variant="h4"
          className={classes.h4}
        >
          <span>
            Join the biggest community of
            <span className={classes.span}> users</span>
          </span>
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography color="textSecondary" align="center" variant="h6">
          Build a beautiful, modern website with flexible, fully customizable,
          atomic Material UI components.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid container wrap="nowrap" alignItems="center" justify="center">
          <Button variant="contained" color="primary" size="large">
            DOWNLOAD NOW
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            size="large"
            className={classes.button}
          >
            SEE PRICINGS
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

function Bottom() {
  const classes = useStyles();
  return (
    <div className={classes.image}>
      <Section style={{ padding: "96px 16px" }}>
        <Grid container className={classes.imagesContainer}>
          <Grid container item xs={4}>
            <Grid item xs={6}>
              <Avatar className={classes.avatar} src={slackImg} />
            </Grid>
          </Grid>
          <Grid container item xs={4}>
            <Grid item xs={6}>
              <Avatar className={classes.avatar} src={mailChimpImg} />
            </Grid>
          </Grid>
          <Grid container item xs={4}>
            <Grid item xs={6}>
              <Avatar className={classes.avatar} src={dropboxImg} />
            </Grid>
          </Grid>
          <Grid container item xs={4} direction="row-reverse">
            <Grid item xs={6}>
              <Avatar className={classes.avatar} src={googleDriveImg} />
            </Grid>
          </Grid>
          <Grid container item xs={4} direction="row-reverse">
            <Grid item xs={6}>
              <Avatar className={classes.avatar} src={googleAdManagerImg} />
            </Grid>
          </Grid>
          <Grid container item xs={4} direction="row-reverse">
            <Grid item xs={6}>
              <Avatar className={classes.avatar} src={atlassianImg} />
            </Grid>
          </Grid>
        </Grid>
      </Section>
    </div>
  );
}

export default function Section6() {
  return (
    <Section style={{ padding: "96px 16px" }}>
      <Top />
      <Bottom />
    </Section>
  );
}
