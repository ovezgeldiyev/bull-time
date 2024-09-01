import React from "react";
import FadeDown from "../../Base/FadeDown";
import FadeIn from "../../Base/FadeIn";
import FadeTop from "../../Base/FadeTop";

export default function Market() {
  return (
    <section className="market">
      <div className="shape"></div>
      <FadeDown>
        <h2>
          <span> PLACES ARE LIMITED! </span>
        </h2>
      </FadeDown>

      <div className="auto__container">
        <div className="market__inner">
          <FadeDown delay={0.3} className="market__inner-text">
            <p className="lg">
              Become part of the first <span>TOP 100</span> in your country!
              <br />
              <b> IF YOU REGISTER NOW, YOU'LL GET THIS GIFT: </b> <br />
              Our marketing team will create a marketing strategy for you to
              promote your new project - 100,00% free.
            </p>
          </FadeDown>
          <FadeIn delay={0.5} className="marketBanner">
            <div className="marketBanner__content">
              <h4>MARKETING STRATEGY</h4>
              <ul>
                <li>Completely free consultation with our marketing expert!</li>
                <li>An action plan on how to launch succesfully!</li>
                <li>Banners and Copywriting of social media posts!</li>
              </ul>
              <a href="#" className="button uniq">
                100,00% FREE!{" "}
              </a>
            </div>
            <div className="marketBanner__image">
              <img src="./images/book.png" alt="" />
            </div>
          </FadeIn>
          <FadeTop delay={0.6} className="market__inner-foot">
            <p className="big">
              ⏳This offer will not be active after 99 participants are reached,
              so now is the time to guarantee your place in the
              <span>Top 100</span> and get a personalised Marketing plan!
            </p>
          </FadeTop>
          <FadeTop delay={0.7} className="counter">
            <div className="counter__row">
              <div className="counterItem">
                <span></span>
                <span className="bottom"></span>
                <b> 00 </b>
              </div>
              <div className="counterItem">
                <span></span>
                <span className="bottom"></span>
                <b> 24 </b>
              </div>
            </div>
            <div className="counter__foot">
              <p>Places left</p>
            </div>
          </FadeTop>
        </div>
      </div>
    </section>
  );
}
