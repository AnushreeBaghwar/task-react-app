import React from "react";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import moneyBag from "./../imgs/moneyBag.png";
import Search from "./../imgs/Search.png";
import sofa from "./../imgs/sofa.png";

function LayoutTwo() {
  const StyledBox = styled(Box)(({ theme }) => ({
    width: "10rem",
    paddingTop: "5rem",
    paddingLeft: "5rem",
    alignItems: "center",
    verticalAlign: "center",
    horizontalAlign: "center",
    textAlign: "center",
    fontFamily: "Prompt-Regular",
    justifyContent: "center",
  }));
  const imgs = [moneyBag, Search, sofa];
  const items = [
    {
      text1: "No Brokerage",
      text2: "Say bye-bye to Heavy brokerage",
    },
    {
      text1: "No Search Hassle",
      text2: "No need to wander around in search of a pg",
    },
    {
      text1: "Fully Furnished",
      text2: "Get cozy with already installed furniture",
    },
  ];
  return (
    <div>
      <Stack direction="row" spacing={4}>
        <Typography
          sx={{
            textAlign: "center",
            fontFamily: "Palanquin Dark",
            paddingTop: "5rem",
            p: 5,
          }}
          variant="h5"
        >
          QuickStay
          <br />
          hai
          <br />
          to
          <br />
          sahi hai
        </Typography>
        {items.map((item, ind) => {
          return (
            <StyledBox key={ind} component="span">
              <img src={imgs[ind]} width="60rem" height="60rem" alt="" />
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {item.text1}{" "}
              </Typography>
              <Typography variant="body2">{item.text2} </Typography>
            </StyledBox>
          );
        })}
      </Stack>
    </div>
  );
}

export default LayoutTwo;
