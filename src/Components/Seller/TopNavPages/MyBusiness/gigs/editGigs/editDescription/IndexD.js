import React, { useState } from 'react'
import TextEditor2 from './TextEditor2';
import styled from 'styled-components';
import axios from 'axios';
import { EXCHANGE_URLS } from '../../../../../../Important/URLS';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


export default function IndexD({editGetGig}) {
  const [valuee, setValuee] = useState({
    content: "",
  });
  console.log("valudfee", valuee);
  const navigate = useNavigate();


  const appApi = async () => {
    try {
      const axiosConfig = {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };
    
      const res = await axios.put(
        `${EXCHANGE_URLS}/updateContent/${c_id}`,
        axiosConfig
      );
      if (res?.status === 201) {
        navigate("/requirements");
        toast.success("Updated");
      }
    } catch (err) {
      toast.error("Firstly Fill Overview and Pricing Pages Detail");
    }
  };
  const c_id =
  editGetGig && editGetGig.length > 0
    ? editGetGig[0].EditorData.texteditor_id
    : null;
  const handleSubmit = () => {
    appApi();
  };
  return (
    <Root>
      <div className="main_div_section">
        <header>
          <h3>Description</h3>
          <p>Briefly Describe Your Gig</p>
        </header>
        <TextEditor2 editGetGig={editGetGig} valuee={valuee} setValuee={setValuee}/>
      </div>
      <div className="div4">
        <a type="button" role="button" href="/edit">
          Cancle
        </a>
        <button
          type="submit"
          onClick={() => {
            handleSubmit();
          }}
        >
          Save
        </button>
      </div>
    </Root>
  );
}
const Root = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px 50px;
  padding: 0px 40px;
  width: 100%;
  .main_div_section {
    display: flex;
    flex-direction: column;
    width: 75vw;
    header {
      width: 100%;

      padding-top: 4px;
      color: #62646a;
      h3 {
        font-weight: 400;
        color: #62646a;
        padding-bottom: 20px;
        margin-bottom: 30px;
        border-bottom: 1px solid #dadbdd;
        font-size: 28px;
      }
      p {
        padding-top: 15px;
        padding-bottom: 20px;
      }
    }
  }
  .div4 {
    width: 75vw;
    display: flex;
    justify-content: space-between;
    a,
    button {
      padding: 11px 20px;
      -webkit-box-pack: center;
      justify-content: center;
      align-items: center;
      gap: 8px;
      box-sizing: border-box;
      position: relative;
      border-radius: 8px;
      font-weight: 600;
      line-height: 24px;
      font-size: 16px;
      text-decoration: none;
      cursor: pointer;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      transition: 70ms cubic-bezier(0.75, 0, 0.25, 1);
    }
    a {
      color: #222325;
      border: 1px solid #e4e5e7;
    }
    button {
      background: #222325;
      border: 1px solid #fff;
      color: #fff;
    }
  }

  @media (max-width: 567px){
    margin:0;
    padding:0;
     .main_div_section{
    width: 90vw;
}
 .div4 {
   width: unset; 

}
  }
`;


                                                                                                                                     