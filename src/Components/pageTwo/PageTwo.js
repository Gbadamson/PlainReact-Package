import React from "react";
import { Link } from "react-router-dom";
import "./pagetwo.css";

const PageTwo = () => {
  return (
    <div>
      <div className="BusContainer">
        <div className="TopPart">
          <div className="TopNv">
            <div className="Toplg">lg</div>
            <div className="Toptxt">Texlg</div>
          </div>
          <div>X</div>
        </div>
        <div className="TopContent">
          <div className="TopCircle">2</div>
          <div className="Toppper">Some Text goes here?</div>
        </div>
        <div className="HeadTop">
          <div className="TextTitle">Some blue Text Here</div>
          <div className="Horizon">Horizontal line</div>
        </div>
        <div className="ShadowPath">
          <div className="NumberView1">4</div>
          <div className="NameView">Some Texts go in here</div>
        </div>
        <div className="Footerpath">
          <div>2/7</div>

          <div className="MovePath">
            <div className="Previous">
              <Link to="/pg1">P</Link>
            </div>
            <div className="Next">
              <Link to="/pg3">N</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageTwo;
