import React from "react";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import map from "./../imgs/map.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
function LayoutOne() {
  const StyledBox = styled(Box)(({ theme }) => ({
    width: "6rem",
    p: 5,
    border: "1px solid #a7a7a7",
    borderRadius: "1rem",
    textAlign: "center",
    fontFamily: "Prompt-Regular",
    justifyContent: "center",
  }));
  const Cities = ["Chandigarh", "Mohali", "Panchkula", "Zirakpur"];
  return (
    <div>
      <Stack direction="row" spacing={4}>
        <Typography
          sx={{ textAlign: "center", fontFamily: "Palanquin Dark", p: 3 }}
          variant="h4"
        >
          Find
          <br />
          QuickStay
          <br />
          in
        </Typography>

        {Cities.map((item, ind) => {
          return (
            <StyledBox
              key={ind}
              component="span"
              sx={{
                width: "6rem",
                p: 5,
                border: "1px solid #a7a7a7",
                borderRadius: "1rem",
                justifyContent: "center",
              }}
            >
              <img src={map} width="80rem" height="80rem" alt="" />
              <Typography>{item}</Typography>
            </StyledBox>
          );
        })}
        <ArrowForwardIosIcon sx={{ fontSize: "3em", p: 3 }} />
      </Stack>
    </div>
  );
}

export default LayoutOne;
