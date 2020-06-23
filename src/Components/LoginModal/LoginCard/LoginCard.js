import React from "react";
import "./LoginCard.css";

function LoginCard() {
  return (
    <div className="login-modal">
      <div className="login-wrapper">
        <div className="left-card">
          <h1>NAVIGATION</h1>
        </div>
        <div className="center-card">
          <div className="card-info">
            <h1 className="welcome-title">Welcome To ProgressiveRec</h1>
            <p className="welcome-desc">The Inking Client</p>
            <p className="welcome-desc"> project admin board.</p>
          </div>
          <div className="social-icons">
            <a href="#" class="fa fa-facebook"></a>
            <a href="#" class="fa fa-twitter"></a>
            <a href="#" class="fa fa-instagram"></a>
            <a href="#" class="fa fa-linkedin"></a>
          </div>
        </div>
        <div className="right-card">
          <h1>LOGIN</h1>
        </div>
      </div>
    </div>
  );
}

export default LoginCard;
