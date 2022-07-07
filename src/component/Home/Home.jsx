import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";
import songApi from "../../Api/songApi";
import { NavLink } from "react-router-dom";
import SkeletonSlider from "../../common/skeleton/SkeletonSlider";
import PlayListSlider from "./playListSlider/PlayListSlider";
import { useDispatch, useSelector } from "react-redux";
import { loadDataHome, setLoadHome } from "../../actions/loadDataHome";

function Home() {
  const dispatch = useDispatch();

  const dataHome = useSelector((state) => state.loadHome.dataHome);
  const loadingHome = useSelector((state) => state.loadHome.isLoadingHome);
  //API
  useEffect(() => {
    const fetchHomePage = async () => {
      try {
        const responseHome = await songApi.getHome();
        dispatch(loadDataHome(responseHome.data.items));
        // dispatch(loadDataHome(responseHomePage2.data.items));
        dispatch(setLoadHome(true));
      } catch (error) {
        console.log(error);
      }
    };
    loadingHome ? console.log("not call api") : fetchHomePage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
      <div
        className={className}
        // style={{ background: "red" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
      <div
        className={className}
        // style={{ background: "green" }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <>
      <div className="home-page">
        <main className="home">
          <div className="container">
            <div className="container">
              <div className="slider-container">
                {loadingHome ? (
                  <Slider {...settings}>
                    {dataHome[0].items.map((item, index) => (
                      <NavLink to="" className="slider-item" key={index}>
                        <img className="slider-img" src={item.banner} alt="" />
                      </NavLink>
                    ))}
                  </Slider>
                ) : (
                  <SkeletonSlider />
                )}
              </div>
            </div>
            <PlayListSlider
              items={loadingHome ? dataHome[3] : undefined}
              slide={5}
            />
            <PlayListSlider
              items={loadingHome ? dataHome[4] : undefined}
              slide={5}
            />
            <PlayListSlider
              items={loadingHome ? dataHome[6] : undefined}
              slide={5}
            />

            <PlayListSlider
              items={loadingHome ? dataHome[10] : undefined}
              slide={5}
            />
          </div>
        </main>
      </div>
    </>
  );
}

export default Home;
