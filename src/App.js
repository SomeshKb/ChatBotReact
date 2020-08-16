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
import ChatBot from "./chatbot";

const defaultTheme = createMuiTheme({
  palette: {
    secondary: { main: "#F9B934" },
    text: {
      primary: "#121037",
      secondary: "#546e7a",
    },
  },
});

const { breakpoints } = defaultTheme;

let theme = {
  ...defaultTheme,
  overrides: {
    MuiDrawer: {
      paper: {
        backgroundColor: "#ffffff",
      },
    },
    MuiTypography: {
      h3: {
        [breakpoints.down("xs")]: {
          fontSize: "2rem",
        },
      },
      h6: {
        [breakpoints.down("xs")]: {
          fontSize: "1.125rem",
        },
      },
    },
  },
};

const getResponse = async (text) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: text }),
  };
  try {
    const response = await fetch(
      "https://medicine-chat.herokuapp.com/api/predict",
      requestOptions
    );
    const data = await response.json();

    // check for error response
    if (!response.ok) {
      // get error message from body or default to response status
      const error = (data && data.message) || response.status;
      return Promise.reject(error);
    }

    return data;
  } catch (error) {
    console.error("There was an error!", error);
    return { Message: "There was an error!" };
  }
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
          <ChatBot getResponse={(text) => getResponse(text)} theme={theme} />
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
