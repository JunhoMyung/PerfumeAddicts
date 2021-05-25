import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
//import "bulma/css/bulma.css";
import main from "./components/main";
import filter from "./components/filter";
import visual from "./components/visual";
import overlay from "./components/overlay";


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/filter" component = {filter} />
      <Route path="/visual" component = {visual} />
      <Route exact path="/" component = {main}/>
      <Route path="/overlay" component = {overlay} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);