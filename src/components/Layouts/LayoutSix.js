import React from "react";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import gpay from "./../imgs/gpay.png";
import istore from "./../imgs/istore.png";
import iphone from "./../imgs/iphone.png";

function LayoutSix(props) {
  const imgs = [gpay, istore];
  return (
    <div>
      <Stack direction="row" spacing={4}>
        <Stack direction="column" spacing={0}>
          <Typography
            sx={{
              textAlign: "justify",
              fontFamily: "Palanquin Dark",
              paddingTop: "5rem",
            }}
            variant="h5"
          >
            Get the <br />
            QuickStay App <br />
          </Typography>
          <Typography variant="h6" sx={{ textAlign: "justify" }}>
            Download the QuickStay
            <br />
            App and get everything done!
            <br />
            From booking online to <br />
            getting every update,
            <br />
            make your life easier!
          </Typography>
        </Stack>
        <Stack direction="column" sx={{ p: 15 }} spacing={0}>
          {imgs.map((img, ind) => {
            return <img key={ind} src={imgs[ind]} alt="" width="200rem" />;
          })}
        </Stack>
        <img
          src={iphone}
          alt=""
          width="200rem"
          height="320rem"
          style={{ padding: "4rem" }}
        />
      </Stack>
    </div>
  );
}

export default LayoutSix;
