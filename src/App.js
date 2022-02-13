import './App.css';
import { FaDove } from 'react-icons/fa';
import {FaFeatherAlt} from "react-icons/fa"
import {GiTwirlyFlower} from "react-icons/gi"
import { Link } from "react-router-dom";
import Greeting from './components/Greeting';
import Points from "./components/Points"
import { pointsContext } from "./components/PointsProvider";
import { useContext } from 'react';

function App() {
  const [points, setPoints] = useContext(pointsContext)
  return (
    <div className="App">
      <main>
              <h1>Phonics audio guide</h1>
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
