import React, { useState } from "react";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
const Signup = () => {
  const [otp, setOtp] = useState(0);
  const [num, setNum] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    // this.props.signUp(this.state);
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
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          console.log(response);
          // login();
        },
      },
      auth
    );

    const recaptchaVerifier = window.recaptchaVerifier;

    signInWithPhoneNumber(auth, number, recaptchaVerifier)
      .then(function (confirmationResult) {
        window.confirmationResult = confirmationResult;
      })
      .catch(function (error) {
        console.error("문자 전송 실패", error);
      });
  };

  const verify = () => {
    const confirmationResult = window.confirmationResult;
    confirmationResult
      .confirm(otp)
      .then((result) => {
        // User signed in successfully.
        const user = result.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        console.log("invalidOtp");
        // User couldn't sign in (bad verification code?)
        // ...
      });
  };
  return (
    <div style={{ marginTop: 250 }}>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className="input-field">
          <label htmlFor="mobile">Mobile</label>
          <input
            type="tel"
            onChange={(e) => {
              setNum(e.target.value);
            }}
          />
          <div id="sign-in-button"></div>
        </div>
        <div className="input-field">
          <button onClick={login} className="btn bg-orange lighten-1 z-depth-0">
            sign up
          </button>
        </div>
      </form>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className="input-field">
          <label htmlFor="mobile">otp</label>
          <input
            type="tel"
            onChange={(e) => {
              setOtp(e.target.value);
            }}
          />
          <div id="sign-in-button"></div>
        </div>
        <div className="input-field">
          <button
            onClick={verify}
            className="btn bg-orange lighten-1 z-depth-0"
          >
            verify
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
