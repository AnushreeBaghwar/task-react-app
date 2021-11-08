import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
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
