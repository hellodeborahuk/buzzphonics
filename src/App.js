import './App.css';
import { FaDove } from 'react-icons/fa';
import {FaFeatherAlt} from "react-icons/fa"
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">

      <main>
              <h1>Phonics audio guide</h1>
              <section>
                  <Link to="phaseTwo">
                    <div className="phase-two">
                      <h2>Phase 2</h2>
                      <p>19 Letters</p>
                      <FaDove className="dove"/>
                  </div>
                  </Link>
                  <div className="phase-three">
                      <h2>Phase 3</h2>
                      <p>25 Letters</p>
                      <FaFeatherAlt className="feather" />
                  </div>
              </section>

          </main>
    </div>
  );
}

export default App;
