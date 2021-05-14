import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bulma/css/bulma.css";
import main from "./components/main";
import music from "./components/music";
import filter from "./components/filter";
import visual from "./components/visual";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/music" component = {music} />
      <Route path="/filter" component = {filter} />
      <Route path="/visual" component = {visual} />
      <Route exact path="/" component = {main}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);