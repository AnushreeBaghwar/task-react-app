import React, { useState, useEffect } from "react";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { TextField, Button, FormControl, Typography } from "@mui/material";
import { db } from "../../App";

const Signup = () => {
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
        // alert("signed in successfully");
        // console.log(user.phoneNumber);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const saveUser = async (data) => {
    await addDoc(collection(db, "users"), data)
      .then((res) => {
        console.log(res);
        alert("done");
      })
      .catch((err) => {
        console.log(err);
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
            type="number"
            onChange={(e) => {
              setNum(e.target.value);
            }}
            placeholder="Enter your 10 digit number"
          ></TextField>
          <br />
          <Button onClick={login} variant="contained">
            Submit
          </Button>
        </FormControl>
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
              type="number"
              onChange={(e) => {
                setOtp(e.target.value);
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

export default Signup;
