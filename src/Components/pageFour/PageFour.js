import React from "react";
import "./pageFour.css";
import { Link } from "react-router-dom";

const PageFour = () => {
  return (
    <div>
      <div className="FourShow">
        <div className="TopPart">
          <div className="TopNv">
            <div className="Toplg">lg</div>
            <div className="Toptxt">Texlg</div>
          </div>
          <div>X</div>
        </div>
        <div className="TopContent">
          <div className="TopCircle">5</div>
          <div className="Toppper">Some other Text goes here?</div>
        </div>
        <div>
          <hr />
        </div>
        <div className="OkayPath">ok </div>
        <div className="ButtonMade">
          <Link to="/quote">Get Quotes</Link>
        </div>
        <div className="Footerpath">
          <div>7/7</div>

          <div className="MovePath">
            <div className="Previous">
              <Link to="/pg3">P</Link>
            </div>
            <div className="Next">
              <Link to="/pg1">N</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageFour;
