import { Link, useNavigate } from "react-router-dom";
import {MdArrowBackIosNew } from "react-icons/md"

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
                        <h2>Matching Game</h2>
                        <p>Phase 2</p>
                   </div>
                  </Link>
        </section>
     );
}
 
export default Games;