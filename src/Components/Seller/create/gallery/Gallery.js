import axios from "axios";
import React, { useState } from "react";
import { IoInformationCircle } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { EXCHANGE_URLS } from "../../../Important/URLS";
import { updateGigId } from "../../../../redux/users/action";
import { toast } from "react-toastify";

export default function Gallery() {
  const gigId = useSelector((state) => state.users.gigId);
  const [imageFiles, setImageFiles] = useState({
    gig_id: gigId ? gigId.toString() : "",
    image1: null,
    image2: null,
    image3: null,
    vedio: null,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const appApi = async () => {
    try {
      const formData = new FormData();
      formData.append("gig_id", gigId);
      formData.append("image1", imageFiles.image1);
      formData.append("image2", imageFiles.image2);
      formData.append("image3", imageFiles.image3);
      formData.append("vedio", imageFiles.vedio);

      const axiosConfig = {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "multipart/form-data",
        },
      };

      const res = await axios.post(
        `${EXCHANGE_URLS}/imageUpload`,
        formData,
        axiosConfig
      );
      if (res?.status === 201) {
        const gigId = res.data.data.id;
        dispatch(updateGigId(gigId));
        navigate("/gigs");
        toast.success("All Steps Are Completed");
      }
    } catch (err) {
      toast.error("Error occurred while uploading images and video.");
    }
  };

  const handleSubmit = () => {
    appApi();
  };

  const handleImageChange = (e, imageKey) => {
    setImageFiles({
      ...imageFiles,
      [imageKey]: e.target.files[0],
    });
  };

 
  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    // Check if the selected file is an MP4 video
    if (file.type !== "video/mp4") {
      toast.error("Please upload an MP4 video file.");
    } else {
      setImageFiles({
        ...imageFiles,
        vedio: file,
      });
    }
  };

  return (
    <Root>
      <div className="main_gallery_div">
        <header>
          <h3 className="header_h3">Showcase Your Services In A Gig Gallery</h3>
          <p className="header_p">
            Encourage buyers to choose your Gig by featuring a variety of your
            work.
          </p>
          <div className="header_div">
            <span className="span_icon">
              <IoInformationCircle />
            </span>
            <p className="header_div_p">
              To comply with Phanom's terms of service, make sure to upload only
              content you either own or you have the permission or license to
              use.
            </p>
          </div>
          <button className="header_button">
            <span className="button_span">Gig image guidelines</span>
          </button>
        </header>

        <div className="img_div_add">
          <h3 className="div_img_h3">
            <p className="div_img_h3_p">Images (up to 3)</p>
            <p className="div_img_h3_p2">
              Get noticed by the right buyers with visual examples of your
              services.
            </p>
          </h3>
          <ul>
            <div className="ul_div">
            <li>image 1
              <input type="file" accept="image/*" onChange={(e) => handleImageChange(e, "image1")} />
            </li>
            <li>image 2
              <input type="file" accept="image/*" onChange={(e) => handleImageChange(e, "image2")} />
            </li>
            <li>image 3
              <input type="file" accept="image/*" onChange={(e) => handleImageChange(e, "image3")} />
            </li>
            </div>
          </ul>
        </div>

        <div className="img_div_add">
          <h3 className="div_img_h3">
            <p className="div_img_h3_p">Video (Only one)</p>
            <p className="div_img_h3_p2">
              Capture buyers' attention with a video that showcases your
              service. Please choose a video shorter than 75 seconds and smaller
              than 50MB
            </p>
          </h3>

          <ul>
            <div className="ul_div">
            <li>video 1
            <input type="file" accept="video/*" onChange={handleVideoChange} />
            </li>
           
            </div>
          </ul>
        </div>
      </div>
      <div className="div4">
        <a type="button" role="button" href="/gigs">
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
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 50px;
  padding: 0px 40px;
  width: 75vw;
  color: #62646a;
  .div4 {
    width: 100%;
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
  .main_gallery_div {
    width: 100%;
    margin-bottom: 20px;
    position: relative;
    padding: 28px;
    border-radius: 5px 5px 0 0;
    header {
      position: relative;
      border-bottom: 1px solid #dadbdd;
      margin-bottom: 12px;
      margin-top: 8px;
      .header_h3 {
        margin-bottom: 8px;
        font-size: 28px;
        line-height: 130%;
        font-family: macan, helvetica neue, Helvetica, Arial, sans-serif;
        font-weight: 700;
        color: #404145;
      }
      .header_p {
        color: #404145;
        display: block;
        text-transform: none;
      }
      .header_div {
        display: flex;
        background: #efeff0;
        border: 1px solid #e4e5e7;
        border-radius: 4px;
        padding: 16px;
        margin-top: 16px;
        .span_icon {
          margin-right: 12px;
          margin-top: 2px;
          min-width: 16px;
          svg {
            width: 16px;
            height: 16px;
            color: #212326;
          }
        }
        .header_div_p {
          color: #62646a;
          font-size: 14px;
          line-height: 22px;
          text-transform: none;
        }
      }
      .header_button {
        font-weight: 700;
        color: #222325;
        vertical-align: baseline;
        border: 0;
        background: transparent;
        font-size: 14px;
        line-height: 21px;
        text-decoration-line: underline;
        padding: 12px 0 0;
      }
    }
    .img_div_add {
      border-bottom: 1px solid #dadbdd;
      padding-top: 23px;
      padding-bottom: 16px;
      position: relative;
      .div_img_h3 {
        position: relative;
        font-size: 16px;
        line-height: 18px;
        font-weight: 500;
        padding-bottom: 32px;
        .div_img_h3_p {
          margin-bottom: 4px;
          font-weight: 700;
          font-size: 18px;
        }
        .div_img_h3_p2 {
          font-size: 14px;
          font-weight: 400;
          color: #74767e;
          margin-bottom: 5px;
        }
      }
      ul {
        list-style: none;
        .ul_div {
          display: flex;
          gap: 10px;
        }
        li {
          cursor: grab;
          border-color: #222325;
          background-color: #fff;
          line-height: 100%;
          font-size: 12px;
          position: relative;
          height: 160px;
          width: 31%;
          overflow: hidden;
          border: 1px solid #dadbdd;
          margin-bottom: 16px;
        }
      }
    }
  }

  @media (max-width: 567px) {
    margin: 0;
    padding: 0;
    width: 100vw;
    ol, ul {
     padding-left:unset; 
}
.main_gallery_div .img_div_add ul .ul_div {
display: unset; 

}
.main_gallery_div .img_div_add ul li {
width: unset;
}

 .div4 {
    width: 90%;
}

  }

  @media (min-width: 567px) and (max-width: 992px){
    margin: 0;
    padding: 0;
    width: 100vw;
    ol, ul {
     padding-left:unset; 
}
/* .main_gallery_div .img_div_add ul .ul_div {
display: unset; 

} */
.main_gallery_div .img_div_add ul li {
width: unset;
}

 .div4 {
    width: 90%;
}
  }
`;
