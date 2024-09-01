import React from "react";

export default function Header() {
  return (
    <header className="header">
      <div className="auto__container">
        <div className="header__inner">
          <a href="/" className="header__inner-logo">
            <img src="images/logo.svg" alt="" />
          </a>
        </div>
      </div>
    </header>
  );
}
