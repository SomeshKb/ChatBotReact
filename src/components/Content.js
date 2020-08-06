import React from "react";
import Section1 from "./Section1";
import { makeStyles, Divider, createStyles } from "@material-ui/core";
import Section2 from "./Section2";
import Section3 from "./Section3";
const useStyles = createStyles((theme) => ({
  section: {
    padding: "40px 16px",
    maxWidth: 1100,
    margin: "0 auto",
    width: "100%",
  },
}));
export default function Content() {
  const styles = useStyles();

  return (
    <>
      <Section1 sectionStyles={styles.section} />
      <Section2 sectionStyles={styles.section} />
      <Divider />
      <Section3 sectionStyles={styles.section} />
      <Divider />
    </>
  );
}
