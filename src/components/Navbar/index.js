import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import DirectionStack from "./DirectionStack";
import CustomInput from "./CustomInput";
import NavbarIcon from "./NavbarIcon";
const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: "flex-start",
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
  backgroundColor: "#ad0000",
  // Override media queries injected by theme.mixins.toolbar
  "@media all": {
    minHeight: 128,
  },
}));

function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <StyledToolbar>
          <NavbarIcon />
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              alignSelf: "flex-end",
              fontFamily: "Prompt-Regular",
            }}
          >
            LET US FIND YOU A COZY HOMESTAY.
            <CustomInput
              aria-label="Demo input"
              placeholder="Search a homestay nearby..."
            />
          </Typography>
          <DirectionStack />
        </StyledToolbar>
      </AppBar>
    </Box>
  );
}
export default Navbar;
