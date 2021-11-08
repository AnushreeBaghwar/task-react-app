import * as React from "react";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import { styled } from "@mui/system";
import { BrowserRouter, Link } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

function DirectionStack() {
  const auth = getAuth();
  const [showSignIn, setShowSignIn] = React.useState(true);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setShowSignIn(false);
    } else {
      setShowSignIn(true);
    }
  });
  const logout = () => {
    signOut(auth)
      .then(() => {
        alert("logged out successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };
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
        {showSignIn ? (
          <BrowserRouter>
            <Link to="/Signin" style={{ textDecoration: "none" }}>
              <StyledTypography>Sign in</StyledTypography>
            </Link>
          </BrowserRouter>
        ) : (
          <StyledTypography hoverable onClick={logout}>
            Sign Out
          </StyledTypography>
        )}
      </Stack>
    </div>
  );
}
export default DirectionStack;
