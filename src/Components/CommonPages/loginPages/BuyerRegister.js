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
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import axios from "axios";
import { toast } from "react-toastify";
import { FaPlus } from "react-icons/fa6";
import { EXCHANGE_URLS_BUYER } from "../../Important/URLS";

const schema = yup.object().shape({
  username: yup.string().required("Username is required."),
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email address"),
  password: yup
    .string()
    .required("Password is required.")
    .min(5, "Password should be at least 5 characters."),
});

const defaultTheme = createTheme();

export default function BuyerRegister() {
  const [imagePreview, setImagePreview] = React.useState("");
  const {
    register,
    handleSubmit,
    formState: { errors } = {},
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);
    formData.append("username", data.username);
    formData.append("email", data.email);
    formData.append("password", data.password);

    try {
      const res = await axios.post(
        `${EXCHANGE_URLS_BUYER}/buyerRegister`,
        formData
      );
      if (res?.status === 201) {
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
      // setFormData({ ...formData, image: file });
      setImagePreview(URL.createObjectURL(file));
    } else {
      // setFormData({ ...formData, image: "" });
      setImagePreview("");
    }
  };

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
              <label htmlFor="image-input">
                <Avatar
                  sx={{
                    m: 1,
                    bgcolor: "#ccc",
                    width: "60px",
                    height: "60px",
                  }}
                >
                  {imagePreview ? (
                    <img
                      src={imagePreview}
                      alt="Preview"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    <FaPlus />
                  )}
                </Avatar>
                <input
                  id="image-input"
                  type="file"
                  onChange={handleImagePreview}
                  accept="image/*"
                  {...register("image", { required: true })}
                  style={{ display: "none" }}
                />
              </label>
              {errors.image && (
                <Typography variant="caption" color="error">
                  Image is required
                </Typography>
              )}
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
                      {...register("username")}
                    />
                  </Grid>
                  {errors.username && <p>{errors.username.message}</p>}
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      type="email"
                      autoComplete="email"
                      {...register("email")}
                    />
                  </Grid>
                  {errors.email && <p>{errors.email.message}</p>}
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
                    {...register("password")}
                  />
                </Grid>
                {errors.password && <p>{errors.password.message}</p>}

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
