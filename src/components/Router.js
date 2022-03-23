import React, { useState } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../routes/Home";
import Auth from "../routes/Auth";
import Profile from "../routes/Profile";
import EditProfile from "../routes/EditProfile";

const AppRouter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <Router>
      <Switch>
        {isLoggedIn ? (
          <>
            <Route>
              <Home exact path="/" />
            </Route>
            <Route>
              <Profile exact path="/profile" />
            </Route>
            <Route>
              <EditProfile exact path="/editprofile" />
            </Route>
          </>
        ) : (
          <Route>
            <Auth exact path="/" />
          </Route>
        )}
      </Switch>
    </Router>
  );
};

export default AppRouter;
