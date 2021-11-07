import { Container } from "@mui/material";
import React from "react";
import LayoutOne from "./LayoutOne";
import LayoutTwo from "./LayoutTwo";
import LayoutThree from "./LayoutThree";
import LayoutFour from "./LayoutFour";
import LayoutFive from "./LayoutFive";
import LayoutSix from "./LayoutSix";
import LayoutSeven from "./LayoutSeven/index.js";
function Layout(props) {
  return (
    <div>
      <Container sx={{ paddingTop: "3rem" }}>
        <LayoutOne />
        <LayoutTwo />
        <LayoutThree />
        <LayoutFour />
        <LayoutFive />
        <LayoutSix />
        <LayoutSeven />
      </Container>
    </div>
  );
}

export default Layout;
