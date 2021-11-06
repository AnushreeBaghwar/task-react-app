import * as React from "react";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import { styled } from "@mui/system";

function DirectionStack() {
  const StyledTypography = styled(Typography)(({ theme }) => ({
    fontFamily: "Prompt-Regular",
  }));
  const items = [
    "Home",
    "About",
    "Blogs",
    "List your property",
    "Contact Us",
    "Sign in",
  ];
  return (
    <div>
      <Stack sx={{ fontFamily: "Prompt-Regular" }} direction="row" spacing={3}>
        {items.map((item, ind) => {
          return <StyledTypography key={ind}>{item}</StyledTypography>;
        })}
      </Stack>
    </div>
  );
}
export default DirectionStack;
