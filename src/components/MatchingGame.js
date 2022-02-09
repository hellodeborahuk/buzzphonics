import { useState } from "react";
import {MdArrowBackIosNew} from "react-icons/md"
import { useNavigate } from "react-router-dom"

const MatchingGame = () => {
  const navigate = useNavigate();
    const sounds = [
        { id: 1, letter: "h", icon: "hat" },
        { id: 2, letter: "f", icon: "frog" },
        { id: 3, letter: "g", icon: "guitar" },
        { id: 4, letter: "c", icon: "king" },
        { id: 5, letter: "t", icon: "tap" },
        { id: 6, letter: "s", icon: "sun" }
      ];

   const [openedCard, setOpenedCard] = useState([]);
   const [matched, setMatched] = useState([]);
   const [pairOfSounds] = useState([...sounds.map((sound) => {
    return {id: sound.id, letter: sound.letter}
}), ...sounds.map((sound) => {
    return {id: sound.id, icon: sound.icon}
})].sort(() => Math.random() - 0.5));

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
        </section>
     );
}
 
export default MatchingGame;