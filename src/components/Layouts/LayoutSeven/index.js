import React from "react";
import { Stack } from "@mui/material";
import LayoutAddress from "./LayoutAddress";
import LayoutForm from "./LayoutForm";

function LayoutSeven(props) {
  return (
    <div className="layout-bg">
      <Stack direction="row" spacing={60} sx={{ p: 10 }}>
        <LayoutAddress />
        <LayoutForm />
      </Stack>
    </div>
  );
}

export default LayoutSeven;
