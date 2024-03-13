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
  username: yup
    .string()
    .required("Username is required."),
  password: yup
    .string()
    .required("Password is required.")
    .min(5, "Password should be at least 5 characters.")
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


  const  onSubmit = async (data) => {
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
        <div>
          <div>
            <label>User name or email address</label>
            <input type="username"
             {...register("username")}
              />
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
          <div>
          <button type="submit">Login</button>
          </div>
        </div>
      </form>
    </Root>
  );
}
const Root = styled.section`
  margin: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  input,
  button {
    padding: 10px;
    margin: 10px;
    width: 100%;
  }
`;
