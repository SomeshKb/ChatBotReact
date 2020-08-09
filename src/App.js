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
import Footer from "./components/Footer";
import { Drawer, Hidden } from "@material-ui/core";

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
        <Header />
        <main>
          <Content />
        </main>
        <Footer />
        <Hidden smUp>
          <Drawer
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
          ></Drawer>
        </Hidden>
      </div>
    </ThemeProvider>
  );
}

export default App;
