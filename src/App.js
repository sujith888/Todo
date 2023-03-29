import React from "react";
import Todo from "./components/TodoApp/TodoApp";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<Todo />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};
export default App;
