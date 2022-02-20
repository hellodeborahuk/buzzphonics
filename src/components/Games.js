import { Link, useNavigate } from "react-router-dom";
import {MdArrowBackIosNew } from "react-icons/md"
import Points from "./Points";

const Games = () => {
    const navigate = useNavigate()
    return ( 
        <section>
             <header>    
             <p onClick={() => navigate(-1)}><MdArrowBackIosNew className="back-arrow" /></p>                <h1>Games</h1>
            </header>
                   <Link to="phaseTwoQuiz">
                  <div className="games-button one">
                        <h2>Quiz</h2>
                        <p>Phase 2</p>
                    </div>
                  </Link>
                  <Link to="matchingGame">
                  <div className="games-button two">
                        <h2>Matching Pairs</h2>
                        <p>Phase 2</p>
                   </div>
                  </Link>
                  <Link to="readingGame">
                  <div className="games-button three">
                        <h2>Reading Game</h2>
                        <p>Phase 3</p>
                   </div>
                  </Link>
                  <Points />
        </section>
     );
}
 
export default Games;