import graph from "./graph3.png";
import facebook from "./facebook.png";
import instagram from "./instagram.png";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const tabs = ["Products", "Customers", "Pricing", "Learn"];
  return (
    <div className="app">
      <div className="part1">
        <header className="header">
          <div className="headerPart1">
            <div className="logoText">Finpay</div>
            <nav className="navSection">
              {tabs.map((n) => {
                return <a href="#">{n}</a>;
              })}
            </nav>
          </div>
          <div className="headerPart2">
            <button className="loginButton">Login</button>
            <button className="signinButton">Sign Up</button>
          </div>
        </header>

        <section className="hero">
          <div className="heroLeft">
            <h1>
              Get paid early
              <br />
              save automatically
              <br />
              all your pay.
            </h1>
            <p>
              Supports small businesses with simple invoicing, powerful
              integrations, and cash flow management tools.
            </p>
            <div className="emailBox">
              <input type="text" placeholder="Your email" />
              <button>Get Started</button>
            </div>
            <div className="brands">
              <span>Klarna</span>
              <span>Coinbase</span>
              <span>Instacart</span>
            </div>
          </div>

          <div className="heroRight">
            <h2>Dejan Inhouse</h2>
            <div className="amountInfo">
              <div>Invoice</div>
              <div className="amount">$1,876,580</div>
              <div>April 21,2025</div>
            </div>
            <div className="paymentInfo">
              <div className="activeOption">
                <span>Credit Card</span>
                <input type="radio" name="plan" value="plus" checked={true} />
              </div>
              <div>
                <span>Bank Account</span>
              </div>
            </div>
            <button className="payBtn">Pay</button>
          </div>
        </section>
      </div>
      <div className="part2">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h6 className="futureText">FUTURE PAYMENT</h6>
          <div className="futurePaymentCintent">
            <div className="leftText">
              Experience that grows with your scale
            </div>
            <div className="rightContent">
              Design a financial oprating system that works for your bussiness
              and streamlined flow managemnet
            </div>
          </div>
        </div>
        <section class="features">
          <div class="feature">
            <h3>Free transfers</h3>
            <p>
              Create a financial experience and automate repeat purchases by
              scheduling recurring payments.
            </p>
          </div>
          <div class="feature">
            <h3>Multiple account</h3>
            <p>
              Run your operations with cash from your account and generate yield
              on funds stored in your account.
            </p>
          </div>
          <div class="feature">
            <h3>Unmatched security</h3>
            <p>
              Securely manage your finances with organization-wide MFA,
              card-locking, and account-level controls.
            </p>
          </div>
        </section>
      </div>
      <div className="part3">
        <div className="card1">
          <div
            style={{ fontSize: "52px", color: "#0a2540", fontWeight: "bold" }}
          >
            3k+
          </div>
          <div className="content">Bussiness already running on Finpay</div>
        </div>
        <div className="card2">
          <div className="content">Instant Withdraw your funds at any time</div>
        </div>
        <div className="card3">
          <div>
            <h1>No asset volatility</h1>
            <div style={{ width: "250px", color: "#555" }}>
              Generate returns on your cash reverse without making any
              investments.
            </div>
          </div>
          <div>
            <img src={graph} alt="graph" />
          </div>
        </div>
      </div>
      <div className="footerSection">
        <div className="footer">
          <div className="logoText">Finpay</div>
          <div className="footerPart1">
            <div className="linkSection">
              <div className="subHeader">Solutions</div>
              <a href="#" className="link">
                Small Bussiness
              </a>
              <a href="#" className="link">
                Freelancers
              </a>
              <a href="#" className="link">
                Tasks
              </a>
            </div>
            <div className="linkSection">
              <div className="subHeader">Comapny</div>
              <a href="#" className="link">
                About Us
              </a>
              <a href="#" className="link">
                Career
              </a>
              <a href="#" className="link">
                Contact us
              </a>
            </div>
            <div className="linkSection">
              <div className="subHeader">Learn</div>
              <a href="#" className="link">
                Ebooks
              </a>
              <a href="#" className="link">
                Guides
              </a>
              <a href="#" className="link">
                Templates
              </a>
            </div>
          </div>
          <div className="followUs">
            <div className="subHeader">Follow us on</div>
            <div>
              <img src={facebook} alt="facebook" height="50px" width="50px" />
              <img src={instagram} alt="instagram" height="50px" width="50px" />
            </div>
          </div>
        </div>
        <div className="copyRightText">@Finpay 2024 All Rights Reserved</div>
      </div>
    </div>
  );
}

export default App;
