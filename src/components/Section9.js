import React from "react";
import {
  Grid,
  Typography,
  IconButton,
  makeStyles,
  Card,
  CardContent,
  Divider,
  List,
  ListItem,
  Button,
} from "@material-ui/core";
import Section from "./Section";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";

const useStyles = makeStyles((theme) => ({
  a: {
    display: "inline-flex",
    alignItems: "center",
    textDecoration: "none",
  },
  button: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  iconContainer: {
    marginRight: 8,
  },
  icon: {
    color: "rgb(63, 81, 181)",
    fontSize: 20,
  },
}));

function Feature({ title }) {
  const classes = useStyles();
  return (
    <ListItem disableGutters>
      <div className={classes.iconContainer}>
        <FontAwesomeIcon icon={faCheckCircle} className={classes.icon} />
      </div>
      <Typography variant="h6" noWrap>
        {title}
      </Typography>
    </ListItem>
  );
}

function Pricing({
  subscribeButtonVariant = "outlined",
  cardTitle = "Standard License",
  price = "49",
}) {
  return (
    <Grid item xs={12} md={4}>
      <Card variant="outlined" square={false}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h5" gutterBottom>
                {cardTitle}
              </Typography>
              <Typography color="textSecondary" variant="subtitle1">
                A pay-once license, just for you
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <Grid item xs={12}>
              <div>
                <Typography variant="h3" variantMapping={{ h3: "span" }}>
                  ${price}
                </Typography>
                <Typography
                  variant="subtitle1"
                  variantMapping={{ subtitle1: "span" }}
                >
                  / MO
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12}>
              <List>
                <Feature title="Rich, responsive landing pages" />
                <Feature title="100+ styled components" />
                <Feature title="Flexible, simple license" />
                <Feature title="Speedy build tooling" />
                <Feature title="6 months free support included" />
              </List>
            </Grid>
            <Grid item xs={12}>
              <Button
                variant={subscribeButtonVariant}
                color="primary"
                size="large"
                fullWidth
              >
                SUBSCRIBE NOW
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="caption"
                align="center"
                variantMapping={{ caption: "p" }}
              >
                Fully featured 30-day free trial
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
}

function Bottom() {
  return (
    <Grid container spacing={4}>
      <Pricing />
      <Pricing
        subscribeButtonVariant="contained"
        cardTitle="Extended License"
        price="79"
      />
      <Pricing />
    </Grid>
  );
}
function Top() {
  const classes = useStyles();
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4" color="textPrimary" align="center">
          Simple pricing
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" color="textSecondary" align="center">
          A pay-once license, just for you.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid container wrap="nowrap" alignItems="center" justify="center">
          <div>
            <a href="/web-basic" className={classes.a}>
              <Typography
                variant="h6"
                variantMapping={{ h6: "span" }}
                color="primary"
              >
                See what's included
              </Typography>
              <IconButton
                color="primary"
                aria-label="learn more"
                className={classes.button}
              >
                <ArrowRightAltIcon />
              </IconButton>
            </a>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
}
export default function Section9() {
  return (
    <Section>
      <Top />
      <Bottom />
    </Section>
  );
}
