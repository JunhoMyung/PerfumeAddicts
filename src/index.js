import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
//import "bulma/css/bulma.css";
import Main from "./components/main";
import Filter from "./components/filter";
import Visual from "./components/visual";
import Mypage from "./components/mypage";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/filter" component = {Filter} />
      <Route path="/visual" component = {Visual} />
      <Route exact path="/" component = {Main}/>
      <Route path="/mypage" component = {Mypage} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);