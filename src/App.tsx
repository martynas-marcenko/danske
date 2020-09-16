import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Landing from "./pages/Landing";
import ThankYouPage from "./pages/ThankYouPage";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Landing />
          </Route>
          <Route path="/thankyou" exact>
            <ThankYouPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
