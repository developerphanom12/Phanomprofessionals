import styled from "styled-components";

export const ToggleButton = styled.button`
  padding: 5px 12px;
  font-size: 14px;
  margin: 10px;
  border: none;
  cursor: pointer;
  outline: none;
  color: white;
  background-color: ${({ toggle }) => (toggle ? "#45a049" : "gray")};
  border-radius: 15px;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ toggle }) => (toggle ? "#1dbf73" : "#1dbf73")};
  }
`;
export const GigButton = styled.button`
  border: none;
  background-color: transparent;
  color: #404145;
  padding: 10px;
`;

export const CreateButton = styled.button`
  background-color: #1dbf73;
  font-weight: 700;
  color: #fff !important;
  border: 1px solid transparent;
  padding: 5px 10px;
  font-size: 12px;
  border-radius: 5px;
  &:hover {
    background: #19a463;
  }
`;
