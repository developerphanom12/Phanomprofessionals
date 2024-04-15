import * as React from "react";
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
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import styled from "styled-components";
import axios from "axios";
import { EXCHANGE_URLS } from "../../Important/URLS";
import { toast } from "react-toastify";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-form";
import { useNavigate } from "react-router-dom";

const schema = yup.object().shape({
  name: yup.string().required("Name is required."),
  // phone_number: yup.string.required("Phone Number is required"),
  // email: yup.string.email.required("Email is required"),
  // city: yup.string.required("city is required"),
  // education: yup.string.required("education is required"),
  // skills: yup.string.required("skill is required"),
  // password: yup
  //   .string()
  //   .required("Password is required.")
  //   .min(5, "Password should be at least 5 characters.")
  //   .matches(
  //     /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/,
  //     "Password should contain at least one uppercase letter, lowercase letter, digit, and special symbol."
  //   ),
});

const defaultTheme = createTheme();

export default function SellerRegister() {
  const [skills, setSkills] = React.useState("");

  const handleChange = (event) => {
    setSkills(event.target.value);
  };
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await schema.validate(data, { abortEarly: false });
      const res = await axios.post(`${EXCHANGE_URLS}/loginseller`, data);
      console.log("resres", res?.data?.data);
      if (res?.status === 200) {
        navigate("/loginseller");
        toast.success("Registered Successfully");
      }
    } catch (err) {
      console.log("err", err);
      toast.error("An error occurred during Register");
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
                style={{ color: "#008b8b", fontWeight: "600" }}
              >
                Sign up
              </Typography>
              <Box
                component="formm"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 3 }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="given-name"
                      name="Name"
                      required
                      fullWidth
                      id="Name"
                      label="Name"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="Phone Number"
                      label="Phone Number"
                      name="phoneNumber"
                      autoComplete="family-name"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="given-name"
                      name="City"
                      required
                      fullWidth
                      id="City"
                      label="City"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="Education"
                      label="Education"
                      name="education"
                      autoComplete="family-name"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl sx={{ m: 0, minWidth: 80, width: "100%" }}>
                      <InputLabel id="skills-label">Skills *</InputLabel>
                      <Select
                        label="Skills"
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={skills}
                        onChange={handleChange}
                      >
                        <MenuItem value="AI Services">AI Services</MenuItem>
                        <MenuItem value="Branding">Branding</MenuItem>
                        <MenuItem value="Business">
                          Business Management
                        </MenuItem>
                        <MenuItem value="Digital Marketing">
                          Digital Marketing
                        </MenuItem>
                        <MenuItem value="Graphic & Designing">
                          Graphic & Designing
                        </MenuItem>
                        <MenuItem value="Programming & Tech">
                          Programming & Tech
                        </MenuItem>
                        <MenuItem value="Video & Animation">
                          Video & Animation
                        </MenuItem>
                        <MenuItem value="Video & Animation">
                          Writing & Translation
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
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
                  Sign Up
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link
                      href="loginseller"
                      variant="body2"
                      sx={{ color: "darkcyan" }}
                    >
                      Already have an account? Sign in
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
  padding: 40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* height: 100vh; */
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
