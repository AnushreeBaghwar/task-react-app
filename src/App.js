import React from "react";
import Navbar from "./components/Navbar/index.js";
import Layout from "./components/Layouts/index.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Signin from "./components/auth/Signin.js";
import * as firebase from "firebase/app";
import { getFirestore } from "firebase/firestore";
import config from "./firebase";
import SignUp from "./components/auth/SignUp.js";
const app = firebase.initializeApp(config);
const db = getFirestore(app);
export { app, db };

function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route path="/signin" component={Signin} />
          <Route path="/home" component={Layout} />
          <Route path="/SignUp" component={SignUp} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
