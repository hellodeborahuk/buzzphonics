import { useState, useContext } from "react";
import {MdArrowBackIosNew} from "react-icons/md"
import { useNavigate } from "react-router-dom"
import { pointsContext } from "./PointsProvider";

const MatchingGame = () => {
  const navigate = useNavigate();
  const incrementalPoints = useContext(pointsContext)[1]

  const sounds = [
        { id: 1, letter: "h", icon: "hat" },
        { id: 2, letter: "f", icon: "frog" },
        { id: 3, letter: "g", icon: "guitar" },
        { id: 4, letter: "c", icon: "cat" },
        { id: 5, letter: "t", icon: "tap" },
        { id: 6, letter: "s", icon: "sun" },
        { id: 7, letter: "p", icon: "penguin" },
        { id: 8, letter: "u", icon: "umbrella" },
        { id: 9, letter: "b", icon: "bin" },
        { id: 10, letter: "e", icon: "egg" },
        { id: 11, letter: "r", icon: "rat" },
        { id: 12, letter: "a", icon: "ant" }
      ];


  function shuffleCards() {
    const shuffledDeck = sounds.sort(() => Math.random() - 0.5).slice(0,6);

    return [...shuffledDeck.map((sound) => {
      return {id: sound.id, letter: sound.letter}
      }), ...shuffledDeck.map((sound) => {
      return {id: sound.id, icon: sound.icon}
      })].sort(() => Math.random() - 0.5)
   }

   const [openedCard, setOpenedCard] = useState([]);
   const [matched, setMatched] = useState([]);
   const [finished, setFinished] = useState(null)
   const [pairOfSounds, setPairOfSounds] = useState(shuffleCards);

  function newGame() {
    setOpenedCard([])
    setMatched([])
    setFinished(null)
    setPairOfSounds(shuffleCards())
  }

    function flipCard(index) {
        setOpenedCard((opened) => {
          if (openedCard.length === 2) {return opened}
          const merged = [...opened, index]
        
          if (merged.length < 2) {return merged;}
      
          const firstMatched = pairOfSounds[merged[0]];
          const secondMatched = pairOfSounds[merged[1]];
      
          if (secondMatched && firstMatched.id === secondMatched.id) {
            setMatched([...matched, firstMatched.id]);
          }
      
          if (merged.length === 2) setTimeout(() => setOpenedCard([]), 1000);
          
          const wellDone = (
              <>
                <h1 className="finished-game">Well done! 🎉</h1>
                <button className="new-game-btn" onClick={newGame}>Play again</button>
                <div className="back-to-games-btn matching-game-games-btn" onClick={() => navigate(-1)}>Back to Games</div>
              </>
            )
          if (matched.length === 5) {
              setFinished(wellDone)
              incrementalPoints()
          }

          return merged
        });
        
    }

    return ( 
        <section>
             <header>    
                <p onClick={() => navigate(-1)}><MdArrowBackIosNew className="back-arrow" /></p>
                <h1>Matching sounds</h1>
            </header>
            <div className="cards">
                {pairOfSounds.map((sound, index) => {
                   let isFlipped = false;
                   if (openedCard.includes(index)) isFlipped = true;
                   if (matched.includes(sound.id)) isFlipped = true;
                   return (
                    <div
                      className={`sound-card ${isFlipped ? "flipped" : ""} `}
                      key={index}
                      onClick={() => flipCard(index)}
                    >
                      <div className="inner">
                        <div className="front">
                          {(sound.letter) ? <p>{sound.letter}</p> : <img
                            src={`../images/${sound.icon}.png`}
                            alt={sound.letter}
                            className="sound-icon"
                            width="100"
                          />}
                        </div>
                        <div className="back"></div>
                      </div>
                    </div>
                  );
                })}
            </div>
            {finished}
            <footer>Icons made by <a href="https://www.flaticon.com/authors/freepik">Freepik</a> from <a href="www.flaticon.com">www.flaticon.com</a></footer>
        </section>
     );
}
 
export default MatchingGame;