import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'

import Dashboard from "./Pages/Dashboard"
import Tracker from "./Pages/Tracker"
import Login from "./Pages/Login";
import Register from "./Pages/Register";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Tracker" element={<Tracker />} />
      </Routes>
    </Router>
  )
}

export default App
