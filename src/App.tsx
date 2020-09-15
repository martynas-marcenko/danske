import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import { Section } from "./components/Layout";
import Calculator from "./components/Calculator/calculator";
import ThankYouPage from "./Pages/ThankYouPage";

const First = styled.div`
  display: flex;
`;

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Calculator />
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
