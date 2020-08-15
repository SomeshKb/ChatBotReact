import React, { useState } from "react";

import CloseIcon from "@material-ui/icons/Close";
import MessageIcon from "@material-ui/icons/Message";
import { makeStyles, Fab, Popper, CssBaseline } from "@material-ui/core";
import PopperContent from "./PopperContent";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { green, purple } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
    fab: {
        position: "fixed",
        bottom: theme.spacing(2),
        right: theme.spacing(2)
    },
    modal: {
        position: "absolute",
        right: theme.spacing(2),
        bottom: theme.spacing(10)
    },
    backDrop: {
        backgroundColor: "none"
    },
    typography: {
        padding: theme.spacing(2)
    }
}));

const defaultTheme = createMuiTheme({
    palette: {
        primary: {
            main: purple[500]
        },
        secondary: {
            main: green[500]
        }
    }
});

export default function ChatBot({ getResponse, theme: overrideTheme }) {
    const theme = {
        ...defaultTheme,
        ...overrideTheme,
        overrides: {
            MuiCardContent: {
                root: {
                    padding: 0,
                    "&:last-child": {
                        paddingBottom: 0
                    }
                }
            }
        }
    };
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? "simple-popper" : undefined;

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Popper
                id={id}
                open={open}
                anchorEl={anchorEl}
                placement="top-end"
                modifiers={{
                    offset: {
                        enabled: true,
                        offset: "0,10"
                    }
                }}
            >
                <PopperContent getResponse={getResponse} />
            </Popper>
            <Fab
                color="primary"
                aria-label="add"
                onClick={handleClick}
                className={classes.fab}
            >
                {open ? <CloseIcon /> : <MessageIcon />}
            </Fab>
        </ThemeProvider>
    );
}
