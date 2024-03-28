import React, { useState, useEffect } from "react";
import io from "socket.io-client";


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
  const [password, setPassword] = useState("");
  const [selectedUser, setSelectedUser] = useState(null); 

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
  
    // Clean up function
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
  const login = () => {
    fetch("http://localhost:4000/api/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username, password: password }),
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
  };

  const startChat = (userId) => {
    setSelectedUser(userId); // Set selected user
    fetchChatHistory(userId); // Fetch chat history for selected user
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
      <div>
        <h1>Login Page</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={login}>Login</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Chat App</h1>
      <div className="message-container">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.senderId === id ? "sent" : "received"}`}
          >
            <div>
              {message.senderId === id ? (
                <strong>You:</strong>
              ) : (
                <strong>{message.sender}:</strong>
              )}
              {message.message}
            </div>
          </div>
        ))}
      </div>
      <div>
        <h2>Users</h2>
        <ul>
          {users.map((user, index) => (
            <li key={index}>
              {user.username}{" "}
              <button onClick={() => startChat(user.id)}>Chat</button>{" "}
            </li>
          ))}
        </ul>
      </div>
      <input
        type="text"
        value={messageInput}
        onChange={(e) => setMessageInput(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default Userone;
