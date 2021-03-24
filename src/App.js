import { FaPinterest, FaInstagram, FaFacebook } from "react-icons/fa";
import CountdownTimer from "./Components/CountdownTimer";

import "./App.css";

const App = () => {
  return (
    <main className="main">
      <Title title="We're launching soon" />
      <CountdownTimer />
      <div className="pattern-bottom">
        <div className="social-container">
          <ul>
            <li>
              <a href="/">
                <FaFacebook size={30} />
              </a>
            </li>
            <li>
              <a href="/">
                <FaPinterest size={30} />
              </a>
            </li>
            <li>
              <a href="/">
                <FaInstagram size={30} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

const Title = ({ title }) => <h2 className="title">{title}</h2>;

export default App;
