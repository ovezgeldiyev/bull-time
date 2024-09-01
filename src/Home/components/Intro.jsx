import React from "react";
import FadeDown from "../../Base/FadeDown";
import FadeLeft from "../../Base/FadeLeft";

export default function Intro() {
  return (
    <section className="intro">
      <div className="auto__container">
        <div className="intro__inner">
          <FadeLeft className="intro__inner-content">
            <h1>FINALLY!</h1>
            <h3>NEW MOBILE APP HELPS ATHLETES EARN MORE!💰</h3>
          </FadeLeft>
          <FadeDown delay={0.4} className="intro__inner-image">
            <img className="moc" src="images/1.png" alt="" />
            <img className="desc" src="images/shadow.png" alt="" />
            <img className="mob" src="images/shadow2.png" alt="" />
          </FadeDown>
        </div>
      </div>
      <div className="shape"></div>
    </section>
  );
}
