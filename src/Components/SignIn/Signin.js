import React, { useState } from "react";
import "./signin.css";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useContext } from "react";
import { userContext } from "../../App";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Signin = () => {
  const name = useContext(userContext);
  const [error, setError] = useState(false);
  const [email, setEmail] = useState(null);

  const [pass, setPass] = useState(null);
  let navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email !== null || pass !== null) {
      navigate(`/login`);
    } else {
      setError(true);
    }
  };

  return (
    <>
      <Navbar />
      <div className="signinContainer container mt-5">
        <div className="signin">
          <div className="signleft .container-sm">
            <img
              className=""
              src="https://images.pexels.com/photos/12346579/pexels-photo-12346579.jpeg"
              alt=""
            />
            <p>Celebrating Life</p>
          </div>
          <div className="signright">
            <h1 className="text-center">SIGN IN</h1>
            {error && (
              <p style={{ color: "red" }}>
                Please enter Email and Password Details
              </p>
            )}
            <Box
              sx={{
                width: 300,
                maxWidth: "100%",
              }}
            >
              <TextField
                fullWidth
                label="Email Address"
                id="Email Address"
                className="my-2"
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                fullWidth
                label="Password"
                id="Password"
                className="my-3"
                onChange={(e) => setPass(e.target.value)}
              />
              <p className="my-2" style={{ float: "right", color: "blue" }}>
                Forgot Password?
              </p>
              <p className="my-2" style={{ fontSize: "10px" }}>
                These terms and conditions outline the rules and regulations
              </p>
              <Stack
                direction="row"
                spacing={2}
                className="d-flex justify-content-center my-3"
              >
                <Button variant="outlined" onClick={handleLogin}>
                  SIGN IN
                </Button>
              </Stack>
            </Box>
            <Stack direction="row" spacing={2}>
              <Button variant="outlined">Create Account</Button>
              <Link to="/">
                <Button variant="outlined">SIGN UP FOR FREE</Button>
              </Link>
            </Stack>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
