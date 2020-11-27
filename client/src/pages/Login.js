import React, { useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { loginUser } from "store/actions/user";
import logo from "assets/logo.png";

import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  mainbox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "90vh",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  registerBt: {
    color: "rgb(63,81,181)",
    textDecoration: "none",
  },
}));

export default function Login() {
  const classes = useStyles();

  const history = useHistory();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (e) => {
    const { value } = e.target;
    setEmail(value);
  };

  const onChangePassword = (e) => {
    const { value } = e.target;
    setPassword(value);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();

    let body = {
      email: email,
      password: password,
    };

    dispatch(loginUser(body)).then((response) => {
      if (response.payload.loginSuccess) {
        history.push("/");
      } else {
        alert("Error");
      }
    });
  };

  return (
    <Container className={classes.mainbox} component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Link to="/">
          <img
            style={{ width: "60px", height: "60px", marginBottom: "15px" }}
            src={logo}
            alt="LOGO"
          />
        </Link>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form className={classes.form} noValidate onSubmit={onSubmitForm}>
          <TextField
            type="email"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={onChangeEmail}
          />
          <TextField
            type="password"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="password"
            label="Password"
            name="password"
            autoComplete="current-password"
            value={password}
            onChange={onChangePassword}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Login
          </Button>
          <Grid container>
            <Grid item style={{ margin: "auto" }}>
              <Link className={classes.registerBt} to="/register" variant="body2">
                Don't have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
