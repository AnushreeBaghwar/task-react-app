import React, { useContext, useEffect } from "react";
import Navbar from "./components/Navbar/index.js";
import Layout from "./components/Layouts/index.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Signin from "./components/auth/Signin.js";
import "./firebase";
import SignUp from "./components/auth/Signup.js";
import { AppStateContext } from "./store/appContext";
import { checkAuth } from "./helpers/user.js";

function App() {
  const dispatch = useContext(AppStateContext).globalStateAndDispatch[1];

  const wm = () => <h1>Welcome</h1>;
  useEffect(() => {
    checkAuth(dispatch);
  }, [dispatch]);
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={wm} />
          <Route path="/signin" component={Signin} />
          <Route path="/home" component={Layout} />
          <Route path="/SignUp" component={SignUp} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
