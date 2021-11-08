import {
  getAuth,
  onAuthStateChanged,
  signOut,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
export const saveUser = async (data) => {
  await setDoc(doc(db, "users", data.uid), data)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const checkAuth = (dispatch) => {
  const auth = getAuth();
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      dispatch({
        type: "SET_USER",
        value: user,
      });
    } else {
      console.log("Not login");
    }
  });
};

export const logout = (dispatch) => {
  const auth = getAuth();

  signOut(auth)
    .then(() => {
      dispatch({
        type: "SET_USER",
        value: null,
      });
      alert("logged out successfully");
    })
    .catch((error) => {
      console.log(error);
    });
};

export const login = (num, dispatch) => {
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
      dispatch({
        type: "SHOW_OTP_PANEL",
        value: true,
      });
    })
    .catch(function (error) {
      console.error(error);
    });
};

export const verifyUserWithOtp = (otp, dispatch) => {
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
      alert("signed in successfully");
    })
    .catch((error) => {
      console.log(error);
    });
};
