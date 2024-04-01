import moment from "moment/moment";
import React, { useState, useEffect } from "react";
import { FaRegUser } from "react-icons/fa6";
import { SlOptions } from "react-icons/sl";
import io from "socket.io-client";
import styled from "styled-components";


const token = localStorage.getItem("token");
const socket = io("http://localhost:4000", {
  auth: {
    token: token,
  },
});

function Userone() {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState("");
  const [id, setUserId] = useState("");
  const [token, setToken] = useState("");
  const [users, setUsers] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [passsword, setPassword] = useState("");
  const [selectedUser, setSelectedUser] = useState(null); 
  const [selectedUserName, setSelectedUserName] = useState(""); // State to store the selected user's name
console.log("name",selectedUserName)
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
      setIsLoggedIn(true);
      fetchUsers(storedToken);
    }
  }, []);
  useEffect(() => {
    if (selectedUser) {
      fetchChatHistory(selectedUser);
      socket.emit("joinRoom", selectedUser); // Join room to receive new messages for selected user
    }
    socket.on("chatHistory", (data) => {
      setMessages(data.chatHistory);
    });
  
    return () => {
      if (selectedUser) {
        socket.emit("leaveRoom", selectedUser); // Leave room when component unmounts
      }
    };
  }, [selectedUser]);
  
  useEffect(() => {
    socket.on("newMessage", (data) => {
      if (data.senderId === selectedUser || data.receiver === selectedUser) {
        setMessages((prevMessages) => [...prevMessages, data]);
      }
    });

    return () => {
      socket.off("newMessage");
    };
  }, [selectedUser]);

  useEffect(() => {
    socket.on("newMessage", (data) => {
        if ((data.senderId === selectedUser && data.receiver === id) || (data.senderId === id && data.receiver === selectedUser)) {
            setMessages((prevMessages) => [...prevMessages, data]);
        }
    });

    return () => {
        socket.off("newMessage");
    };
}, [selectedUser, id]);

  const login = () => {
    fetch("http://localhost:4000/api/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username, passsword: passsword }),
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("token", data?.data?.token);
        setToken(data.token);
        setIsLoggedIn(true);
        setUserId(data?.data?.id);
        fetchUsers(data.token);
        fetchChatHistory(data?.data?.id);
      })
      .catch((error) => console.error("Login failed:", error));
  };

  const sendMessage = () => {
    if (!selectedUser) {
      alert("Please select a user to chat with");
      return;
    }
    if (!messageInput) {
      alert("Please enter a message to send");
      return;
    }

    socket.emit("sendMessage", {
      receiver: selectedUser,
      message: messageInput,
    });
    setMessageInput("");
    fetchChatHistory(selectedUser);

  };

  const startChat = (userId,userName) => {
    setSelectedUser(userId); // Set selected user
    fetchChatHistory(userId); // Fetch chat history for selected user
    setSelectedUserName(userName); 

  };

  
  const fetchChatHistory = (userId) => {
    socket.emit("getChatHistory", { userId: userId });
  };

  const fetchUsers = (token) => {
    fetch("http://localhost:4000/api/admin/users", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.users);
        console.log("datausers",data.users)
      })
      .catch((error) => console.error("Error fetching users:", error));
  };

  if (!isLoggedIn) {
    return (
      // <div>
      //   <h1>Login Page</h1>
      //   <input
      //     type="text"
      //     placeholder="Username"
      //     value={username}
      //     onChange={(e) => setUsername(e.target.value)}
      //   />
      //   <input
      //     type="password"
      //     placeholder="Password"
      //     value={passsword}
      //     onChange={(e) => setPassword(e.target.value)}
      //   />
      //   <button onClick={login}>Login</button>
      // </div>
      <div>
        { <LoginBuyer /> }
      </div>
    );
  }
  return (
    <Root>
      <div className="user_area">
        <h5>All Messages</h5>
        <ul>
          {users.map((user, index) => (
            <li key={index}>
              <button onClick={() => startChat(user.id, user.username)}>
                <FaRegUser />
                {user.username}
              </button>{" "}
              <SlOptions />
            </li>
          ))}
        </ul>
      </div>
      <div className="chat_area">
        <div className="heading_name">
          <h5>                <FaRegUser />
{selectedUserName ? `${selectedUserName}` : "Chat App"}
</h5>
<p><p>Last seen: 1 hour ago</p></p>

        </div>
        <div className="message-container">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.senderId === id ? "sent" : "received"}`}>
              <div className="msg_box">
                <strong className="user_name">
                  {message.senderId === id ? "You:" : message.sender}
                  <span className="timestamp">
                    
                  {moment(message.timestamp).format("MMMM DD, YY, h:mm A")}
                  </span>
                </strong>
                {message.message}
              </div>
            </div>
          ))}
        </div>
        <div className="input_button">
          <input
            type="text"
            placeholder="Send Message..."
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
          />
          <button className="offer_btn">Create an Offer</button>
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </Root>
  );
}
export default Userone;
const Root = styled.section`
  display: flex;
  width: 100vw;
  height: 70vh;
  margin-bottom: 10px;
  .user_area {
    overflow-y: auto;
    padding: 10px;
    width: 270px;
    min-width: 100px;
    ul {
      list-style: none;
      padding: 0px;
      li {
        display: flex;
        margin: 10px 0px;
        align-items: end;
        width: 100%;
        font-weight: 600;
        border-radius: 7px;
        padding: 7px;
        background-color: #dee2e675;
        color: #000000c7;
        justify-content: space-between;
        button {
          display: flex;
          border: 1px solid transparent;
          text-align: left;
          align-items: center;
          font-weight: 600;
          font-size: 14px;
          text-transform: capitalize;
          svg {
            margin-right: 7px;
            width: 40px;
            height: 40px;
            border-radius: 50px;
            border: 1px solid #000;
            padding: 5px;
          }
        }
      }
    }
  }

  .chat_area {
    margin: 10px 10px 10px 40px;
    width: 60vw;
    height: 70vh;
    border: 1px solid lightgray;
    border-radius: 20px;
    .heading_name {
      height: 80px;
      padding: 10px;
      border-bottom: 1px solid lightgray;
      font-family: "Playfair Display", serif;
  font-optical-sizing: auto;
  font-style: normal;
      &:hover {
        box-shadow: 0px 2px 2px 0px lightgray;
      }

      h5{
        font-size: 25px;
    gap: 7px;
    align-items: center;
    display: flex;
    margin: 0px;
    font-family: "Nunito Sans", sans-serif;
    }
      p{
        margin-left: 17px;
      }
    }
    .message-container {
      overflow-y: auto;
      height: 50vh;
      padding: 20px;

      .message {
        display: flex;
      }
      .msg_box {
        width: 80%;
        padding: 4px;
        background-color: #7db7f114;
        margin: 7px 0px;
        display: flex;
        flex-direction: column;
        border-left: 2px solid #70b5fb;
        text-transform: capitalize;
        border-radius: 5px;
        .user_name {
          font-size: 12px;
          color: #3a97f5;
          display: flex;
          align-items: center;
          justify-content: space-between;
          .timestamp {
            font-size: 11px;
          }
        }
      }
    }
    .input_button {
      position: relative;
      top: 1px;
      width: 80%;
      border: 1px solid lightgray;
      border-radius: 10px;
      display: flex;
      justify-content: space-between;
      padding: 10px;
      margin: 20px;
      margin-top: 5px;
      .offer_btn {
        color: #fff;
        background-color: black;
        border-radius: 10px;
        border: 1px solid black;
        padding: 6px;
        font-size: 13px;
      }
      input {
        border-radius: 10px;
        width: 60%;
        color: lightgray;
        outline: none;
        border: 1px solid #fff;
        margin-left: 3px;
      }
      button {
        border: none;
        font-weight: 600;
        color: #000;
        background-color: transparent;
      }
    }
  }
`;
