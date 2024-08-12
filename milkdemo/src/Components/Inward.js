import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";

function Inward() {
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

      <div className="milk-form-container">
        <form className="for">
          <h2><b>INWARD</b></h2>

          <div className="upper-container">
            <TextField
              id="#"
              label="S.No"
              variant="standard"
              type="text"
            />

            <p  className="inwar-voucher"> Date:Time :- {formattedDateTime}</p> <br />
           
            <TextField
              id="#"
              label="Rate"
              variant="standard"
              type="text"
             
            />
            <br />
          </div>

          <div className="inwad_Account">
            <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
              <InputLabel id="demo-simple-select-standard-label">
               Shift
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="#"
                label="Select Account"
              >
                <MenuItem value="1">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="2">Morning</MenuItem>
                <MenuItem value="3">Evening</MenuItem>
              </Select>
            </FormControl>

          </div>

          <div className="inwad-voucher">
            <TextField
              id="#"
              label="Name"
              variant="standard"
              type="text"
            />{" "}
          </div>

          <div className="inwad-AC">
            <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
              <InputLabel id="#">
                Type
              </InputLabel>
              <Select
                labelId="#"
                id="#"
                label="Select Account"
              >
                <MenuItem value="1">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="2">Baffelo</MenuItem>
                <MenuItem value="3">Cow</MenuItem>
              </Select>
            </FormControl>
          
            <div className="inwad-fat">
            <TextField
              id="#"
              label="Fat (%)"
              variant="standard"
              type="text"
            />
            </div>

            <div className="inwad-liters">
            <TextField
              id="#"
              label="Liters"
              variant="standard"
              type="text"
            />
            </div>
          </div>
          <div className="inwad-save">
          <Button variant="contained" href="#contained-buttons">
            Save
          </Button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Inward;
