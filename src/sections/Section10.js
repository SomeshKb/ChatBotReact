import React from "react";
import {
  Grid,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  makeStyles,
  Typography,
  Button,
} from "@material-ui/core";
import Section from "../components/Section";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles((theme) => ({
  listItemAvatar: { alignSelf: "flex-start", marginTop: 8, marginRight: 16 },
  avatar: { background: "#fff8e1", width: 50, height: 50 },
  fontAwesome: { color: "rgb(255, 193, 7)", fontSize: 20 },
}));

const list = [
  {
    title: "Flexible access to facilities.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur.",
  },
  {
    title: "Snacks, drinks, coffee, and more.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur.",
  },
  {
    title: "On site tech support.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur.",
  },
];

function Component({ title, description }) {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6} md={4}>
      <ListItem disableGutters>
        <ListItemAvatar className={classes.listItemAvatar}>
          <Avatar className={classes.avatar}>
            <FontAwesomeIcon
              icon={faQuestion}
              className={classes.fontAwesome}
            />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={title}
          secondary={description}
          primaryTypographyProps={{ variant: "h6" }}
          secondaryTypographyProps={{
            variant: "subtitle1",
            variantMapping: { subtitle1: "h6" },
          }}
        />
      </ListItem>
    </Grid>
  );
}

function Top() {
  return (
    <Grid item xs={12}>
      <Grid container spacing={4}>
        {list.map((l) => (
          <Component {...l} />
        ))}
      </Grid>
    </Grid>
  );
}

function Bottom() {
  return (
    <Grid item xs={12}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h4" color="textPrimary" align="center">
            Get TheFront and save your time.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" color="textSecondary" align="center">
            Build a beautiful, modern website with flexible, fully customizable,
            atomic Material UI components.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container alignItems="center" justify="center">
            <Button color="primary" variant="contained" size="large">
              BUY IT NOW
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default function Section10() {
  return (
    <Section style={{ padding: "96px 8px" }}>
      <Grid container spacing={4}>
        <Top />
        <Bottom />
      </Grid>
    </Section>
  );
}
