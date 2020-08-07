import React from "react";
import {
  // createMuiTheme,
  ThemeProvider,
  createMuiTheme,
  // withStyles,
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
// import Hidden from "@material-ui/core/Hidden";
// import Typography from "@material-ui/core/Typography";
// import Link from "@material-ui/core/Link";
// import Navigator from "./Navigator";
// import Content from "./Content";
import Header from "./components/Header";
import Content from "./components/Content";
import "./App.css";

let theme = createMuiTheme({
  palette: {
    secondary: { main: "#F9B934" },
    text: {
      primary: "#121037",
      secondary: "#546e7a",
    },
  },
});

theme = {
  ...theme,
  overrides: {
    MuiDrawer: {
      paper: {
        backgroundColor: "#ffffff",
      },
    },
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <div className={classes.root}> */}
      <CssBaseline />
      <div>
        {/* <nav className={classes.drawer}>
          <Hidden smUp implementation="js">
            <Navigator
              PaperProps={{ style: { width: drawerWidth } }}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
            />
          </Hidden>
          <Hidden xsDown implementation="css">
            <Navigator PaperProps={{ style: { width: drawerWidth } }} />
          </Hidden>
        </nav> */}
        {/* <div className={classes.app}> */}
        <Header />
        <main>
          <Content />
        </main>
      </div>
      {/* <footer className={classes.footer}>
          <Copyright />
        </footer> */}
      {/* </div> */}
      {/* </div> */}
    </ThemeProvider>
  );
}

export default App;
