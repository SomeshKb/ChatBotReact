import React from "react";
import Section1 from "./Section1";
import { Divider } from "@material-ui/core";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Section7 from "./Section7";

export default function Content() {
  return (
    <>
      <Section1 />
      <Section2 />
      <Divider />
      <Section3 />
      <Divider />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
    </>
  );
}
