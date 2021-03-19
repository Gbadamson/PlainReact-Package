import React from "react";
import { Link } from "react-router-dom";
import "./payment.css";

const Payment = () => {
  return (
    <div>
      <div className="PaymentBg">
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
        <div className="CardType">
          <div className="CreditCard">Credit card Info</div>
          <div className="CardTypeImg">
            <div className="CardPic">Visa</div>
            <div className="CardPic">Master</div>
            <div className="CardPic">Kuda</div>
          </div>
        </div>
        <div className="CardNUmber">
          <div className="NumberMark">
            <div>123456789</div>
            <div> ✔️</div>
          </div>
          <div className="Hor">
            <hr />
          </div>
        </div>
        <div className="Sender">
          <div>Card Details: </div>
          <div className="CardName">
            <div>PersonName</div>
            <div>
              <hr />
            </div>
            <div>RedLine</div>
          </div>
        </div>
        <div className="Validate">
          <div className="Expiry">
            <div>Expiry</div>
            <div className="NumberStyle">
              <div>08/21</div>
              <div> ✔️</div>
            </div>
            <div className="Hori">
              <hr />
            </div>
          </div>
          <div className="CCV">
            <div className="Expiry">
              <div>CCV</div>
              <div className="NumberStyle">
                <div>245</div>
                <div> ✔️</div>
              </div>
              <div className="Hori">
                <hr />
              </div>
            </div>
          </div>
        </div>
        <div className="MiniText">Hello d</div>
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
          <Link to="/done">Complete Purchase</Link>
        </div>
      </div>
    </div>
  );
};

export default Payment;
