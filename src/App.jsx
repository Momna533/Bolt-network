import logo from "./assets/logo.svg";
import Section from "./components/Section";
import sherlock from "./assets/sherlock.webp";
import arrested_development from "./assets/arrested_development.webp";

const App = () => {
  return (
    <div className="app">
      <header>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
      </header>
      <main>
        <Section
          img={sherlock}
          alt="sherlock"
          text1="Sherlock"
          text2="The empty hearse"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
est laborum."
          date="Dec 31, 2014"
          day="Wednesday"
          time="9:00 PM"
          season="3"
          genre="Crime drama"
        />
        <Section
          img={arrested_development}
          alt="arrested_development"
          text1="Arrested Development"
          text2="RIGHTEOUS BROTHERS"
          text="The model home collapses. Tobias and Kitty head to Las Vegas together."
          date="Dec 31, 2014"
          day="Wednesday"
          time="11:00 PM"
          season="2"
          genre="Sitcom"
        />
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
