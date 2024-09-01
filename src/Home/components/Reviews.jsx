import React from "react";
import Slider from "react-slick";
const reaviewList = [
  {
    id: "1",
    image: "/images/reviews/Lazar.png",
    name: "Lazar Todev",
    job: "MMA Fighter",
  },
  {
    id: "2",
    image: "/images/reviews/Boyan.png",
    name: "Boyan Ivanov",
    job: "Bodybuilder & Coach",
  },
  {
    id: "3",
    image: "/images/reviews/Rori.png",
    name: "Rori Fit",
    job: "Personal Coach",
  },
  {
    id: "4",
    image: "/images/reviews/Stanimir.png",
    name: "Stanimir Etov",
    job: "Bodybuilder",
  },
  {
    id: "5",
    image: "/images/reviews/Gosia.png",
    name: "Gosia Galkowska",
    job: "Fitness Coach & Motivator",
  },
  {
    id: "6",
    image: "/images/reviews/Paul.png",
    name: "Paul Grischok",
    job: "Football Agent",
  },
  {
    id: "7",
    image: "/images/reviews/Antoaneta.png",
    name: "Antoaneta Zlateva",
    job: "Fitness coach & Motivator",
  },
  {
    id: "8",
    image: "/images/reviews/Bagus.png",
    name: "Bagus Kagfi",
    job: "Football Player",
  },
  {
    id: "9",
    image: "/images/reviews/Monika.png",
    name: "Monika Naumova",
    job: "Fitness Coach",
  },
  {
    id: "10",
    image: "/images/reviews/CSKA.png",
    name: "CSKA FAN TV",
    job: "Blogger & Exclusive for Fans",
  },
  {
    id: "11",
    image: "/images/reviews/Georgi.png",
    name: "Georgi Shishkov",
    job: "Blogger & Entrepreneur",
  },
];
export default function Reviews() {
  const settings = {
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    speed: 600,
    responsive: [
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1.3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="reviews">
      <div className="shape"></div>
      <div className="title">
        <h2>
          <span> HERE ARE THE ATHLETES WHO TRUSTED US: </span>
        </h2>
      </div>
      <div className="auto__container">
        <div className="reviews__inner">
          <Slider {...settings} className="reviews__inner-slider">
            {reaviewList.map((item, index) => (
              <div className="reviewsItem" key={index}>
                <div className="reviewsItem__image">
                  <img src={item.image} alt="" />
                </div>
                <div className="reviewsItem__content">
                  <h6>{item.name}</h6>
                  <p>{item.job}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
