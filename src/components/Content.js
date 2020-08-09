import React from "react";
import { Divider } from "@material-ui/core";

import Section1 from "../sections/Section1";
import Section2 from "../sections/Section2";
import Section3 from "../sections/Section3";
import Section4 from "../sections/Section4";
import Section5 from "../sections/Section5";
import Section6 from "../sections/Section6";
import Section7 from "../sections/Section7";
import Section8 from "../sections/Section8";
import Section9 from "../sections/Section9";
import Section10 from "../sections/Section10";

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
      <div
        style={{
          background: "rgb(242 251 255)",
          borderBottom: "1px solid #eeeeee",
          borderBottomRightRadius: "100%",
        }}
      >
        <Section9 />
        <Section10 />
      </div>
    </>
  );
}
