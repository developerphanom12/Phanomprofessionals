import React from "react";
import { GiCornerFlag } from "react-icons/gi";
import styled from "styled-components";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import MileStone from "./MileStone";
import SinglePayment from "./SinglePayment";

export default function MainSingleMilestone() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [openn, setOpenn] = React.useState(false);
  const handleOpenn = () => setOpenn(true);
  const handleClosee = () => setOpenn(false);
  return (
    <Root>
      <h5>Choose how you want to get paid</h5>
      <ul>
        <p>
          {" "}
          Get paid in full once the project is completed, or break it into
          smaller chunks, called milestones, to get paid as you go.
        </p>
        <li>
          <GiCornerFlag />
          <div onClick={handleOpen}>
            <h6>Single Payment</h6>
            <span>Get paid in full after each order is completed.</span>
          </div>
        </li>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <SinglePayment />
          </Box>
        </Modal>

        <li>
          <GiCornerFlag />
          <div onClick={handleOpenn}>
            <h6> Milestone</h6>
            <span>
              Work in gradual steps and get paid for each completed milestone.
            </span>
          </div>
        </li>
        <Modal
          open={openn}
          onClose={handleClosee}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <MileStone />
          </Box>
        </Modal>
      </ul>
    </Root>
  );
}
const Root = styled.section`
  img {
    width: 200px;
  }
  h5 {
    padding: 16px 20px;
    background: #f5f5f5;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    font-weight: 600;
  }
  ul {
    padding: 0;
    list-style: none;
    p {
      color: #62646a;
      padding: 20px;
      font-size: 18px;
      line-height: 26px;
    }
    li {
      display: flex;
      margin: 0px 20px 20px;
      padding: 20px;
      border: 1px solid lightgray;
      border-radius: 3px;
      svg {
        font-size: 35px;
        margin: 10px;
      }
      > div {
        flex-direction: column;
        padding: 0px 10px;
        h6 {
          font-size: 18px;
          color: #404145;
          font-weight: 600;
        }
        span {
          color: #62646a;
          font-size: 16px;
          line-height: 26px;
        }
      }
      &:hover {
        border: 1px solid darkgreen;
        cursor: pointer;
      }
    }
  }
`;
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: 450,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 1,
  overflow: "auto",
};
