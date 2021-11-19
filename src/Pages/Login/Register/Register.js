import {
  Alert,
  Button,
  Container,
  Grid,
  LinearProgress,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import login from "../../../images/login.png";

const Register = () => {
  const { error, user, registerUser, isLoading } = useAuth();
  const [loginData, setLoginData] = useState({});
  const history = useHistory();
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    //copying all the objects with previous values
    const newLoginData = { ...loginData };

    // now setting the value to the field(name/password) key
    newLoginData[field] = value;

    // setting the newLoginData to the state

    console.log(newLoginData);
    setLoginData(newLoginData);
    console.log(field, value);
  };

  const handleLoginSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("Password didn't match!");
    }

    registerUser(loginData.email, loginData.password, loginData.name, history);
    e.preventDefault();
  };
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item sx={{ mt: 8 }} xs={12} md={6}>
          <Typography variant="body1" gutterBottom>
            Login
          </Typography>
          {!isLoading && (
            <form onSubmit={handleLoginSubmit}>
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Your Name"
                name="name"
                type="text"
                onBlur={handleOnBlur}
                variant="standard"
              />
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Your Email"
                name="email"
                type="email"
                onBlur={handleOnBlur}
                variant="standard"
              />
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Your Password"
                name="password"
                onBlur={handleOnBlur}
                type="password"
                variant="standard"
              />
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Retype Password"
                name="password2"
                onBlur={handleOnBlur}
                type="password"
                variant="standard"
              />

              <Button
                sx={{ width: "75%", m: 1 }}
                type="submit"
                variant="contained"
              >
                Register
              </Button>
              <NavLink style={{ textDecoration: "none" }} to="/login">
                <Button sx={{ width: "75%", m: 1 }} variant="text">
                  Already Registered ? Please Login
                </Button>
              </NavLink>
            </form>
          )}
          {isLoading && <LinearProgress />}
          {user?.email && (
            <Alert variant="filled" severity="success">
              Registration Successful
            </Alert>
          )}
          {error && (
            <Alert variant="filled" severity="error">
              {error}
            </Alert>
          )}
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{ width: "100%" }} src={login} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
