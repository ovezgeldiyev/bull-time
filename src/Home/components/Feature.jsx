import React from "react";
import FadeDown from "../../Base/FadeDown";
import FadeTop from "../../Base/FadeTop";

export default function Feature() {
  return (
    <section className="feature">
      <div className="auto__container">
        <div className="feature__inner">
          <FadeDown>
            <h2 className="uniq">
              SUPER EASY!
              <small>VIA AUDIO AND CHAT GROUPS :</small>
            </h2>
          </FadeDown>

          <div className="feature__inner-row">
            <FadeDown delay={0.3} className="featureItem">
              <div className="featureItem__icon">
                <img src="images/features/followers.png" alt="" />
              </div>
              <div className="featureItem__title">
                <h5 className="sm">Build a loyal army of members.</h5>
                <div className="featureItem__title-icon">
                  <img src="images/icons/tick.svg" alt="" />
                </div>
              </div>
            </FadeDown>
            <FadeDown delay={0.5} className="featureItem">
              <div className="featureItem__icon">
                <img src="images/features/money.png" alt="" />
              </div>
              <div className="featureItem__title">
                <h5 className="sm">Create a new source of revenue.</h5>
                <div className="featureItem__title-icon">
                  <img src="images/icons/tick.svg" alt="" />
                </div>
              </div>
            </FadeDown>
            <FadeDown delay={0.7} className="featureItem">
              <div className="featureItem__icon">
                <img src="images/features/back-in-time.png" alt="" />
              </div>
              <div className="featureItem__title">
                <h5 className="sm">Do what you love and save time.</h5>
                <div className="featureItem__title-icon">
                  <img src="images/icons/tick.svg" alt="" />
                </div>
              </div>
            </FadeDown>
          </div>
          <FadeTop delay={0.8}>
            <h4 className="med">
              If you want to participate,
              <span>
                <a href="#">REGISTER</a> now!
              </span>
            </h4>
          </FadeTop>
        </div>
      </div>
    </section>
  );
}
