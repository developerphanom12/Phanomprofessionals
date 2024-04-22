import React, { useState, useEffect } from "react";
import { IoWarningOutline } from "react-icons/io5";
import styled from "styled-components";
import BGImage from "../Images/noInternet.webp";

const NoInternetConnection = (props) => {
  // state variable holds the state of the internet connection
  const [isOnline, setOnline] = useState(true);

  // On initization set the isOnline state.
  useEffect(() => {
    setOnline(navigator.onLine);
  }, []);

  // event listeners to update the state
  window.addEventListener("online", () => {
    setOnline(true);
  });

  window.addEventListener("offline", () => {
    setOnline(false);
  });

  // if user is online, return the child component else return a custom component
  if (isOnline) {
    return props.children;
  } else {
    return (
      <Root>
        <IoWarningOutline />
        <b>There Is No Internet Connection. Please try again later.</b>
      </Root>
    );
  }
};

export default NoInternetConnection;
const Root = styled.section`
padding:50px  20px;
  background-image: url(${BGImage});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  svg {
    width: 40px;
    height: 40px;
    margin: 20px;
  }
`;

// import React from "react";

// export default function useOffline() {
//   console.log("Running hook");
//   // Set up state
//   const [isOffline, setIsOffline] = React.useState(false);

//   // Set up handlers
//   function onOffline() {
//     console.log("Going offline");
//     setIsOffline(true);
//   }

//   function onOnline() {
//     console.log("Going online");
//     setIsOffline(false);
//   }

//   // Run this on mount only - due to []
//   React.useEffect(() => {
//     console.log("Setting handlers...");
//     // Change state whenver these occur..
//     window.addEventListener("offline", onOffline);
//     window.addEventListener("online", onOnline);

//     // Return a function removing these handlers on unmount
//     return () => {
//       console.log("Unmounting");
//       window.removeEventListener("offline", onOffline);
//       window.removeEventListener("online", onOnline);
//     };
//   }, []);

//   // Return the state value...
//   return isOffline;
// }
