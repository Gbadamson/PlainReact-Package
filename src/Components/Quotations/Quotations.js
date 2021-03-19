import React from "react";
import { Link } from "react-router-dom";
import "./quotations.css";

const Quotations = () => {
  return (
    <div>
      <div className="QuoteBg">
        <div className="TopPart">
          <div className="TopNv">
            <div className="Toplg">lg</div>
            <div className="Toptxt">Texlg</div>
          </div>
          <div>X</div>
        </div>
        <div className="BigBase">
          <div className="BigLogo">Logo</div>
          <div className="LogoText">Some Text are to go in here</div>
          <div className="SubLogoText">Another set of texts will go here</div>
        </div>
        <div className="CardQuote">
          <div className="TexQuote">
            {" "}
            <div className="QuoteName">Company Name</div>
            <div className="QuoteRate">****</div>
            <div className="QuotePrice">
              <div className="mainPrice">
                <h1>$120</h1>
                <div>/mo</div>
              </div>
              <div className="subPrice">$1440 per year</div>
            </div>
          </div>
          <div className="ButtonMade">
            <Link to="/pay">Buy Now</Link>
          </div>
        </div>
        <div className="CardQuoted">
          <div className="TexQuote">
            {" "}
            <div className="QuoteName">Company Name</div>
            <div className="QuoteRate">****</div>
            <div className="QuotePrice">
              <div className="mainPrice">
                <h1>$125</h1>
                <div>/mo</div>
              </div>
              <div className="subPrice">$1500 per year</div>
            </div>
          </div>
          <div className="ButtonMade">
            <Link to="/pay">Buy Now</Link>
          </div>
        </div>
        <div className="CardQuoted">
          <div className="TexQuote">
            {" "}
            <div className="QuoteName">Company Name</div>
            <div className="QuoteRate">****</div>
            <div className="QuotePrice">
              <div className="mainPrice">
                <h1>$125</h1>
                <div>/mo</div>
              </div>
              <div className="subPrice">$1500 per year</div>
            </div>
          </div>
          <div className="ButtonMade">
            <Link to="/pay">Buy Now</Link>
          </div>
        </div>
        <div className="Summary">Your Summary:</div>
        <div>
          Some Dummy linkable text will go in Right here they are very long Some
          Dummy <Link to="/pg2">linkable</Link> text will go in Right here they
          are very long Some Dummy linkable text will go in Right here they are
          very long Some Dummy linkable text will go in Right here they are very
          long Some Dummy linkable text will go in Right here they are very long
          Some
        </div>
      </div>
    </div>
  );
};

export default Quotations;
