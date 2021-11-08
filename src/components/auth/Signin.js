import React, { useState } from "react";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { TextField, Button, FormControl, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { saveUser } from "../../helpers/user";
import { useContext } from "react";
import { AppStateContext } from "../../store/appContext";

const Signin = () => {
  const dispatch = useContext(AppStateContext).globalStateAndDispatch[1];
  const [otp, setOtp] = useState(0);
  const [num, setNum] = useState(0);
  const [showOtpPanel, setShowOtpPanel] = useState(false);

  const auth = getAuth();
  auth.languageCode = "en";
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const login = () => {
    var number = "+91" + num;
    const auth = getAuth();
    auth.languageCode = "en";
    window.recaptchaVerifier = new RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: (response) => {
          console.log(response);
        },
      },
      auth
    );

    const recaptchaVerifier = window.recaptchaVerifier;

    signInWithPhoneNumber(auth, number, recaptchaVerifier)
      .then(function (confirmationResult) {
        window.confirmationResult = confirmationResult;
        alert("A 6-digit otp has been sent to your mobile number");
        setShowOtpPanel(true);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  const verifyUserWithOtp = () => {
    const confirmationResult = window.confirmationResult;
    const code = otp;
    confirmationResult
      .confirm(code)
      .then((result) => {
        const user = result.user;
        const userDetails = {
          uid: user.uid,
          phoneNumber: user.phoneNumber,
        };
        saveUser(userDetails);
        dispatch({
          type: "SET_USER",
          value: userDetails,
        });

        // alert("signed in successfully");
        // console.log(user.phoneNumber);
      })
      .catch((error) => {
        console.log(error);
      });
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
          <Button disabled={showOtpPanel} onClick={login} variant="contained">
            Submit
          </Button>
        </FormControl>
        <br />
        <br />
        <Typography>
          New to QuickStay? <Link to="/SignUp">Sign Up</Link>
        </Typography>
        <div id="sign-in-button"></div>

        {showOtpPanel ? (
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
            <Button variant="contained" onClick={verifyUserWithOtp}>
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
