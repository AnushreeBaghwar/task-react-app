import * as React from "react";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import { styled } from "@mui/system";
import { BrowserRouter, Link } from "react-router-dom";
function DirectionStack() {
  const StyledTypography = styled(Typography)(({ theme }) => ({
    fontFamily: "Prompt-Regular",
    color: "#fff",
  }));
  return (
    <div>
      <Stack sx={{ fontFamily: "Prompt-Regular" }} direction="row" spacing={3}>
        <BrowserRouter>
          <Link style={{ textDecoration: "none" }} to="/home">
            <StyledTypography>Home</StyledTypography>
          </Link>
        </BrowserRouter>
        <StyledTypography>About</StyledTypography>
        <StyledTypography>Blogs</StyledTypography>
        <StyledTypography>List your property</StyledTypography>
        <StyledTypography>Contact Us</StyledTypography>
        <BrowserRouter>
          <Link to="/Signup" style={{ textDecoration: "none" }}>
            <StyledTypography>Sign in</StyledTypography>
          </Link>
        </BrowserRouter>
      </Stack>
    </div>
  );
}
export default DirectionStack;
