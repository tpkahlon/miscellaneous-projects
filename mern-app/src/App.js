import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Menu from "./components/menu.component"
import ExercisesList from "./components/exercises-list.component.js";
import EditExercise from "./components/edit-exercise.component.js";
import CreateExercise from "./components/create-exercise.component.js";
import CreateUser from "./components/create-user.component.js";

const App = () => {
  return (
    <Router>
      <Menu />
      <Route path="/" exact component={ExercisesList} />
      <Route path="/edit/:id" component={EditExercise} />
      <Route path="/create" component={CreateExercise} />
      <Route path="/user" component={CreateUser} />
    </Router>
  );
};

export default App;
