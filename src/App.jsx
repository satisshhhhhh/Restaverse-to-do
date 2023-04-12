import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Incomplete from "./components/Incomplete";
import Completed from "./components/Completed";
import Navbar from "./components/NAvbar";
import "./styles/Navbar.css";

const App = () => {
  const [todos, setTodos] = useState([]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Incomplete todos={todos} setTodos={setTodos} />}
        />
        <Route
          path="/completed"
          element={<Completed todos={todos} setTodos={setTodos} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
