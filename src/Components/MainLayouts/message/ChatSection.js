// import React, { useState, useEffect } from "react";
// import io from "socket.io-client";
// // import "./App.css";

// const token = localStorage.getItem("token");
// const socket = io("http://localhost:4000", {
//   auth: {
//     token: token,
//   },
// });

// function ChatSection() {
//   const [messages, setMessages] = useState([]);
//   const [messageInput, setMessageInput] = useState("");
//   const [id, setUserId] = useState("");
//   const [token, setToken] = useState("");
//   const [users, setUsers] = useState([]);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [selectedUser, setSelectedUser] = useState(''); // Track selected user

//   useEffect(() => {
//     const storedToken = localStorage.getItem("token");
//     if (storedToken) {
//       setToken(storedToken);
//       setIsLoggedIn(true);
//       fetchUsers(storedToken);
//     }
//   }, [selectedUser,messages]);

//   useEffect(() => {
//     socket.on("newMessage", (data) => {
//       if (
//         (data.senderId === selectedUser && data.receiver === id) ||
//         (data.senderId === id && data.receiver === selectedUser)
//       ) {
//         setMessages((prevMessages) => [...prevMessages, data]);
//       }

//     },);
//     console.log("sats",messages)
  
//     socket.on("requestChatHistory", () => {
//       fetchChatHistory(selectedUser);
//     });
//   console.log("log",selectedUser)
//     socket.on("chatHistory", (data) => {
//       setMessages(data.chatHistory);
//     });
  
//     socket.on("userList", (userList) => {
//       setUsers(userList);
//     });
  
//     return () => {
//       socket.off("newMessage");
//       socket.off("messageReceived");
//       socket.off("chatHistory");
//       socket.off("userList");
//     };
//   }, [selectedUser,messages]);
  
//   const login = () => {
//     fetch("http://localhost:4000/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ username: username, passsword: password }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         localStorage.setItem("token", data?.data?.token);
//         setToken(data.token);
//         setIsLoggedIn(true);
//         setUserId(data?.data?.id);
//         fetchUsers(data.token);
//         fetchChatHistory(selectedUser);
//       })
//       .catch((error) => console.error("Login failed:", error));
//   };
  
//   useEffect(() => {
//     socket.on("newMessage", (data) => {
//       if (data.senderId === selectedUser || data.receiver === selectedUser) {
//         fetchChatHistory(selectedUser);
//       }
//     });
//   }, [selectedUser]);
  
//   const fetchChatHistory = (userId) => {
//     socket.emit("getChatHistory", { userId: userId });
//   };
  
//   const sendMessage = () => {
//     if (!selectedUser) {
//       alert('Please select a user to chat with');
//       return;
//     }
//     if (!messageInput) {
//       alert('Please enter a message to send');
//       return;
//     }
  
//     const newMessage = {
//       senderId: id,
//       receiver: selectedUser,
//       message: messageInput,
//     };
  
//     socket.emit('sendMessage', {
//       receiver: selectedUser,
//       message: messageInput,
//     });
  
//     fetchChatHistory(selectedUser);
  
//     setMessageInput('');
//   };
  

//   const fetchUsers = (token) => {
//     fetch("http://localhost:4000/users", {
//       headers: {
//         authorization: `Bearer ${localStorage.getItem("token")}`,
//       },
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         setUsers(data.users);
//       })
//       .catch((error) => console.error("Error fetching users:", error));
//   };

//   if (!isLoggedIn) {
//     return (
//       <div>
//         <h1>Login Page</h1>
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button onClick={login}>Login</button>
//       </div>
//     );
//   }

  
//   const handleUserSelection = (userId) => {
//     setSelectedUser(userId);
//     setMessages([]); // Clear previous messages when selecting a new user
//     fetchChatHistory(userId);
//   };

//   return (
//     <div>
//       <h1>Chat App</h1>
//       <div className="message-container">
//       {messages &&
//   messages.map((message, index) => (
//     <div
//       key={index}
//       className={`message ${
//         message.senderId === id ? "sent" : "received"
//       }`}
//     >
//       <div>
//         {message.senderId === id ? (
//           <strong>You:</strong>
//         ) : (
//           <strong>{message.sender}:</strong>
//         )}
//         {message.message}
//       </div>
//     </div>
//   ))}

//       </div>
//       <div>
//         <h2>Users</h2>
//         <ul>
//           {users &&
//             users.map((user, index) => (
//               <li key={index}>
//                 {user.username}{" "}
//                 <button onClick={() => handleUserSelection(user.id)}>Chat</button>{" "}
//               </li>
//             ))}
//         </ul>
//       </div>
//       <input
//         type="text"
//         value={messageInput}
//         onChange={(e) => setMessageInput(e.target.value)}
//       />
//       <button onClick={sendMessage}>Send</button>
//     </div>
//   );
// }

// export default ChatSection;
