import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./Design/dashboard.css";

import "./Design/outward.css";
import "./Design/inward.css";
import "./Design/payment.css";
import Dashboard from "./Components/A_Dashboard";

import Outward from "./Components/Outward";
import Inward from "./Components/Inward";
import Payment from "./Components/payments";

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Dashboard/>}></Route>
          <Route path="/outward" element={<Outward/>} />
          <Route path="/inward" element={<Inward/>} />
          <Route path="/payment" element={<Payment/>} />
       </Routes>
    </Router>
  );
}

export default App;
