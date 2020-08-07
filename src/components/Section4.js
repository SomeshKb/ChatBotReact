import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  makeStyles,
  CardContent,
  FormControl,
  TextField,
  Button,
  Typography,
  ListItem,
  ListItemAvatar,
  Avatar,
} from "@material-ui/core";
import src from "../images/place3.jpg";
import srcSet from "../images/place3@2x.jpg";
import Section from "./Section";
import Typed from "./Typed";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const useStyles = makeStyles((theme) => ({
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderBottomLeftRadius: "40%",
  },
  card: {
    maxWidth: 400,
  },
  cardContent: {
    padding: "48px 24px",
  },
  span: {
    color: "#f9b934",
    fontWeight: "bold",
  },
  icon: {
    color: "rgb(255, 87, 34)",
    fontSize: "10px",
  },
  avatar: {
    background: "#fbe9e7",
    width: 20,
    height: 20,
  },
  listItemAvatar: {
    minWidth: 28,
  },
}));

function LeftSection() {
  const classes = useStyles();
  return (
    <Grid container item alignItems="center" xs={12} md={6}>
      <Card className={classes.card}>
        <CardMedia>
          <img
            className={classes.image}
            alt="Contact cover"
            src={src}
            srcset={srcSet}
          />
        </CardMedia>
        <CardContent className={classes.cardContent}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <TextField label="Full Name *" />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <TextField label="Email *" />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <TextField label="Occupation" />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" fullWidth>
                Contact Us
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
}

function RightSection() {
  const classes = useStyles();
  return (
    <Grid container item alignItems="center" justify="flex-end" xs={12} md={6}>
      <Grid item>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="overline" align="left" color="primary">
              MAKE THINGS DONE
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h4" align="left">
              <span>
                The most useful resource
                <br />
                <span className={classes.span}>ever created</span>
                <br />
                <span className={classes.span}>for&nbsp;</span>
                <Typed
                  strings={["web developers.", "designers.", "founders."]}
                  typeSpeed={40}
                  loop
                  className={classes.span}
                />
              </span>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" align="left" color="textSecondary">
              Using TheFront to build your site means never worrying about
              designing another page or cross browser compatibility. Our
              ever-growing library of components and pre-designed layouts will
              make your life easier.
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={6}>
            <ListItem disableGutters>
              <ListItemAvatar className={classes.listItemAvatar}>
                <Avatar className={classes.avatar}>
                  <FontAwesomeIcon icon={faCheck} className={classes.icon} />
                </Avatar>
              </ListItemAvatar>
              <Typography
                variant="subtitle1"
                align="left"
                color="secondary"
                noWrap
              >
                Lifetime updates
              </Typography>
            </ListItem>
          </Grid>
          <Grid item xs={6}>
            <ListItem disableGutters>
              <ListItemAvatar className={classes.listItemAvatar}>
                <Avatar className={classes.avatar}>
                  <FontAwesomeIcon icon={faCheck} className={classes.icon} />
                </Avatar>
              </ListItemAvatar>
              <Typography
                variant="subtitle1"
                align="left"
                color="secondary"
                noWrap
              >
                Tech support
              </Typography>
            </ListItem>
          </Grid>
          <Grid item xs={6}>
            <ListItem disableGutters>
              <ListItemAvatar className={classes.listItemAvatar}>
                <Avatar className={classes.avatar}>
                  <FontAwesomeIcon icon={faCheck} className={classes.icon} />
                </Avatar>
              </ListItemAvatar>
              <Typography
                variant="subtitle1"
                align="left"
                color="secondary"
                noWrap
              >
                Tons of assets
              </Typography>
            </ListItem>
          </Grid>
          <Grid item xs={6}>
            <ListItem disableGutters>
              <ListItemAvatar className={classes.listItemAvatar}>
                <Avatar className={classes.avatar}>
                  <FontAwesomeIcon icon={faCheck} className={classes.icon} />
                </Avatar>
              </ListItemAvatar>
              <Typography
                variant="subtitle1"
                align="left"
                color="secondary"
                noWrap
              >
                Integration ready
              </Typography>
            </ListItem>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default function Section4() {
  return (
    <Section style={{ background: "rgb(247, 249, 250)" }}>
      <Grid container spacing={4}>
        <LeftSection />
        <RightSection />
      </Grid>
    </Section>
  );
}
