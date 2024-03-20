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
import { userCheckAction, userDataAction } from "../../../redux/users/action";

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
        navigate("/innerpages");
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
        <div>
          <div className="user_name">
            <label>User name or email address</label>
            <input type="username" {...register("username")} />
            {errors.email && <p>{errors.email.message}</p>}
          </div>
          <div>
            <label>Password</label>
            <div className="pswrd">
              <input
                type={showPassword ? "text" : "password"}
                {...register("password")}
              />
              <button className="btn" onClick={togglePasswordVisibility}>
                {showPassword ? <IoEyeSharp /> : <IoEyeOffSharp />}
              </button>
              {errors.password && <p>{errors.password.message}</p>}{" "}
            </div>
          </div>
          <div className="login">
            <button type="submit">Login</button>
          </div>
        </div>
      </form>
    </Root>
  );
}
const Root = styled.section`
  margin: 20px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid transparent;
  width: 100%;
  form {
    display: flex;
    flex-direction: column;
    width: 40vw;
    border-radius: 20px;
    box-shadow: 0 7px 15px 0 rgba(0, 0, 0, 0.13),
      0 1px 4px 0 rgba(0, 0, 0, 0.11);
    padding: 50px 50px;
    input {
      border: 1px solid #c9c0c0;
    }

    label {
      margin-left: 10px;
    }

    .user_name {
      display: flex;
      flex-direction: column;
      margin-bottom: 15px;
    }
    .pswrd {
      input {
        width: 95%;
      }
      button.btn {
        margin-left: -47px;
      }
      p {
        font-size: 14px;
        margin-left: 10px;
      }
    }

    .login button {
      padding: 8px 60px;
      margin-top: 22px;
      border: 1px solid #c9c0c0;
    }
  }
  input,
  button {
    padding: 10px;
    margin: 10px;
    border-radius: 10px;
  }

  /* .main_div{
  display:flex;
  justify-content: center;
} */
`;
