import React from "react";
import Navbar from "./components/Navbar/index.js";
import Layout from "./components/Layouts/index.js";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import config from "./firebase";
import Signup from "./components/auth/Signup.js";
import * as firebase from "firebase/app";

firebase.initializeApp(config);

function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route path="/home" component={Layout} />
          <Route path="/">
            <Signup />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
