import React from "react";
import Intro from "./components/Intro";
import Quote from "./components/Quote";
import Banner from "./components/Banner";
import Feature from "./components/Feature";
import Map from "./components/Map";
import Market from "./components/Market";
import Newsletter from "./components/Newsletter";
import Reviews from "./components/Reviews";
import Newsletter2 from "./components/Newsletter2";
import Join from "./components/Join";

export default function Home() {
  return (
    <>
      <Intro />
      <Quote />
      <Banner />
      <Feature />
      <div className="shape sm rev"></div>
      <Map />
      <Market />
      <Newsletter />
      <Reviews />
      <Newsletter2 />
      <Join />
      <Banner />
    </>
  );
}
