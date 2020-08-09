import React from "react";
import Section1 from "./Section1";
import { Divider } from "@material-ui/core";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Section7 from "./Section7";
import Section8 from "./Section8";
import Section9 from "./Section9";

export default function Content() {
  return (
    <>
      <Section1 />
      <Section2 />
      <Divider />
      <Section3 />
      <Divider />
      <div style={{ background: "rgb(242 251 255)" }}>
        <Section4 />
      </div>
      <Section5 />
      <Section6 />
      <div style={{ background: "rgb(242 251 255)" }}>
        <Section7 />
      </div>
      <Section8 />
      <div style={{ background: "rgb(242 251 255)" }}>
        <Section9 />
      </div>
    </>
  );
}
