import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import airbnblogo from "../images/airbnb.svg";
import coinBaseLogo from "../images/coinbase.svg";
import dribbbleLogo from "../images/dribbble.svg";
import instagramLogo from "../images/instagram.svg";
import netflixLogo from "../images/netflix.svg";
import pinterestLogo from "../images/pinterest.svg";
import Section from "../components/Section";

const useStyles = makeStyles((theme) => ({
  image: {
    maxWidth: 120,
    width: "100%",
    height: "100%",
  },
  section: {
    padding: "96px 16px",
  },
}));

function Component({ img: { logo, alt } }) {
  const classes = useStyles();
  return (
    <Grid container item alignItems="center" justify="center" xs={6} sm={2}>
      <img src={logo} className={classes.image} alt={alt} />
    </Grid>
  );
}

export default function Section3() {
  return (
    <Section style={{ padding: "96px 8px" }}>
      <Grid container alignItems="center" justify="space-between">
        <Component img={{ logo: airbnblogo, alt: "Airbnb" }} />
        <Component img={{ logo: coinBaseLogo, alt: "Coinbase" }} />
        <Component img={{ logo: dribbbleLogo, alt: "Dribbble" }} />
        <Component img={{ logo: instagramLogo, alt: "Instagram" }} />
        <Component img={{ logo: netflixLogo, alt: "Netflix" }} />
        <Component img={{ logo: pinterestLogo, alt: "Pinterest" }} />
      </Grid>
    </Section>
  );
}
