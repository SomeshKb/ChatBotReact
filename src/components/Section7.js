import React from "react";
import Section from "./Section";
import {
  Grid,
  Typography,
  makeStyles,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
} from "@material-ui/core";
import peopleImg1Src from "../images/veronica-adams.jpg";
import peopleImg1SrcSet from "../images/veronica-adams@2x.jpg";
import peopleImg2Src from "../images/akachi-luccini.jpg";
import peopleImg2SrcSet from "../images/akachi-luccini@2x.jpg";
import peopleImg3Src from "../images/jack-smith.jpg";
import peopleImg3SrcSet from "../images/jack-smith@2x.jpg";

const useStyles = makeStyles((theme) => ({
  typography: { fontWeight: "bold" },
}));
const peopleList = [
  {
    title: "Veronica Adams",
    subTitle: "Growth Marketer, Crealytics",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    src: peopleImg1Src,
    srcSet: peopleImg1SrcSet,
  },
  {
    title: "Akachi Luccini",
    subTitle: "Lead Generation, Alternative Capital",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    src: peopleImg2Src,
    srcSet: peopleImg2SrcSet,
  },
  {
    title: "Jack Smith",
    subTitle: "Head of Operations, Parkfield Commerce",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    src: peopleImg3Src,
    srcSet: peopleImg3SrcSet,
  },
];

function Component({ title, subTitle, description, src, srcSet }) {
  return (
    <Grid item xs={12} md={4} sm={6}>
      <Grid container>
        <Grid item xs={12}>
          <ListItem disableGutters>
            <ListItemAvatar>
              <Avatar src={src} srcSet={srcSet} />
            </ListItemAvatar>
            <ListItemText primary={title} secondary={subTitle} />
          </ListItem>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1">{description}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
function Top() {
  const classes = useStyles();
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography
          color="textPrimary"
          align="center"
          variant="h4"
          className={classes.typography}
        >
          Our customers are our biggest fans.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography color="textSecondary" align="center" variant="h6">
          We dont' like to brag, but we don't mind letting our customers do it
          for us. Here are a few nice things folks have said about our themes
          over the years.
        </Typography>
      </Grid>
    </Grid>
  );
}

function Bottom() {
  return (
    <Grid container spacing={4}>
      {peopleList.map(({ title, subTitle, description, src, srcSet }) => (
        <Component
          title={title}
          subTitle={subTitle}
          description={description}
          src={src}
          srcSet={srcSet}
        />
      ))}
      {peopleList.map(({ title, subTitle, description, src, srcSet }) => (
        <Component
          title={title}
          subTitle={subTitle}
          description={description}
          src={src}
          srcSet={srcSet}
        />
      ))}
    </Grid>
  );
}

export default function Section7() {
  return (
    <div style={{ background: "rgb(242 251 255)" }}>
      <Section>
        <Top />
        <Bottom />
      </Section>
    </div>
  );
}
