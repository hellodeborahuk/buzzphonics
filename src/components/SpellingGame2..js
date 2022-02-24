import { MdArrowBackIosNew } from "react-icons/md"
import { useNavigate } from "react-router-dom"
import {sounds} from "./Sounds"
import { useState, useContext } from "react"
import { pointsContext } from "./PointsProvider";

const SpellingGame2 = () => {
    const navigate = useNavigate()

    const cardDeck =  [
            {word: "fox", sounds: ["f", "o", "x"]},
            {word: "shell", sounds: ["sh", "e", "ll"]},
            {word: "queen", sounds: ["qu", "ee", "n"]},
            {word: "tree", sounds: ["t", "r", "ee"]},
            {word: "cow", sounds: ["c", "o", "w"]},
            {word: "star", sounds: ["s", "t", "ar"]},
            {word: "book", sounds: ["b", "oo", "k"]},
            {word: "boat", sounds: ["b", "oa", "t"]},
            {word: "sheep", sounds: ["sh", "ee", "p"]},
            {word: "fish", sounds: ["f", "i", "sh"]},
            {word: "ring", sounds: ["r", "i", "ng"]},
        ]

    function setupDeck(input) {
        const localSounds = [...sounds]
        // Shuffle sounds from sound array
        localSounds.sort(() => Math.random() - 0.5)
        // Pick 3 random sounds that are unique
        let randomSounds = []
        let limit = 6 - input.sounds.length
        if (limit > 0) {
         while(randomSounds.length < limit) {
                 const pickedSound = localSounds.pop()
                 if (!input.sounds.find(sound => sound === pickedSound.sound)) {
                     randomSounds.push(pickedSound.letter)
                 }
         }
     }

       let ret = {...input}
       ret.sounds = ret.sounds.map(item => {
           return {sound: item, found: false}
       })
       ret.cards = [...input.sounds, ...randomSounds]
       ret.cards.sort(() => Math.random() - 0.5)
       console.log(ret)
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
                <h1>Spelling Game 2</h1>
            </header>
            {displayEndPage ? (
                <div className="well-done">   
                <h1>Well done!</h1>
                   <span className="well-done-icon animate-beat">🎉</span>
                   <button className="new-game-btn" onClick={newGame}>New Game</button>

                </div>
            ) : (
                <>
                <div className="quiz-container">
                    <div className="quiz-image-container">
                        <img className="quiz-image" src={`../images/phase3-images/${deck[currentCard].word}.png`} alt={deck[currentCard].word} />
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
 
export default SpellingGame2;