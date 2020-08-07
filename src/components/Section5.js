import React from "react";
import Section from "./Section";
import {
  Grid,
  List,
  Typography,
  makeStyles,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup, faCode } from "@fortawesome/free-solid-svg-icons";
import { faSketch } from "@fortawesome/free-brands-svg-icons";
import src from "../images/dashboard-drawing.svg";

const useStyles = makeStyles((theme) => ({
  container: {
    background: "rgb(247, 249, 250)",
    borderBottom: "1px solid #eeeeee",
    borderBottomRightRadius: "100%",
  },
  span: { color: "#3f51b5" },
  h4: { fontWeight: "bold" },
  avatar: { borderRadius: 16, width: 50, height: 50, background: "#e8eaf6" },
  listItemAvatwar: { marginRight: 16 },
  icon: { color: "rgb(63, 81, 181)" },
  image: { width: "100%", height: "100%" },
}));

function Component({ icon, title, subtitle }) {
  const classes = useStyles();
  return (
    <ListItem disableGutters>
      <ListItemAvatar className={classes.listItemAvatwar}>
        <Avatar className={classes.avatar}>
          <FontAwesomeIcon
            icon={icon}
            className={classes.icon}
          ></FontAwesomeIcon>
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={title} secondary={subtitle}></ListItemText>
    </ListItem>
  );
}

function LeftSection() {
  const classes = useStyles();
  return (
    <Grid item xs={12} md={6}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography
            variant="h4"
            color="textPrimary"
            align="left"
            className={classes.h4}
          >
            <span>
              Welcome to
              <span className={classes.span}> TheFront.</span>
              <br />
              <span>Develop anything your business needs.</span>
            </span>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" color="textSecondary" align="left">
            Build a beautiful, modern website with flexible, fully customizable,
            atomic Material UI components.
          </Typography>
        </Grid>
      </Grid>
      <List>
        <Component
          title="Build for developers"
          subtitle="TheFront is built to make your life easier. Variables, build tooling, documentation, and reusable components."
          icon={faLayerGroup}
        />
        <Component
          title="Designed to be modern"
          subtitle="Designed with the latest design trends in mind. TheFront feels modern, minimal, and beautiful."
          icon={faSketch}
        />
        <Component
          title="Documentation for everything"
          subtitle="We've written extensive documentation for components and tools, so you never have to reverse engineer anything."
          icon={faCode}
        />
      </List>
    </Grid>
  );
}

function RightSection() {
  const classes = useStyles();
  return (
    <Grid item container xs={12} md={6} alignItems="center" justify="center">
      <img src={src} alt="dashboard" className={classes.image} />
    </Grid>
  );
}

export default function Section5() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Section style={{ padding: "96px 16px" }}>
        <Grid container spacing={4}>
          <LeftSection />
          <RightSection />
        </Grid>
      </Section>
    </div>
  );
}
