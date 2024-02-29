import styled from 'styled-components';

export const Switch = styled.div`
  position: relative;
  display: inline-block;
  width: 34px;
  height: 20px;
`;

export const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

export const GlobalSlider = styled.span`
    border-radius: 20px;
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: .4s;
  
  &:before {
    position: absolute;
    content: "";
    height: 15px;
    width: 15px;
    left: 4px;
    bottom: 3px;
    background-color: white;
    transition: .4s;
    border-radius: 20px;

  }
`;

export const RoundedSlider = styled(GlobalSlider)`
  border-radius: 24px;
  &:before {
    border-radius: 50%;
  }
`;

export const StyledInput = styled(Input)`
  &:checked + ${GlobalSlider} {
    background-color: #2196F3;
    
    &:before {
      transform: translateX(26px);
    }
  }
  
  &:focus + ${GlobalSlider} {
    box-shadow: 0 0 1px #2196F3;
  }
`;

export const RoundedStyledInput = styled(Input)`
  &:checked + ${RoundedSlider} {
    background-color: #2196F3;
    &:before {
      transform: translateX(26px);
    }
  }
  
  &:focus + ${RoundedSlider} {
    box-shadow: 0 0 1px #2196F3;
  }
`;