import graph from "./graph.jpeg"
import logo from "./logo.svg";
import "./App.css";

function App() {
  const tabs = ["Products", "Customers", "Pricing", "Learn"];
  return (
    // <div className="App">
    //   <div className="headerSection">
    //     <div className="tabs">
    //       <div>
    //         {tabs.map((i) => {
    //           return <div>i</div>;
    //         })}
    //       </div>
    //     </div>
    //     <div className="loginButtons">
    //       <button>Login</button>
    //       <button>Sign Up</button>
    //     </div>
    //   </div>
    //   <div className="section1">
    //     <div>Get paid eraly save automatically all your pay.</div>
    //     <div>Support small bussinesss with simple involving, powerful inte</div>
    //   </div>
    // </div>
    <div className="app">
      <div className="part1">
        <header className="header">
          <div className="headerPart1">
            <div className="logoText">Finpay</div>
            <nav className="navSection">
              <a href="#">Products</a>
              <a href="#">Customers</a>
              <a href="#">Pricing</a>
              <a href="#">Learn</a>
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
        <div style={{ display: "flex", flexDirection: 'column' }}>
          <h6 className="futureText">FUTURE PAYMENT</h6>
          <div style={{ display: 'flex', gap: '100px' }}>
            <div className="leftText">Experience that grows <br /> with your scale</div>
            <div className="rightContent">

              Design a financial oprating system that works for<br /> your bussiness and
              streamlined flow<br /> managemnet
            </div>
          </div>

        </div>
        <section class="features">
          <div class="feature">
            <h3>Free transfers</h3>
            <p>Create a financial experience and automate repeat purchases by scheduling recurring payments.</p>
          </div>
          <div class="feature">
            <h3>Multiple account</h3>
            <p>Run your operations with cash from your account and generate yield on funds stored in your account.</p>
          </div>
          <div class="feature">
            <h3>Unmatched security</h3>
            <p>Securely manage your finances with organization-wide MFA, card-locking, and account-level controls.</p>
          </div>
        </section>
      </div>
      <div className="part3">
        <div className="card1"><div style={{ fontSize: '52px', color: '#0a2540', fontWeight: 'bold' }}>3k+</div><div style={{ fontWeight: 'bold', width: '260px', fontSize: '20px' }}>Bussiness already running on Finpay</div></div>
        <div className="card2"><div style={{ fontWeight: 'bold', width: '300px', fontSize: '20px' }}>Instant Withdraw your funds at any time</div></div>
        <div className="card3">
          <div><h1>No asset volatility</h1><h3>Generate returns on your cash reverse without making any investments.</h3></div>
          <div style={{ flex: 1 }}><img src={graph} alt="graph" width="500px" height="200px" /></div>
        </div>
      </div>
    </div>
  );
}

export default App;

