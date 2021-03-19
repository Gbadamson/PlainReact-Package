import React from "react";
import { Link } from "react-router-dom";
import "./pageThree.css";

const PageThree = () => {
  return (
    <div>
      <div className="Number5">
        <div className="TopPart">
          <div className="TopNv">
            <div className="Toplg">lg</div>
            <div className="Toptxt">Texlg</div>
          </div>
          <div>X</div>
        </div>
        <div className="TopContent">
          <div className="TopCircle">5</div>
          <div className="Toppper">
            Some Text goes here?<div>Sub text</div>
          </div>
        </div>
        <div className="ContentView">
          <div className="IconContent"></div>
          <div className="TextPath">
            <div className="MainTextPath"></div>
            <div className="SubTextPath"></div>
          </div>
        </div>
        <div className="ContentView">
          <div className="IconContent"></div>
          <div className="TextPath">
            <div className="MainTextPath"></div>
            <div className="SubTextPath"></div>
          </div>
        </div>
        <div className="ShadowPath">
          <div className="NumberView1">4</div>
          <div className="NameView">Some Texts go in here</div>
        </div>

        <div className="Footerpath">
          <div>5/7</div>

          <div className="MovePath">
            <div className="Previous">
              <Link to="/pg2">P</Link>
            </div>
            <div className="Next">
              <Link to="/pg4">N</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageThree;
