import React from "react";
import Section1 from "./Section1";
import { Divider } from "@material-ui/core";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";

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
    </>
  );
}
