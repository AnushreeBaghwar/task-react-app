import React, { useState } from "react";
import { getAuth } from "firebase/auth";
import { TextField, Button, FormControl, Typography } from "@mui/material";
import { useContext } from "react";
import { AppStateContext } from "../../store/appContext";
import { login } from "../../helpers/user";
import { verifyUserWithOtp } from "../../helpers/user";
const Signin = () => {
  const [appstate, dispatch] =
    useContext(AppStateContext).globalStateAndDispatch;
  const [otp, setOtp] = useState(0);
  const [num, setNum] = useState(0);

  const auth = getAuth();
  auth.languageCode = "en";
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div style={{ marginTop: 100 }}>
      <center>
        <FormControl
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <Typography variant="h5">LOGIN</Typography>
          <TextField
            sx={{ width: "15rem" }}
            type="tel"
            onChange={(e) => {
              setNum(e.target.value);
            }}
            placeholder="Enter your 10 digit number"
            inputProps={{
              maxLength: 10,
            }}
          ></TextField>
          <br />
          <Button
            disabled={appstate.showOtpPanel}
            onClick={() => {
              login(num, dispatch);
            }}
            variant="contained"
          >
            Submit
          </Button>
        </FormControl>
        <br />
        <br />
        <div id="sign-in-button"></div>

        {appstate.showOtpPanel ? (
          <FormControl
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <Typography variant="h5">ENTER OTP</Typography>

            <TextField
              sx={{ width: "15rem" }}
              type="password"
              onChange={(e) => {
                setOtp(e.target.value);
              }}
              inputProps={{
                maxLength: 6,
              }}
            />
            <br />
            <Button
              variant="contained"
              onClick={() => {
                verifyUserWithOtp(otp, dispatch);
              }}
            >
              SUBMIT
            </Button>
          </FormControl>
        ) : (
          <></>
        )}
      </center>
    </div>
  );
};

export default Signin;
