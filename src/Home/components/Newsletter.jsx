import React from "react";
import FadeIn from "../../Base/FadeIn";

export default function Newsletter() {
  return (
    <section className="newsletter">
      <div className="shape rev"></div>
      <div className="auto__container">
        <div className="newsletter__inner">
          <div className="newsletterImage">
            <img src="./images/gif-2.gif" alt="" />
          </div>
          <FadeIn className="newsletter__inner-form">
            <h5 className="big">
              Fill in the information field and guarantee your GIFT!
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
