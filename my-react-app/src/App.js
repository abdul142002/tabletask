import './App.css';
import React from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Create from './components/create';
import Update from './components/update';


function App() {
  return (
    <div className="App">
      <h1>Table Task</h1>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/create' element={<Create/>}/>
          <Route path='/update' element={<Update/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
