import React, { useContext } from "react";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";
import { AppStateContext } from "../../store/appContext";
import { logout } from "../../helpers/user";

function DirectionStack() {
  const [appstate, dispatch] =
    useContext(AppStateContext).globalStateAndDispatch;

  const StyledTypography = styled(Typography)(({ theme }) => ({
    fontFamily: "Prompt-Regular",
    color: "#fff",
  }));
  return (
    <div>
      <Stack sx={{ fontFamily: "Prompt-Regular" }} direction="row" spacing={3}>
        <Link style={{ textDecoration: "none" }} to="/home">
          <StyledTypography>Home</StyledTypography>
        </Link>
        <StyledTypography>About</StyledTypography>
        <StyledTypography>Blogs</StyledTypography>
        <StyledTypography>List your property</StyledTypography>
        <StyledTypography>Contact Us</StyledTypography>
        {!appstate.user ? (
          <Link to="/Signin" style={{ textDecoration: "none" }}>
            <StyledTypography>Sign in</StyledTypography>
          </Link>
        ) : (
          <StyledTypography
            onClick={() => {
              logout(dispatch);
            }}
          >
            Sign Out ({appstate.user.phoneNumber})
          </StyledTypography>
        )}
      </Stack>
    </div>
  );
}
export default DirectionStack;
