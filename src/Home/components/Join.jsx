import React from "react";
import Slider from "react-slick";
import FadeTop from "../../Base/FadeTop";

export default function Join() {
  const settings = {
    speed: 8000,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: false,
    cssEase: "linear",
    slidesToShow: 1,
    draggable: false,
    focusOnSelect: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    buttons: false,
  };
  return (
    <section className="join">
      <div className="shape"></div>
      <div className="join__banner">
        <Slider {...settings} className="join__banner-slider">
          <div className="joinItem">PLACES ARE LIMITED!</div>
          <div className="joinItem">PLACES ARE LIMITED!</div>
          <div className="joinItem">PLACES ARE LIMITED!</div>
          <div className="joinItem">PLACES ARE LIMITED!</div>
        </Slider>
      </div>
      <div className="auto__container">
        <div className="join__inner">
          <FadeTop>
            <h3>Don't miss out on the opportunity</h3>
            <p className="lg">
              to become financially independent, building an additional and
              long-term financial source without worrying about your future.
            </p>
          </FadeTop>
        </div>
      </div>
    </section>
  );
}
