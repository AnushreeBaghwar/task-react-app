import React from "react";
import "./../../../App.css";
import { Typography, Stack } from "@mui/material";
import phone from "./../../imgs/phone.png";
import mail from "./../../imgs/mail.png";
import facebook from "./../../imgs/facebook.png";
import instagram from "./../../imgs/instagram.png";
import linkedin from "./../../imgs/linkedin.png";
import twitter from "./../../imgs/twitter.png";
function LayoutAddress(props) {
  const icons = [phone, mail];
  const texts = ["+91-8386878880", "rooms.quickstay@gmail.com"];
  const socialIcons = [facebook, instagram, twitter, linkedin];
  return (
    <div>
      <Stack direction="column">
        <Typography
          variant="h4"
          sx={{ fontFamily: "Prompt-Regular", color: "#fff" }}
        >
          QuickStay
        </Typography>
        <Typography
          variant="body2"
          sx={{ fontFamily: "Prompt-Regular", color: "#fff" }}
        >
          Chitkara Innovation Incubator Foundation
          <br />
          Sector 4,Mansa Devi Complex,
          <br />
          Panchkula,Haryana
        </Typography>
        <Stack direction="column">
          {icons.map((icon, ind) => {
            return (
              <div key={ind}>
                <img src={icons[ind]} alt="" width="20rem" height="20rem" />
                <Typography
                  sx={{ fontFamily: "Prompt-Regular", color: "#fff" }}
                >
                  {texts[ind]}
                </Typography>
              </div>
            );
          })}
        </Stack>
        <Typography sx={{ color: "#fff" }} variant="h6">
          Stay in touch!
        </Typography>
        <Stack direction="row" spacing={2}>
          {socialIcons.map((icon, ind) => {
            return (
              <img
                alt=""
                key={ind}
                src={socialIcons[ind]}
                width="40rem"
                height="40rem"
              />
            );
          })}
        </Stack>
      </Stack>
    </div>
  );
}

export default LayoutAddress;
