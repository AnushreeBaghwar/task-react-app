import React from "react";
import Navbar from "./components/Navbar/index.js";
import Layout from "./components/Layouts/index.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Signup from "./components/auth/Signup.js";
import * as firebase from "firebase/app";
import { getFirestore } from "firebase/firestore";
import config from "./firebase";

const app = firebase.initializeApp(config);
const db = getFirestore(app);
export { app, db };

function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route path="/signUp" component={Signup} />
          <Route path="/home" component={Layout} />
          {/* <Route exact path="/" component={Navbar} /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
