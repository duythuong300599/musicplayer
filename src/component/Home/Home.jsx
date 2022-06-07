import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";
import RenderListSkeleton from "../ZingChart/renderListSongs/renderListSkeleton";
import songApi from "../../Api/songApi";
import Skeleton from "react-loading-skeleton";

function Home() {
  const [state, setstate] = useState([]);
  //API
  useEffect(() => {
    const fetchHomePage = async () => {
      try {
        const responseHomePage = await songApi.getHomePage(1);
        const dataHomePage = responseHomePage.data.items[0].items;
        console.log(dataHomePage);
        setstate(dataHomePage);
      } catch (error) {
        console.log(error);
      }
    };
    fetchHomePage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <>
      <div className="home-page">
        <main className="home">
          <div className="container">
            <div className="container">
              <div className="slider-container">
                <Slider {...settings}>
                  {state.map((item, index) => (
                    <div className="slider-item" key={index}>
                      <img className="slider-img" src={item.banner} alt="" />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </main>
      </div>
      <RenderListSkeleton items={5} />
    </>
  );
}

export default Home;
