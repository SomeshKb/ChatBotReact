import React from "react";
import {
  makeStyles,
  Grid,
  List,
  ListItem,
  IconButton,
  Typography,
} from "@material-ui/core";
import logo from "../images/logo-negative.svg";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import PinterestIcon from "@material-ui/icons/Pinterest";
import TwitterIcon from "@material-ui/icons/Twitter";

const useStyles = makeStyles((theme) => ({
  footer: { padding: "96px 0px", background: "#1b1642" },
  container: {
    width: "100%",
    margin: "0 auto",
    padding: "0px 16px",
    maxWidth: 1100,
  },
  imageContainer: {
    width: 120,
    height: 32,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  iconButton: {
    color: "rgba(255,255,255,.6)",
    padding: 0,
    marginRight: 8,
  },
  linksContainer: {
    display: "flex",
  },
  item: { paddingTop: 0, paddingBottom: 4 },
  itemHeaderText: { color: "white", textTransform: "uppercase" },
  itemText: { color: "rgba(255,255,255,.6);", textDecoration: "none" },
}));

const column1 = [
  [
    {
      heading: "Services",
      links: [
        { title: "Coworking" },
        { title: "Rental" },
        { title: "Job Listing" },
        { title: "E-Learning" },
        { title: "E-commerce" },
        { title: "Expp" },
      ],
    },
    {
      heading: "Apps",
      links: [{ title: "Desktop App" }, { title: "Mobile App" }],
    },
  ],
];
const column2 = [
  [
    {
      heading: "WEB",
      links: [
        { title: "Overview" },
        { title: "Basic" },
        { title: "Service" },
        { title: "Startup" },
        { title: "Enterprise" },
        { title: "Could Hosting" },
        { title: "Agency" },
        { title: "Design Company" },
        { title: "Logistics" },
      ],
    },
  ],
];

const column3 = [
  [
    {
      heading: "Carrier",
      links: [
        { title: "Lising" },
        { title: "Lising Minimal" },
        { title: "Opening" },
      ],
    },
    {
      heading: "Help Center",
      links: [{ title: "Overview" }, { title: "Article" }],
    },
  ],
];

const column4 = [
  [
    {
      heading: "Company",
      links: [
        { title: "About" },
        { title: "About (Cover)" },
        { title: "Pricing" },
        { title: "Terms" },
      ],
    },
    {
      heading: "Contact",
      links: [
        { title: "Reach View" },
        { title: "Sidebar Map" },
        { title: "Cover" },
      ],
    },
  ],
];

const column5 = [
  [
    {
      heading: "Blog",
      links: [
        { title: "Newsroom" },
        { title: "Reach View" },
        { title: "Search" },
        { title: "Article" },
      ],
    },
    {
      heading: "Portfolio",
      links: [
        { title: "Basic" },
        { title: "Masonry" },
        { title: "Grid View" },
        { title: "Parallax Effect" },
      ],
    },
  ],
];

const column6 = [
  [
    {
      heading: "SETTINGS",
      links: [
        { title: "General" },
        { title: "Notifications" },
        { title: "Billing" },
      ],
    },
    {
      heading: "SIGN UP",
      links: [{ title: "Simple" }, { title: "Cover" }],
    },
  ],
];

const column7 = [
  [
    {
      heading: "SIGN IN",
      links: [{ title: "Simple" }, { title: "Cover" }],
    },
    {
      heading: "PASSWORD RESET",
      links: [{ title: "Simple" }, { title: "Cover" }],
    },
    {
      heading: "ERROR",
      links: [{ title: "Simple" }, { title: "Cover" }],
    },
  ],
];

const grid1 = [column1, column2];

const grid2 = [column3, column4, column5];

const grid3 = [column6, column7];

const gridList = [grid1, grid2, grid3];

function ItemHeader({ title }) {
  const classes = useStyles();
  return (
    <ListItem className={classes.item}>
      <Typography variant="body2" className={classes.itemHeaderText}>
        {title}
      </Typography>
    </ListItem>
  );
}

function Item({ title, link = "#" }) {
  const classes = useStyles();
  return (
    <ListItem className={classes.item}>
      <Typography
        variant="body2"
        variantMapping={{ body2: "a" }}
        href={link}
        className={classes.itemText}
      >
        {title}
      </Typography>
    </ListItem>
  );
}

export default function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <Grid container spacing={4}>
          <Grid xs={12} md={2}>
            <List>
              <ListItem>
                <div className={classes.imageContainer}>
                  <a href="/" title="thefront">
                    <img className={classes.image} alt="thefront" src={logo} />
                  </a>
                </div>
              </ListItem>
              <ListItem>
                <IconButton className={classes.iconButton}>
                  <FacebookIcon />
                </IconButton>
                <IconButton className={classes.iconButton}>
                  <InstagramIcon />
                </IconButton>
                <IconButton className={classes.iconButton}>
                  <PinterestIcon />
                </IconButton>
                <IconButton className={classes.iconButton}>
                  <TwitterIcon />
                </IconButton>
              </ListItem>
            </List>
          </Grid>
          <Grid xs={12} md={10}>
            <Grid container>
              {gridList.map((grid) => (
                <Grid item>
                  <div className={classes.linksContainer}>
                    {grid.map((div) =>
                      div.map((list) => (
                        <div>
                          {list.map((item) => (
                            <List>
                              <ItemHeader title={item.heading} />
                              {item.links.map((i) => (
                                <Item title={i.title} />
                              ))}
                            </List>
                          ))}
                        </div>
                      ))
                    )}
                  </div>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </div>
    </footer>
  );
}
