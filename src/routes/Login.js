import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { loginStateChange } from "store/actions/user";
import logo from "img/logo.png";

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

  const dispatch = useDispatch();

  const onSubmitForm = (e) => {
    e.preventDefault();
  };
  const onClickLoginBt = () => {
    dispatch(loginStateChange());
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
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Link to="/" onClick={onClickLoginBt}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Login
            </Button>
          </Link>
          <Grid container>
            <Grid item style={{ margin: "auto" }}>
              <Link
                className={classes.registerBt}
                to="/register"
                variant="body2"
              >
                Don't have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
