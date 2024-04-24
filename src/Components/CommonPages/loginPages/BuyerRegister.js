import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import styled from "styled-components";
import axios from "axios";
import { toast } from "react-toastify";
import { EXCHANGE_URLS_BUYER } from "../../Important/URLS";
import { useNavigate } from "react-router-dom";

const defaultTheme = createTheme();

export default function BuyerRegister() {
  const navigate = useNavigate();

  const [imagePreview, setImagePreview] = React.useState("");
  const [formData, setFormData] = React.useState({
    username: "",
    email: "",
    password: "",
    image: null,
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("image", formData.image);
    data.append("username", formData.username);
    data.append("email", formData.email);
    data.append("password", formData.password);
    try {
      const res = await axios.post(
        `${EXCHANGE_URLS_BUYER}/buyerRegister`,
        data
      );
      if (res?.status === 201) {
        navigate("/loginBuyer");
        toast.success("Buyer has been successfully registered");
      }
    } catch (err) {
      console.log("err", err);
      toast.error("An error occurred during registration");
    }
  };

  const handleImagePreview = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file });
      setImagePreview(URL.createObjectURL(file));
    } else {
      setFormData({ ...formData, image: "" });
      setImagePreview("");
    }
  };

  return (
    <Root>
      <form onSubmit={onSubmit}>
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
              <label htmlFor="image-input" style={{ textAlign: "center" }}>
                <Avatar
                  sx={{
                    m: 1,
                    bgcolor: "#ccc",
                    width: "160px",
                    height: "160px",
                  }}
                >
                  {imagePreview ? (
                    <img
                      src={imagePreview}
                      alt="Preview"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                  ) : (
                    ""
                  )}
                </Avatar>
                <input type="file" onChange={handleImagePreview} />
              </label>

              <Typography
                component="h1"
                variant="h5"
                style={{ color: "#008b8b", fontWeight: "600" }}
              >
                Sign up
              </Typography>
              <Box component="formm" noValidate sx={{ mt: 3 }}>
                <Grid container spacing={2} sx={{ marginBottom: "16px" }}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="given-name"
                      name="Name"
                      required
                      fullWidth
                      id="Name"
                      label="Name"
                      type="text"
                      autoFocus
                      value={formData?.username}
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          username: e.target.value,
                        });
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={formData?.email}
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          email: e.target.value,
                        });
                      }}
                    />
                  </Grid>
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
                    value={formData?.password}
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        password: e.target.value,
                      });
                    }}
                  />
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
                      href="/loginBuyer"
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
  padding: 60px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* / height: 100vh; / */
  svg {
    color: #fff;
    background: #ccc;
  }
  p {
    padding: 0px 20px;
    color: red;
    font-size: 10px;
    margin: 0;
  }
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
