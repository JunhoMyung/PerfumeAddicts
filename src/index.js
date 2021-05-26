import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
//import "bulma/css/bulma.css";
import main from "./components/main";
import filter from "./components/filter";
import visual from "./components/visual";
import mypage from "./components/mypage";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/filter" component = {filter} />
      <Route path="/visual" component = {visual} />
      <Route exact path="/" component = {main}/>
      <Route path="/mypage" component = {mypage} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);