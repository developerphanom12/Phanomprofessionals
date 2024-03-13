import React, { useState } from "react";
import { useForm } from "react-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { IoEyeOffSharp, IoEyeSharp } from "react-icons/io5";
import axios from "axios";
import { toast } from "react-toastify";
import { EXCHANGE_URLS } from "../../Important/URLS";

export default function LoginSeller() {
    const [val,setVal] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const schema = yup.object().shape({
    username: yup.string().required("Username is required."),
    password: yup.string().required("Password is required."),
  });
  const {
    register,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });


  const getLogin = async () => {
    try {
      const axiosConfig = {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };
      const res = await axios.post(
       `${EXCHANGE_URLS}/loginseller`,val,
        axiosConfig
      );
      if (res?.status === 200) {
        reset()
      }
    } catch (err) {
      toast.error(err,"Failed to fetch messages");
    }
  };


  const onSubmit = (data) => {
    getLogin(data);
  };

  return (
    <Root>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div>
            <label>User name or email address</label>
            <input type="username" {...register("username")} />
            {errors.username && <p>{errors.username.message}</p>}
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
               {errors.password && <p>{errors.password.message}</p>}
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
