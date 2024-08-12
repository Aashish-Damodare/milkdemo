import React from "react";
import { Link } from "react-router-dom";


const 
Dashboard = () => {
  return (
    <>
      <center>
        <h1>Home</h1>
      </center>

      <div className="sidebar">
        <h2>Dashboard</h2>
        <ul>
          <li>User</li>
          <Link to="/inward"><li>Inward</li></Link>
          <Link to="/outward"><li>Outward</li></Link>
          
          <li>Payment</li>
          <li>Receipt</li>
          <li>Row Material Purpose</li>
          <li>Consumption</li>
          <li className="dropdown">
            Employee
            <ul className="dropdown-content">
              <Link to="/Group">
                <li>Account</li>
              </Link>

                
              <Link to="/Account">
              <li>Attendace</li>
              </Link>
              
              
              <li>Employee</li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Dashboard;
