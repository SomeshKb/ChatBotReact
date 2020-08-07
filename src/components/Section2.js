import React from "react";
import { Grid, Avatar, makeStyles, Typography } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup, faCode } from "@fortawesome/free-solid-svg-icons";
import { faSketch } from "@fortawesome/free-brands-svg-icons";
import Section from "./Section";

const useStyles = makeStyles((theme) => ({
  avatar: { borderRadius: 16, width: 70, height: 70, background: "#e8eaf6" },
  icon: { fontSize: 30, color: "rgb(63, 81, 181)" },
  h6: { fontWeight: 700 },
}));

const Component = ({ subTitle, title, icon }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={4}>
      <Grid container spacing={2}>
        <Grid container item xs={12}>
          <Avatar className={classes.avatar}>
            <FontAwesomeIcon icon={icon} className={classes.icon} />
          </Avatar>
        </Grid>
        <Grid container item xs={12}>
          <Typography
            variant="h6"
            color="textPrimary"
            align="left"
            className={classes.h6}
          >
            {title}
          </Typography>
        </Grid>
        <Grid container item xs={12}>
          <Typography variant="body1" color="textSecondary" align="left">
            {subTitle}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default function Section2({ sectionStyles }) {
  return (
    <Section>
      <Grid container spacing={4}>
        <Component
          title="Build for developers"
          subTitle="TheFront is built to make your life easier. Variables, build tooling, documentation, and reusable components."
          icon={faLayerGroup}
        />
        <Component
          title="Designed to be modern"
          subTitle="Designed with the latest design trends in mind. TheFront feels modern, minimal, and beautiful."
          icon={faSketch}
        />
        <Component
          title="Documentation for everything"
          subTitle="We've written extensive documentation for components and tools, so you never have to reverse engineer anything."
          icon={faCode}
        />
      </Grid>
    </Section>
  );
}
