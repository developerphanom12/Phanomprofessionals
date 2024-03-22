import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";

export default function Message() {
  const [message, setMessage] = useState();

  const getChat = async () => {
    try {
      const axiosConfig = {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };
      const res = await axios.get(
        // `${EXCHANGE_URLS_UNIVERSITY}/allstaffget`,
        axiosConfig
      );
      if (res?.status === 200) {
        setMessage(res?.data?.data);
      }
    } catch (err) {
      toast.error("Failed to fetch messages");
    }
  };

  useEffect(() => {
    getChat();
  }, []);
  return (
    <Root>
      <div className="main_msg_div">
        <div className="side_msg_div">
          <h3>NO Conversations</h3>
        </div>
        <div className="box_msg_div">
          <h2>No Message Now Start a New Chat</h2>
        </div>
      </div>
    </Root>
  );
}
const Root = styled.section`
  background-color: #fff;
  box-sizing: border-box;
  height: 100%;
  .main_msg_div {
    padding: 32px 24px;
    display: flex;
    gap: 12px;
    width: 100%;
    .side_msg_div {
      border: 1px solid #e4e5e7;
      border-radius: 12px;
      padding: 24px;
    }
    .box_msg_div {
      border: 1px solid #e4e5e7;
      border-radius: 12px;
      padding: 24px;
    }
  }
`;
