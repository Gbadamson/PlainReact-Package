import React from "react";
import { Link } from "react-router-dom";
import "./pageone.css";

const PageOne = () => {
  return (
    <div>
      <div className="GeneralView">
        <div className="TitleView">
          <div className="NumberView">1</div>
          <div className="NameView">Some Texts go in here</div>
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
        <div className="ContentView">
          <div className="IconContent"></div>
          <div className="TextPath">
            <div className="MainTextPath"></div>
            <div className="SubTextPath"></div>
          </div>
        </div>
        <div className="ShadowPath">
          <div className="NumberView1">2</div>
          <div className="NameView">Some Texts go in here</div>
        </div>
        <div className="ShadowPath">
          <div className="NumberView1">3</div>
          <div className="NameView">Some Texts go in here</div>
        </div>
        <div className="ShadowPath">
          <div className="NumberView1">4</div>
          <div className="NameView">Some Texts go in here</div>
        </div>
        <div className="Footerpath">
          <div>1/7</div>

          <div className="MovePath">
            <div className="Previous">
              <Link to="/">P</Link>
            </div>
            <div className="Next">
              <Link to="/pg2">N</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageOne;
