import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imggg from "../../Images/k.webp";
import banner from "../../Images/BannerDesktop.png";
import profile from "../../Images/button1.webp";
import axios from "axios";
import { EXCHANGE_URLS, EXCHANGE_URLS_IMAGES } from "../../Important/URLS";
import { toast } from "react-toastify";

export default function BrowserSlider1() {
  const [gigApi, setGigApi] = useState();

  const getSliderApi = async () => {
    try {
      const res = await axios.get(`${EXCHANGE_URLS}/subcategoryData/2`);
      if (res?.status === 201) {
        setGigApi(res?.data?.message.gigsData[0]);
      }
    } catch (err) {
      toast.error(err, "Error");
    }
  };
  useEffect(() => {
    getSliderApi();
  }, []);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    // slidesToScroll: 1,
  };
  return (
    <Sliderrrs>
      <Slider {...settings}>
        {gigApi &&(
          <div>
            <img
              className="img"
              src={`${EXCHANGE_URLS_IMAGES}/${gigApi?.gigsimages?.image1}`}
              alt="Image 1"
            />

            <img
              className="img"
              src={gigApi.gigsData[0]?.gigsimages.image2}
              alt="Image 2"
            />
            <img
              className="img"
              src={gigApi.gigsData[0]?.gigsimages.image3}
              alt="Image 3"
            />
          </div>
        )}
       
      </Slider>
      <div className="footer">
        <div className="profile_footer">
          <img src={profile} alt="img" />
          <h6>name {gigApi?.name}</h6>
        </div>
        <div>
          <p>description {gigApi?.gigsData?.gigsData?.username}</p>
        </div>
        <div>
          <h5>Rating</h5>
        </div>
      </div>
    </Sliderrrs>
  );
}
const Sliderrrs = styled.section`
  > div {
    width: 298px;
    .img {
      border-radius: 10px;
    }
  }
  .czlJOl {
    margin: 0px !important;
  }
  .footer {
    display: flex;
    flex-direction: column;
    .profile_footer {
      display: flex;
      h6 {
        padding: 10px;
      }
      img {
        width: 30px;
        height: 30px;
      }
    }
  }
  .img {
    width: 278px !important;
    height: 170px !important;
  }
  margin: 20px;
  .slick-slide.slick-active.slick-current {
    width: 285px !important;
    height: 170px !important;
  }
  .gvNmJZ .slick-slider.slick-initialized {
    display: flex;
    width: 285px !important;
    height: 170px !important;
    position: absolute;
  }
  .slick-list {
    width: 285px;
    height: 170px;
  }
  .slick-track {
    display: flex;
    height: 170px;
  }
  button.slick-arrow.slick-prev {
    color: black !important;
    width: 30px !important;
    height: 30px !important;
    z-index: 1;
    position: relative;
    top: 114px !important;
    left: 0px !important;
    background: lightgray;
    border-radius: 100px;
    svg {
      width: 30px;
      height: 30px;
    }
  }
  button.slick-arrow.slick-next,
  .iFipJE .slick-next:before {
    color: black !important;
    width: 30px !important;
    height: 30px !important;
    z-index: 1;
    position: relative;
    top: -80px;
    left: 248px;
    background: lightgray;
    border-radius: 100px;
    /* margin-top:170px;  */
    svg {
      width: 30px;
      height: 30px;
    }
  }
  .slick-prev:before,
  .slick-next:before {
    font-family: "slick";
    font-size: 30px;
    line-height: 1;
    opacity: 0.75;
    color: white;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .slick-next:before {
    /* position: relative;
    top: -85px!important;
    left: 221px!important; */
  }
`;
