import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { IoEyeOffSharp, IoEyeSharp } from "react-icons/io5";
import axios from "axios";
import { toast } from "react-toastify";
import { EXCHANGE_URLS } from "../../Important/URLS";
import { useForm } from "react-hook-form";
import {
  sellerLoginAction,
  userCheckAction,
  userDataAction,
} from "../../../redux/users/action";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const schema = yup.object().shape({
  username: yup.string().required("Username is required."),
  password: yup
    .string()
    .required("Password is required.")
    .min(5, "Password should be at least 5 characters."),
  // .matches(
  //   /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/,
  //   "Password should contain at least one uppercase letter, lowercase letter, digit, and special symbol."
  // ),
});

const defaultTheme = createTheme();
export default function LoginSeller() {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post(`${EXCHANGE_URLS}/loginseller`, data);
      console.log("resres", res?.data?.data);
      if (res?.status === 200) {
        navigate("/dashboard");
        localStorage.setItem("token", res?.data?.data?.token);
        dispatch(userDataAction(res?.data?.data));
        dispatch(userCheckAction(true));
        toast.success("Login Successfully");
      }
    } catch (err) {
      console.log("err", err);
      toast.error("An error occurred during login");
    }
  };

  

  const {
    register,
    handleSubmit,
    formState: { errors } = {},
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <Root>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ThemeProvider theme={defaultTheme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 5,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography
                component="h1"
                variant="h5"
                style={{
                  fontWeight: "600",
                  textTransform: "uppercase",
                  color: "darkcyan",
                  fontSize: "18px",
                }}
              >
                Sign in as seller
              </Typography>
              <Box
                component="formm"
                // onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 3 }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      autoComplete="given-name"
                      name="username"
                      required
                      fullWidth
                      id="Name"
                      label="Name"
                      autoFocus
                      type="username"
                      {...register("username")}
                    />
                  </Grid>
                  {errors.username && (
                    <p
                      style={{
                        padding: "0px 20px",
                        color: "red",
                        fontSize: "10px",
                        margin: "0",
                      }}
                    >
                      {errors.username.message}
                    </p>
                  )}
                  <Grid
                    item
                    xs={12}
                    style={{ display: "flex", position: "relative" }}
                  >
                    <TextField
                      autoComplete="given-name"
                      name="Password"
                      required
                      fullWidth
                      id="Password"
                      label="Password"
                      autoFocus
                      type={showPassword ? "text" : "password"}
                      {...register("password")}
                    />
                    <button
                      className="btn"
                      onClick={() => {
                        togglePasswordVisibility();
                      }}
                      style={{
                        position: "absolute",
                        right: "0px",
                        top: "22px",
                      }}
                    >
                      {showPassword ? <IoEyeSharp /> : <IoEyeOffSharp />}
                    </button>
                  </Grid>
                  {errors.password && (
                    <p
                      style={{
                        padding: "0px 20px",
                        color: "red",
                        fontSize: "10px",
                        margin: "0",
                      }}
                    >
                      {errors.password.message}
                    </p>
                  )}{" "}
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 3,
                    mb: 2,
                    p: 1.5,
                    bgcolor: "#147888",
                    "&:hover": {
                      backgroundImage:
                        "linear-gradient(to bottom right, #147888, #1478883d, #147888)",
                    },
                  }}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="/" variant="body2" sx={{ color: "darkcyan" }}>
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link
                      href="/sellerregister"
                      variant="body2"
                      sx={{ color: "darkcyan" }}
                    >
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      </form>
    </Root>
  );
}
const Root = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(
    to bottom right,
    #147888,
    #1478883d,
    #147888
  );
  .css-1jy569b-MuiFormLabel-root-MuiInputLabel-root.Mui-focused {
    color: #17191a;
  }
  .css-md26zr-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused
    .MuiOutlinedInput-notchedOutline {
    border-color: #17191a;
    border-width: 2px;
  }
  form {
    border-radius: 10px;
    box-shadow: 0 7px 15px 0 rgb(0 0 0 / 53%), 0 1px 4px 0 rgb(0 0 0 / 29%);
    background-color: white;
    padding-bottom: 30px;
  }
`;
