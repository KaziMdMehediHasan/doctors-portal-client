import React, { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import {
  Alert,
  Button,
  Container,
  LinearProgress,
  TextField,
  Typography,
} from "@mui/material";
import login from "../../../images/login.png";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const { user, loginUser, isLoading, error, signInWithGoogle } = useAuth();
  const [loginData, setLoginData] = useState({});

  const location = useLocation();
  const history = useHistory();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    //copying all the objects with previous values
    const newLoginData = { ...loginData };

    // now setting the value to the field(name/password) key
    newLoginData[field] = value;

    // setting the newLoginData to the state
    setLoginData(newLoginData);
    console.log(field, value);
  };

  //email password login
  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, history);
    alert("Hello");
    e.preventDefault();
  };

  // google login

  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history);
  };
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item sx={{ mt: 8 }} xs={12} md={6}>
          <Typography variant="body1" gutterBottom>
            Login
          </Typography>
          <form onSubmit={handleLoginSubmit}>
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="Your Email"
              name="email"
              onBlur={handleOnChange}
              variant="standard"
            />
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="Your Password"
              name="password"
              onBlur={handleOnChange}
              type="password"
              variant="standard"
            />

            <Button
              sx={{ width: "75%", m: 1 }}
              type="submit"
              variant="contained"
            >
              Login
            </Button>
            <NavLink style={{ textDecoration: "none" }} to="/register">
              <Button sx={{ width: "75%", m: 1 }} variant="text">
                New User ? Register
              </Button>
            </NavLink>
            {isLoading && <LinearProgress />}
            {user?.email && (
              <Alert variant="filled" severity="success">
                Logged in Successfully!
              </Alert>
            )}
            {error && (
              <Alert variant="filled" severity="error">
                {error}
              </Alert>
            )}
          </form>
          <p>------------------------------</p>
          <Button
            onClick={handleGoogleSignIn}
            sx={{ width: "75%", m: 1 }}
            variant="contained"
          >
            Google Sign In
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{ width: "100%" }} src={login} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
