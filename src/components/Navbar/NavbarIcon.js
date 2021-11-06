import React from "react";
import Logo3 from "./../imgs/Logo3.png";
import { Stack } from "@mui/material";
import { Typography } from "@mui/material";
import "./../../App.css";
function NavbarIcon(props) {
  return (
    <div>
      <Stack direction="row" spacing="0">
        <img
          className="NavIcon"
          src={Logo3}
          alt=""
          width="40rem"
          height="40rem"
        />
        <Typography
          variant="h5"
          sx={{ fontFamily: "Prompt-Medium", paddingTop: "6px" }}
        >
          QuickStay
        </Typography>
      </Stack>
    </div>
  );
}

export default NavbarIcon;
