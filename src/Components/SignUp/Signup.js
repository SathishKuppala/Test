import React, { useState } from "react";
import "./signup.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const [details, setDetails] = useState({});
  const [err, setErr] = useState(false);
  let navigate = useNavigate();

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (
      details !== null &&
      details.first &&
      details.last &&
      details.email &&
      details.password &&
      details.number
    ) {
      console.log("All", details, details.first);
      navigate(`signin`);
    } else {
      setErr(true);
      console.log("No", details);
    }
  };
  return (
    <div className="signup">
      <div className="signupNav">
        <img
          src="https://images.pexels.com/photos/1203777/pexels-photo-1203777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        ></img>
        <p style={{ color: "white" }}>Sign Up</p>
      </div>
      {err && (
        <p style={{ textAlign: "center", color: "red", marginTop: "20px" }}>
          Please Enter Following Fields
        </p>
      )}
      <div className="signupform">
        <Box
          sx={{
            width: 500,
            maxWidth: "100%",
          }}
        >
          <TextField
            fullWidth
            label="First Name"
            id="First Name"
            className="my-2"
            name="first"
            onChange={handleChange}
          />
          <TextField
            fullWidth
            label="Last Name"
            id="Last Name"
            className="my-3"
            name="last"
            onChange={handleChange}
          />

          <TextField
            fullWidth
            label="Email Address"
            id="Email Address"
            className="my-3"
            name="email"
            onChange={handleChange}
          />

          <TextField
            fullWidth
            label="Password"
            id="Password"
            className="my-3"
            name="password"
            onChange={handleChange}
          />

          <TextField
            fullWidth
            label="Change Number"
            id="Change Number"
            className="my-3"
            name="number"
            onChange={handleChange}
          />

          <div className="btnSignUp">
            <Stack direction="row" spacing={2}>
              <Button variant="contained" color="error">
                Cancel
              </Button>
              <Link to="signin">
                <Button
                  variant="contained"
                  color="success"
                  onClick={handleSignup}
                >
                  Sign Up
                </Button>
              </Link>
            </Stack>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default Signup;
