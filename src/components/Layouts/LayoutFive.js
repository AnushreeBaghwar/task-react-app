import React from "react";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
function LayoutFive(props) {
  const StyledBox = styled(Box)(({ theme }) => ({
    width: "70rem",
    height: "10rem",
    p: 0,
    paddingTop: "5rem",
    paddingLeft: "none",
    paddingRight: "none",
    backgroundColor: "#f0f8ff",
    border: "1px solid #a7a7a7",
  }));
  return (
    <div>
      <Stack direction="row" sx={{ paddingTop: "8rem" }} spacing={0}>
        {Array.from(Array(4)).map((_, index) => (
          <StyledBox key={index} component="span"></StyledBox>
        ))}
      </Stack>
    </div>
  );
}

export default LayoutFive;
