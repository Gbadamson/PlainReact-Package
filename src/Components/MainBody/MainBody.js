import React from "react";
import { Link } from "react-router-dom";
import "./mainbody.css";

const MainBody = () => {
  return (
    <div>
      <div className="MainBg">
        <div className="Cancel">X</div>
        <div className="Logger">
          <div className="LogoMain">Logo</div>
        </div>
        <div className="Quest">So what gives?</div>
        <div className="Request">
          <div className="CircularRequest">Circle</div>
          <div className="RequestText">So many lines of text go in here</div>
        </div>
        <div className="Request">
          <div className="CircularRequest">Circle</div>
          <div className="RequestText">So many lines of text go in here</div>
        </div>
        <div className="Request">
          <div className="CircularRequest">Circle</div>
          <div className="RequestText">So many lines of text go in here</div>
        </div>
        <div className="ButtonMade">
          <Link to="/pg1">Get Started</Link>
        </div>
      </div>
    </div>
  );
};

export default MainBody;
