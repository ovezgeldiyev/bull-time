import React from "react";
import FadeTop from "../../Base/FadeTop";
import FadeIn from "../../Base/FadeIn";

export default function Newsletter2() {
  return (
    <section className="newsletter dark">
      <div className="auto__container">
        <div className="newsletter__inner">
          <FadeTop className="newsletter__inner-title">
            <h3 className="ex">
              Become part of the first <span>TOP 100</span> in your country!
            </h3>
            <div className="counter">
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
            </div>
            <div className="newsletterImage sm">
              <img src="./images/gif-2.gif" alt="" />
            </div>
          </FadeTop>
          <FadeIn delay={0.3} className="newsletter__inner-form">
            <h5 className="big">
              Fill in the information field and reserve your place in BULLTIME
              NOW! <br />
              Your registration is completely free!
            </h5>
            <div className="input__row">
              <div className="input">
                <input type="text" placeholder="Name Surname" />
              </div>
              <div className="input">
                <input type="email" placeholder="Your Email Address" />
              </div>
              <div className="input">
                <input type="tel" placeholder="Phone number" />
              </div>
            </div>
            <div className="check">
              <input type="checkbox" defaultChecked />
              <label htmlFor="">
                I agree to my personal data being processed
              </label>
            </div>
            <button type="submit" className="button">
              sign up
            </button>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
