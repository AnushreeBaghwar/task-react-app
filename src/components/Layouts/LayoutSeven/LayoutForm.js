import React from "react";
import { styled } from "@mui/material/styles";
import { Button, FormControl, Stack, Typography } from "@mui/material";

function LayoutForm(props) {
  const StyledInputElement = styled("input")`
    width: 15rem;
    height: 1rem;
    font-size: 1rem;
    font-family: IBM Plex Sans, sans-serif;
    font-weight: 400;
    line-height: 1.4375em;
    background: "#fff";
    border: 1px solid #e5e8ec;
    padding: 6px 10px;
    color: #20262d;
    transition: width 300ms ease;
  `;
  return (
    <div>
      <Stack direction="column">
        <Typography variant="h5" sx={{ color: "#fff", textAlign: "center" }}>
          Contact Us
        </Typography>
        <FormControl sx={{ alignItems: "center" }}>
          <StyledInputElement placeholder="Name"></StyledInputElement>
          <br />
          <StyledInputElement placeholder="Phone"></StyledInputElement>
          <br />
          <StyledInputElement placeholder="Email"></StyledInputElement>
          <br />
          <StyledInputElement placeholder="Message"></StyledInputElement>
          <Button
            sx={{
              background: "#a50000",
              color: "#fff",
              width: "5rem",
              m: 2,
              borderRadius: "10px",
            }}
          >
            Submit
          </Button>
        </FormControl>
      </Stack>
    </div>
  );
}

export default LayoutForm;
