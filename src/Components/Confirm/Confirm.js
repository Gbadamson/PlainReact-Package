import React from "react";
import { Link } from "react-router-dom";
import "./confirm.css";

const Confirm = () => {
  return (
    <div>
      <div className="FinalBg">
        <div className="TopPart">
          <div className="TopNv">
            <div className="Toplg">lg</div>
            <div className="Toptxt">Texlg</div>
          </div>
          <div>X</div>
        </div>
        <div className="Done">
          <div className="Doner"></div>
          <div className="EndRoad">
            Thank You forever being part of the suceess Story We will forever be
            grateful to you for using our platform
          </div>
        </div>
        <div className="ButtonMade">
          <Link to="/done">Download Docs</Link>
        </div>
        <div>
          This will link you to the <Link to="/">Hompage</Link>
        </div>
      </div>
    </div>
  );
};

export default Confirm;
