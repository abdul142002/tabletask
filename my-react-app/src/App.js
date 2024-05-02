import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";
import "./App.css";
import Create from "./components/create";
import Edit from "./components/edit";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <h1 className="geeks">TABLE TASK </h1>
            <h3>CRUD App</h3>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/create"
                        element={<Create />}
                    />
                    <Route
                        path="/edit"
                        element={<Edit />}
                    />
                </Routes>
            </Router>
    </div>
  );
}

export default App;
