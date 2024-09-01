import React from "react";
import FadeLeft from "../../Base/FadeLeft";
import FadeRight from "../../Base/FadeRight";
import FadeIn from "../../Base/FadeIn";
import FadeTop from "../../Base/FadeTop";

export default function Quote() {
  return (
    <section className="quote">
      <div className="auto__container">
        <div className="quote__inner">
          <FadeLeft className="quoteItem">
            <div className="quoteItem__title">
              You’re a Fitness Coach, Bodybuilder, Athlete, MMA Fighter?
            </div>
          </FadeLeft>
          <FadeRight delay={0.4} className="quoteItem">
            <div className="quoteItem__title">
              Injuries are part of life. Do you have a Plan B?
            </div>
          </FadeRight>
          <FadeIn delay={0.6} className="quoteItem">
            <div className="quoteItem__title">
              You don’t want to rely on paid ads & sponsors?
            </div>
          </FadeIn>
        </div>
        <FadeTop delay={0.8}>
          <h3 className="uniq">...We have a solution for you!</h3>
        </FadeTop>
      </div>
    </section>
  );
}
