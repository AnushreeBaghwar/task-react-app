import React from "react";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import pocket from "./../imgs/pocket.png";
import wrench from "./../imgs/wrench.png";
import water from "./../imgs/water.png";
import housekeeping from "./../imgs/housekeeping.png";
import fun from "./../imgs/fun.png";
import customer from "./../imgs/customer.png";

function LayoutThree(props) {
  const imgs = [pocket, wrench, water, housekeeping, fun, customer];
  const items = [
    "Pocket Friendly",
    "Well Maintained",
    "Water Purifier",
    "HouseKeeping",
    "Friendly Aura",
    "Customer Support",
  ];
  return (
    <div>
      <Box sx={{ flexGrow: 1, paddingTop: "3rem" }}>
        <Typography
          sx={{
            paddingLeft: "3rem",
            fontFamily: "Palanquin Dark",
          }}
          variant="h5"
        >
          Stay ho to
          <br />
          QuickStay
          <br />
          jaisa
        </Typography>
        <Grid
          sx={{ paddingLeft: "22rem" }}
          container
          spacing={{ xs: 2, md: 8 }}
          columns={{ xs: 4, sm: 8, md: 10 }}
        >
          {items.map((item, ind) => (
            <Grid item xs={2} sm={4} md={3} key={ind}>
              <img src={imgs[ind]} width="70rem" height="70rem" alt="" />
              <br />
              <Typography variant="body2">{item}</Typography>{" "}
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export default LayoutThree;
