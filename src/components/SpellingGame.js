import { MdArrowBackIosNew } from "react-icons/md"
import { useNavigate } from "react-router-dom"
import {sounds} from "./Sounds"
import { useState } from "react"

const SpellingGame = () => {
    const navigate = useNavigate()

    const cardDeck =  [
            {word: "cat", sounds: ["c", "a", "t"], image: "cat"},
            {word: "map", sounds: ["m", "a", "p"], image: "map"},
            {word: "fox", sounds: ["f", "o", "x"], image: "fox"},
            {word: "bus", sounds: ["b", "u", "s"], image: "bus"},
            {word: "duck", sounds: ["d", "u", "ck"], image: "duck"},
        ]

    function setupDeck(input) {
        const localSounds = [...sounds]
        // Shuffle sounds from sound array
        localSounds.sort(() => Math.random() - 0.5)
        // Pick 2 random sounds that are unique
       let randomSounds = []
       while(randomSounds.length < 3) {
            const pickedSound = localSounds.pop()
            if (!input.sounds.find(sound => sound === pickedSound.sound)) {
                randomSounds.push(pickedSound.letter)
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

    return ( 
        <section>
                <header>    
                <p onClick={() => navigate(-1)}><MdArrowBackIosNew className="back-arrow" /></p>
                <h1>Phase Two Quiz</h1>
            </header>
          
                <div className="quiz-container">
                    <div className="quiz-image-container">
                        <img className="quiz-image" src={`../images/quiz-images/${deck[currentCard].image}.png`} alt={deck[currentCard].image} />
                    </div>
                    <div className="quiz-options">
                    {deck[currentCard].sounds.map((answer, index) => {               
                                                     return (
                                                         <div className="sound">
                                                             <p>{answer.found ? answer.sound : "_"}</p>
                                                     </div>
                                                     )})
                        }
                    </div>
                    <div className="spelling-sounds">
                    {deck[currentCard].cards.map((options, index) => {               
                                                     return (
                                                         <div className="sound">
                                                             <p>{options}</p>
                                                     </div>
                                                     )})
                        }
                    </div>
                    <button className="next-btn">Next</button>    
                </div>
                <footer>Icons made by <a href="https://www.flaticon.com/authors/freepik">Freepik</a> from <a href="www.flaticon.com">www.flaticon.com</a></footer>
    
        </section> 
    );
}
 
export default SpellingGame;