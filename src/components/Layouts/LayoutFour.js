import React from "react";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
function LayoutFour(props) {
  const StyledBox = styled(Box)(({ theme }) => ({
    width: "70rem",
    height: "10rem",
    p: 5,
    paddingTop: "5rem",
    border: "1px solid #a7a7a7",
    textAlign: "center",
    justifyContent: "center",
    fontFamily: "Prompt-Regular",
  }));
  const reviews = [
    "Best place to stay",
    "Good service",
    "Nice environment",
    "Affordable and best",
  ];

  return (
    <div>
      <Stack direction="row" sx={{ paddingTop: "8rem" }} spacing={0}>
        <Typography
          sx={{ textAlign: "center", fontFamily: "Palanquin Dark", p: 3 }}
          variant="h5"
        >
          USER
          <br />
          Experience
        </Typography>

        {reviews.map((item, ind) => {
          return (
            <StyledBox key={ind} component="span">
              <Typography>{item}</Typography>
            </StyledBox>
          );
        })}
        <ArrowForwardIosIcon sx={{ fontSize: "3em", p: 3 }} />
      </Stack>
    </div>
  );
}

export default LayoutFour;
