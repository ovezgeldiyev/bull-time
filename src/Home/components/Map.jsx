import React from "react";
import FadeIn from "../../Base/FadeIn";
import FadeRight from "../../Base/FadeRight";
import FadeLeft from "../../Base/FadeLeft";

export default function Map() {
  return (
    <section className="map">
      <h2>
        This is how we differ from others! <br />
        <span> IMPORTANT BENEFITS FOR YOU:</span>
      </h2>
      <div className="mapRow">
        <FadeLeft className="map__shape left"></FadeLeft>
        <div className="auto__container">
          <div className="mapRow__inner">
            <FadeIn className="map__inner-image">
              <img className="moc" src="images/map/1.png" alt="" />
              <img src="images/map/shadow.png" alt="" />
            </FadeIn>
            <FadeRight delay={0.2} className="map__inner-content">
              <div className="map__inner-content-inner">
                <h4 className="sm">REGULAR INCOME FROM CHAT GROUPS</h4>
                <ul>
                  <li>
                    <b> You decide the 🎯 business model of your groups </b>-
                    monthly subscription, one-time payment 💰 or free. 
                  </li>
                  <li>
                    In your 💬 chat group, share updates with your community and
                    🔒 lock content for an amount you set.
                  </li>
                </ul>
              </div>
            </FadeRight>
          </div>
        </div>
      </div>
      <div className="mapRow">
        <FadeRight delay={0.2} className="map__shape right"></FadeRight>
        <div className="auto__container">
          <div className="mapRow__inner">
            <FadeLeft delay={0.3} className="map__inner-content">
              <div className="map__inner-content-inner">
                <h4 className="sm">ONLINE MEETINGS IN YOUR OWN AUDIO ROOM</h4>
                <ul>
                  <li>
                    <b>You get your own 🎙 audio room </b>
                    where you can talk more exclusively with your community and
                    build more personal relationships.
                  </li>
                  <li>
                    These can be 📆 set sessions that you hold periodically with
                    your community.
                  </li>
                </ul>
              </div>
            </FadeLeft>
            <FadeIn delay={0.4} className="map__inner-image rev">
              <img className="moc" src="images/map/2.png" alt="" />
              <img src="images/map/shadow2.png" alt="" />
            </FadeIn>
          </div>
        </div>
      </div>
      <div className="mapRow">
        <FadeLeft delay={0.4} className="map__shape sm left"></FadeLeft>
        <div className="auto__container">
          <div className="mapRow__inner">
            <FadeIn delay={0.5} className="map__inner-image">
              <img className="moc" src="images/map/3.png" alt="" />
              <img src="images/map/shadow.png" alt="" />
            </FadeIn>
            <FadeRight delay={0.6} className="map__inner-content">
              <div className="map__inner-content-inner">
                <h4 className="sm">1:1 COACHING</h4>
                <ul>
                  <li>
                    <b>📲 Only for business communications! </b>
                    You can send 🏋️ training videos, voice messages, photos, pdf
                    files, spreadsheets, etc.
                  </li>
                  <li>
                    Users can find you and 📨 send a request for 1:1
                    consultation and coaching
                  </li>
                </ul>
              </div>
            </FadeRight>
          </div>
        </div>
      </div>
      <div className="mapRow">
        <FadeRight className="map__shape right"></FadeRight>
        <div className="auto__container">
          <div className="mapRow__inner">
            <FadeLeft delay={0.2} className="map__inner-content">
              <div className="map__inner-content-inner">
                <h4 className="sm">CREATE CHALLENGES</h4>
                <ul>
                  <li>
                    <b>Challenge your audience! </b>
                    💨Payments are made through the mobile app 💳 without having
                    to track each participant individually.
                  </li>
                  <li>
                    Motivate and inspire 💪🏼 people and show exclusive content.
                    <br />
                    (no filters or editing needed)
                    <br />
                    <b> Real content only! </b>
                  </li>
                </ul>
              </div>
            </FadeLeft>
            <FadeIn delay={0.3} className="map__inner-image rev">
              <img className="moc" src="images/map/4.png" alt="" />
              <img src="images/map/shadow2.png" alt="" />
            </FadeIn>
          </div>
        </div>
      </div>
      <div className="mapRow">
        <FadeLeft delay={0.4} className="map__shape sm left"></FadeLeft>
        <div className="auto__container">
          <div className="mapRow__inner">
            <FadeIn delay={0.5} className="map__inner-image">
              <img className="moc" src="images/map/5.png" alt="" />
              <img src="images/map/shadow.png" alt="" />
            </FadeIn>
            <FadeRight delay={0.6} className="map__inner-content">
              <div className="map__inner-content-inner">
                <h4 className="sm">INCREASE YOUR FOLLOWERS ON SOCIAL MEDIA</h4>
                <ul>
                  <li>
                    <b>➕Add all social media,</b>
                    websites, online store to your profile 👤. This way you
                    refer people to your other channels.
                  </li>
                  <li>
                    <b> 📍Everything in one place! </b>
                    Users can view your entire profile and see all your groups
                    with descriptions, rules, prices, video traile
                  </li>
                </ul>
              </div>
            </FadeRight>
          </div>
        </div>
      </div>
      <div className="mapRow">
        <FadeRight className="map__shape right"></FadeRight>
        <div className="auto__container">
          <div className="mapRow__inner">
            <FadeLeft delay={0.2} className="map__inner-content">
              <div className="map__inner-content-inner">
                <h4 className="sm">YOUR PROFILE IS VERIFIED AND PROTECTED</h4>
                <ul>
                  <li>
                    <b>✅ Your Account is verified </b>
                    with ID or driver's license. This protects 🔐 you from fake
                    accounts with your name and content.
                  </li>
                  <li>
                    <b> ✅ Integrated Payment System! </b>
                    <br />
                    💸 Money will be transferred directly to your bank account.
                  </li>
                </ul>
              </div>
            </FadeLeft>
            <FadeIn delay={0.3} className="map__inner-image rev">
              <img className="moc" src="images/map/6.png" alt="" />
              <img src="images/map/shadow2.png" alt="" />
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
