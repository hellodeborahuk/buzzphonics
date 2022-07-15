import './App.css';
import { FaDove } from 'react-icons/fa';
import {FaFeatherAlt} from "react-icons/fa"
import {GiTwirlyFlower} from "react-icons/gi"
import { Link } from "react-router-dom";
import Greeting from './components/Greeting';
import Points from "./components/Points"

function App() {
  return (
    <div className="App">
      <main>
           <div className="heading"><img src="./images/bee-logo.png" alt="bee logo" className="title-image" /><h1 className="title">buzz<span className="title-span">phonics</span></h1></div>
              <Greeting />
              <section className="home-section">
                  <Link to="phaseTwo">
                    <div className="phase-two">
                      <div>
                        <h2>Phase 2</h2>
                        <p>19 Letters</p>
                      </div>
                      <FaDove className="dove"/>
                    </div>
                  </Link>
                  <Link to="phaseThree">
                  <div className="phase-three">
                      <div> 
                        <h2>Phase 3</h2>
                        <p>25 Letters</p>
                      </div>
                      <FaFeatherAlt className="feather" />
                    </div>
                  </Link>
                  <Link to="phaseFive">
                    <div className="phase-five">
                      <div>
                        <h2>Phase 5</h2>
                        <p>? Sounds</p>
                      </div>
                      <FaFeatherAlt className="feather" />
                    </div>
                  </Link>
                  <Link to="games">
                  <div className="quiz-button">
                      <div> 
                        <h2>Games</h2>
                        <p>Practice your sounds</p>
                      </div>
                      <GiTwirlyFlower className="feather" />
                    </div>
                  </Link>
              </section>
        <Points />
          </main>
    </div>
  );
}

export default App;
