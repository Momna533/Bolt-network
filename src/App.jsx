import sherlock from "./assets/sherlock.webp";
import logo from "./assets/logo.svg";
const App = () => {
  return (
    <div className="app">
      <header>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
      </header>
      <main>
        <section>
          <div className="section__entry">
            <img src={sherlock} alt="sherlock" />
          </div>
          <div className="section__entry">
            <h3 className="section__entry__title">
              <span>Sherlock </span> <br />
              The empty hearse
            </h3>
            <p className="section__entry__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="section__entry">
            <ul className="list">
              <li className="list__item">
                <span>Date:</span> Dec 31, 2014
              </li>
              <li className="list__item">
                <span>On air:</span> Wednesday
              </li>
              <li className="list__item">
                <span>Time:</span> 9:00 PM
              </li>
              <li className="list__item">
                <span>Season: </span>3
              </li>
              <li className="list__item">
                <span>Genre:</span> Crime drama
              </li>
            </ul>
          </div>
        </section>
      </main>
      <footer>
        <div className="footer__entry">
          <h3 className="footer__entry__title">Bolt</h3>
          <p>Careers</p>
          <p>Terms</p>
          <p>Help</p>
        </div>
        <div className="footer__entry">
          <h3 className="footer__entry__title">More Bolt</h3>
          <p>Gift Cards</p>
          <p>Traiers</p>
        </div>
        <div className="footer__entry">
          <h3 className="footer__entry__title">News</h3>
          <p>Blog</p>
          <p>Twitter</p>
          <p>Youtube</p>
          <p>Google+</p>
          <p>Facebook</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
