import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Menu from "./components/menu.component"
import CooksList from "./components/cooks-list.component.js";
import EditCook from "./components/edit-cook.component.js";
import CreateCook from "./components/create-cook.component.js";

const App = () => {
  return (
    <Router>
      <Menu />
      <Route path="/" exact component={CooksList} />
      <Route path="/edit/:id" component={EditCook} />
      <Route path="/create" component={CreateCook} />
    </Router>
  );
};

export default App;
