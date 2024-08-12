

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import EditNoteIcon from "@mui/icons-material/EditNote";
import Button from "@mui/material/Button";
import ReactPaginate from "react-paginate";
import Autocomplete from "@mui/material/Autocomplete";

const PAGE_SIZE = 5;

function Outward() {
  const [dateTime, setDateTime] = useState(new Date());
  const [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://mymilkapp.glitch.me/milkInward");
        if (!response.ok) throw new Error("Network response was not ok");
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const updateDateTime = () => {
    setDateTime(new Date());
  };

  useEffect(() => {
    const timerId = setInterval(updateDateTime, 1000);
    return () => clearInterval(timerId);
  }, []);

  const formattedDateTime = dateTime.toLocaleString("en-in", {
    weekday: "long",
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  // Separate data for cow and buffalo
  const cowData = data.filter(item => item.milk === "cow");
  const buffaloData = data.filter(item => item.milk === "buffalo");

  // Paginate cow and buffalo data
  const paginatedCowData = cowData.slice(
    currentPage * PAGE_SIZE,
    (currentPage + 1) * PAGE_SIZE
  );
  const paginatedBuffaloData = buffaloData.slice(
    currentPage * PAGE_SIZE,
    (currentPage + 1) * PAGE_SIZE
  );

   // Combine paginated data
   const combinedData = paginatedBuffaloData.concat(paginatedCowData);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  const startIndex = currentPage * PAGE_SIZE;

  return (
    <>
      <div className="sidebar">
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

      <div className="Tabel-box">
        <h2 className="Hadding">Outward</h2>
        <div className="container">
          <p>Date : Time :- {formattedDateTime}</p>

          <div className="outward-rate">
            <TextField variant="standard" label="Rate" type="text" />
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th rowSpan="2">S.No</th>
              <th rowSpan="2">Name</th>
              <th colSpan="2">Buffalo</th>
              <th colSpan="2">Cow</th>
              <th rowSpan="2" colSpan="2">Action</th>
            </tr>
            <tr>
              <th>Morning</th>
              <th>Evening</th>
              <th>Morning</th>
              <th>Evening</th>
            </tr>
          </thead>
          <tbody>
            {paginatedBuffaloData.concat(paginatedCowData).map((item ,index) => (
              <tr key={item.id}>
                <td>{ startIndex + index + 1}</td>
                <td>
                  <Autocomplete
                    freeSolo
                    sx={{ width: 200 }}
                    options={data.map(d => ({ label: d.fullName }))}
                    getOptionLabel={(option) => option.label || ""}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="standard"
                        InputProps={{
                          ...params.InputProps,
                          disableUnderline: true,
                        }}
                      />
                    )}
                  />
                </td>
                {item.milk === "buffalo" ? (
                  <>
                    <td>
                      <TextField
                        variant="standard"
                        sx={{ width: 100 }}
                        InputProps={{ disableUnderline: true }}
                        value={item.morning}
                      />
                    </td>
                    <td>
                      <TextField
                        variant="standard"
                        sx={{ width: 100 }}
                        InputProps={{ disableUnderline: true }}
                        value={item.evening}
                        
                      />
                    </td>
                    <td colSpan="2">-</td>
                  </>
                ) : (
                  <>
                    <td colSpan="2">-</td>
                    <td>
                      <TextField
                        variant="standard"
                        sx={{ width: 100 }}
                        InputProps={{ disableUnderline: true }}
                        value={item.morning}
                      />
                    </td>
                    <td>
                      <TextField
                        variant="standard"
                        sx={{ width: 100 }}
                        InputProps={{ disableUnderline: true }}
                        value={item.evening}
                      />
                    </td>
                  </>
                )}
                <td>
                  <DeleteSweepIcon />
                </td>
                <td>
                  <EditNoteIcon />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <ReactPaginate
          previousLabel={"<-"}
          nextLabel={"-> "}
          pageCount={Math.ceil(Math.max(cowData.length, buffaloData.length) / PAGE_SIZE)}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          breakClassName={"page-item"}
          breakLinkClassName={"page-link"}
          activeClassName={"active"}
        />

        <div className="outwad-save-btn">
          <Button variant="contained" color="success">
            Save
          </Button>
        </div>
      </div>
    </>
  );
}

export default Outward;
