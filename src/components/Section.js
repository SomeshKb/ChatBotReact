import React from "react";
import { createStyles } from "@material-ui/core";
const useStyles = createStyles((theme) => ({
  section: {
    padding: "40px 8px",
    maxWidth: 1100,
    margin: "0 auto",
    width: "100%",
  },
}));

export default function Section(props) {
  const styles = useStyles();

  const { style, children, ...rest } = props;

  return (
    <section style={{ ...styles.section, ...style }} {...rest}>
      {children}
    </section>
  );
}
