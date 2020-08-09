import AppBar from "@material-ui/core/AppBar";

import React from "react";
import {
  makeStyles,
  Toolbar,
  List,
  ListItemIcon,
  ListItemText,
  ListItem,
  Button,
  Hidden,
  IconButton,
} from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import logo from "../images/logo.svg";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundColor: theme.palette.common.white,

    color: theme.palette.text.primary,
  },
  toolbar: {
    maxWidth: 1100,
    margin: "0 auto",
    width: "100%",
    padding: "0px 16px",
  },
  logo: {
    width: 120,
    height: 32,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  nav: {
    display: "flex",
  },
  logoContainer: {
    flex: 1,
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <AppBar className={classes.appBar} elevation={0} position="relative">
      <Toolbar className={classes.toolbar} disableGutters>
        <div className={classes.logoContainer}>
          <div className={classes.logo}>
            <a href="/" title="thefront">
              <img className={classes.image} alt="thefront" src={logo} />
            </a>
          </div>
        </div>
        <Hidden smDown>
          <List className={classes.nav}>
            <ListItem>
              <ListItemText primary="Drafts" ty />
              <ListItemIcon>
                <KeyboardArrowDownIcon />
              </ListItemIcon>
            </ListItem>
            <ListItem>
              <Button variant="contained" color="primary" size="large">
                Primary
              </Button>
            </ListItem>
          </List>
        </Hidden>
        <Hidden smUp>
          <IconButton color="inherit" aria-label="open drawer" edge="start">
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}
