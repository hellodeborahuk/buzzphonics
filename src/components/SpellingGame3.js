import { MdArrowBackIosNew } from "react-icons/md"
import { useNavigate } from "react-router-dom"
import {sounds} from "./Sounds"
import { useState, useContext } from "react"
import { pointsContext } from "./PointsProvider";

const SpellingGame3 = () => {
    const navigate = useNavigate()

    const cardDeck =  [
            {word: "tray", sounds: ["t", "r", "ay"]},
            {word: "beads", sounds: ["b", "ea", "d", "s"]},
            {word: "bird", sounds: ["b", "ir", "d"]},
            {word: "bone", sounds: ["b", "o", "n", "e"]},
            {word: "boy", sounds: ["b", "oy"]},
            {word: "cake", sounds: ["c", "a", "k", "e"]},
            {word: "cloud", sounds: ["c", "l", "ou", "d"]},
            {word: "cube", sounds: ["c", "u", "b", "e"]},
            {word: "dolphin", sounds: ["d", "o", "l", "ph", "i", "n"]},
            {word: "flute", sounds: ["f", "l", "u", "t", "e"]},
            {word: "gene", sounds: ["g", "e", "n", "e"]},
            {word: "glue", sounds: ["g", "l", "ue"]},
            {word: "money", sounds: ["m", "o", "n", "ey"]},
            {word: "paw", sounds: ["p", "aw"]},
            {word: "pew", sounds: ["p", "ew"]},
            {word: "queue", sounds: ["qu", "e", "ue"]},
            {word: "sauce", sounds: ["s", "au", "c", "e"]},
            {word: "screw", sounds: ["s", "c", "r", "ew"]},
            {word: "slide", sounds: ["s", "l", "i", "d", "e"]},
            {word: "tie", sounds: ["t", "ie"]},
            {word: "toe", sounds: ["t", "oe"]},
            {word: "wheel", sounds: ["wh", "ee", "l"]},
        ]

// sounds comes from Sounds.js, create new one with all those plus phase 5.

    function setupDeck(input) {
        const localSounds = [...sounds]
        // Shuffle sounds from sound array
        localSounds.sort(() => Math.random() - 0.5)
        // Pick 3 random sounds that are unique
        let uniqueLocalSounds = new Set(input.sounds)
        while(uniqueLocalSounds.size < 6) {
                const pickedSound = localSounds.pop()
                uniqueLocalSounds.add(pickedSound.letter)
            }

        // copy input into ret, so that we don't edit input    
        let ret = {...input}

        // sounds is equal to the sounds in the word, map them to say they've not been found
        // when the player clicks on the sound, we check to see if the next sound in the word equals it
        ret.sounds = ret.sounds.map(item => {
              return {sound: item, found: false}
            })
        // convert set into array and shuffle cards
        ret.cards = [...uniqueLocalSounds]
        ret.cards.sort(() => Math.random() - 0.5)

        // return data for this round
        return ret
    } 

    const [deck, setDeck] = useState(
        cardDeck.sort(() => Math.random() - 0.5).slice(0,3).map(item => setupDeck(item))
    )
    const [currentCard, setCurrentCard] = useState(0)
    const [currentPosition, setCurrentPosition] = useState(0)
    const [cantContinue, setCantContinue] = useState(true)
    const [displayEndPage, setdisplayEndPage] = useState(false)
    const incrementalPoints = useContext(pointsContext)[1]

    const handleCardClick = (sound) => {
        const current = deck[currentCard]
        const nextSound = current.sounds[currentPosition]

        if (nextSound.sound === sound) {
            deck[currentCard].sounds[currentPosition].found = true;
            setCurrentPosition(currentPosition + 1)
        }
        // check if we have completed current word
        if (currentPosition >= deck[currentCard].sounds.length - 1) {
            setCantContinue(false)
        }
    }

    const handleNext = () => {
        // check current deck is complete
        if (currentCard < deck.length - 1) {
          setCurrentCard(currentCard + 1)
          setCurrentPosition(0)
          setCantContinue(true)
        } else {
          setdisplayEndPage(true)
          incrementalPoints()
        }
    }

    const newGame = () => {
        setDeck(cardDeck.sort(() => Math.random() - 0.5).slice(0,3).map(item => setupDeck(item)))
        setCurrentCard(0)
        setCurrentPosition(0)
        setCantContinue(true)
        setdisplayEndPage(false)
    }

    return ( 
        <section>
                <header>    
                <p onClick={() => navigate(-1)}><MdArrowBackIosNew className="back-arrow" /></p>
                <h1>Spelling Game 3</h1>
            </header>
            {displayEndPage ? (
                <div className="well-done">   
                <h1>Well done!</h1>
                   <span className="well-done-icon animate-beat">🎉</span>
                   <button className="new-game-btn" onClick={newGame}>Play again</button>
                   <div className="back-to-games-btn" onClick={() => navigate(-1)}>Back to Games</div>
                </div>
            ) : (
                <>
                <div className="quiz-container">
                    <div className="quiz-image-container">
                        <img className="quiz-image" src={`../images/phase5-images/${deck[currentCard].word}.png`} alt={deck[currentCard].word} />
                    </div>
                    <div className="quiz-options">
                    {deck[currentCard].sounds.map((answer, index) => {               
                                                     return (
                                                         <div className="sound" key={`sound_${index}`}>
                                                             <p>{answer.found ? answer.sound : "_"}</p>
                                                     </div>
                                                     )})
                        }
                    </div>
                    <div className="spelling-sounds">
                    {deck[currentCard].cards.map((options, index) => {               
                                                     return (
                                                         <div className="sound" key={`spelling${index}`} onClick={() => handleCardClick(options)}>
                                                             <p>{options}</p>
                                                     </div>
                                                     )})
                        }
                    </div>
                    <button className="next-btn" disabled={cantContinue} onClick={handleNext}>Next</button>    
                </div>
                <footer>Icons made by <a href="https://www.flaticon.com/authors/freepik">Freepik</a> from <a href="www.flaticon.com">www.flaticon.com</a></footer>
               </>
                )}
        </section> 
    );
}
 
export default SpellingGame3;