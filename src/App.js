import './App.css';
import { FaDove } from 'react-icons/fa';
import {FaFeatherAlt} from "react-icons/fa"
import PhaseTwo from "./components/PhaseTwo"

function App() {
  return (
    <div className="App">
      <main>
              <h1>Phonics audio guide</h1>
              <section>
                  <div className="phase-two">
                      <h2>Phase 2</h2>
                      <p>19 Letters</p>
                      <FaDove className="dove"/>
                  </div>
                  <div className="phase-three">
                      <h2>Phase 3</h2>
                      <p>25 Letters</p>
                      <FaFeatherAlt className="feather" />
                  </div>
              </section>
              <PhaseTwo />
          </main>
    </div>
  );
}

export default App;
