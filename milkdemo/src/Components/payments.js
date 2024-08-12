import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
function Payment() {
  const [dateTime, setDateTime] = useState(new Date());
  
  const updateDateTime = () => {
    setDateTime(new Date());
  };

  useEffect(() => {
    const timerId = setInterval(updateDateTime, 1000);
    return () => clearInterval(timerId); 
  }, []);

  const formattedDateTime = dateTime.toLocaleString("en-in", {
    weekday: "long",
    year: "numeric", // Full year (e.g., 2024)
    month: "numeric", // Full name of the month (e.g., August)
    day: "numeric", // Day of the month (e.g., 10)
  });

  return (
    <>
      <div className="sidebar">
        <h2>Dashboard</h2>
        <ul>
          
            <li>User</li>
          
          <Link to="/inward">
            <li>Inward</li>
          </Link>
          <Link to="/outward">
            <li>Outward</li>
          </Link>
          <Link to="/payment">
            <li>Payment</li>
          </Link>
          <li>Receipt</li>
          <li>Row Material Purpose</li>
          <li>Consumption</li>
          <li className="dropdown">
            Employee
            <ul className="dropdown-content">
              <li>Account</li>
              <li>Attendace</li>
              <li>Salery</li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="payment">
        <h1>Payment Form</h1>
        <form>
             <div className="voucher">
             <TextField id="#" label="voucher No" variant="standard" type="text" />
             </div>

             <div className="datetime">
             <p> Date:Time :- {formattedDateTime}</p> <br />
             </div> 
          <br />
          
          <div  className="fromcontrol">
          <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
            <InputLabel id="#">
              Select Account
            </InputLabel>
            <Select
              labelId="#"
              id="#"
              label="Select Account"
            >
              <MenuItem value="1">
                <em>None</em>
              </MenuItem>
              <MenuItem value="2">Account 1</MenuItem>
              <MenuItem value="3">Account 2</MenuItem>
              <MenuItem value="4">Account 3</MenuItem>
            </Select>
          </FormControl>
          
          </div>
          <br />
          <br />

          <div className="fromcontrol2">         
             <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
            <InputLabel id="#">
              Ledger Account
            </InputLabel>
            <Select
              labelId="#"
              id="#"
              label="Select Account"
            >
              <MenuItem value="1">
                <em>None</em>
              </MenuItem>
              <MenuItem value="2">Account 1</MenuItem>
              <MenuItem value="3">Account 2</MenuItem>
              <MenuItem value="4">Account 3</MenuItem>
            </Select>
          </FormControl>
          </div>

          <br />
          <br />
          <div className="Amount1">
          <TextField id="#" label=" Amount" variant="standard" />
          </div>
          <br />
          <br />
          <div className="Narration1">
          <TextField id="#" label="Narration" variant="standard" />
          </div>
          
          <br />
          <br />
          <div className="Save-edit">
          <Button variant="contained" color="success">
            Save
          </Button>
          </div>
          <div className="Save-edit1">
          <Button variant="contained" href="#contained-buttons">
            Edit
          </Button>
          </div>
        </form>
      </div>
    </>
  );
}
export default Payment;
