import { MdArrowBackIosNew } from "react-icons/md"
import { useNavigate } from "react-router-dom"
import { useState, useContext } from "react"
import { pointsContext } from "./PointsProvider";

const ReadingGame2 = () => {
    const navigate = useNavigate()

    function shuffleSounds() {
        return [
            {
                id: 0,
                word: "bike",
                answerOptions: [
                    {answerImg: "bike", isCorrect: true},
                    {answerImg: "cloud", isCorrect: false},
                    {answerImg: "bone", isCorrect: false},
                ]
            },
            {
                id: 1,
                word: "glue",
                answerOptions: [
                    {answerImg: "screw", isCorrect: false},
                    {answerImg: "glue", isCorrect: true},
                    {answerImg: "skirt", isCorrect: false},
                ]
            },
            {
                id: 2,
                word: "snake",
                answerOptions: [
                    {answerImg: "snake",  isCorrect: true},
                    {answerImg: "slide", isCorrect: false},
                    {answerImg: "skirt", isCorrect: false},
                ]
            },
            {
                id: 3,
                word: "sauce",
                answerOptions: [
                    {answerImg: "leaf", isCorrect: false},
                    {answerImg: "phone", isCorrect: false},
                    {answerImg: "sauce", isCorrect: true},
                ]
            },
            {
                id: 4,
                word: "pew",
                answerOptions: [
                    {answerImg: "slide", isCorrect: false},
                    {answerImg: "trolley", isCorrect: false},
                    {answerImg: "pew", isCorrect: true},
                ]
            },
            {
                id: 5,
                word: "toe",
                answerOptions: [
                    {answerImg: "toe", isCorrect: true},
                    {answerImg: "cake", isCorrect: false},
                    {answerImg: "trolley", isCorrect: false},
                ]
            },
            {
                id: 6,
                word: "bird",
                answerOptions: [
                    {answerImg: "bone", isCorrect: false},
                    {answerImg: "skirt", isCorrect: false},
                    {answerImg: "bird", isCorrect: true},
                ]
            },
            {
                id: 7,
                word: "trolley",
                answerOptions: [
                    {answerImg: "whale", isCorrect: false},
                    {answerImg: "trolley", isCorrect: true},
                    {answerImg: "phone", isCorrect: false},
                ]
            },
            {
                id: 8,
                word: "phone",
                answerOptions: [
                    {answerImg: "phone", isCorrect: true},
                    {answerImg: "sauce", isCorrect: false},
                    {answerImg: "bone", isCorrect: false},
                ]
            },
            {
                id: 9,
                word: "bone",
                answerOptions: [
                    {answerImg: "skirt", isCorrect: false},
                    {answerImg: "snake", isCorrect: false},
                    {answerImg: "bone", isCorrect: true},
                ]
            },
            {
                id: 10,
                word: "whale",
                answerOptions: [
                    {answerImg: "whale", isCorrect: true},
                    {answerImg: "glue", isCorrect: false},
                    {answerImg: "cake", isCorrect: false},
                ]
            },
            {
                id: 11,
                word: "cloud",
                answerOptions: [
                    {answerImg: "flute", isCorrect: false},
                    {answerImg: "pew", isCorrect: false},
                    {answerImg: "cloud", isCorrect: true},
                ]
            },
            {
                id: 12,
                word: "crayon",
                answerOptions: [
                    {answerImg: "phone", isCorrect: false},
                    {answerImg: "crayon", isCorrect: true},
                    {answerImg: "cake", isCorrect: false},
                ]
            },
            {
                id: 13,
                word: "boy",
                answerOptions: [
                    {answerImg: "boy", isCorrect: true},
                    {answerImg: "bone", isCorrect: false},
                    {answerImg: "bird", isCorrect: false},
                ]
            },
            {
                id: 14,
                word: "cake",
                answerOptions: [
                    {answerImg: "game", isCorrect: false},
                    {answerImg: "glue", isCorrect: false},
                    {answerImg: "cake", isCorrect: true},
                ]
            },
            {
                id: 15,
                word: "skirt",
                answerOptions: [
                    {answerImg: "cube", isCorrect: false},
                    {answerImg: "skirt", isCorrect: true},
                    {answerImg: "slide", isCorrect: false},
                ]
            },
            {
                id: 16,
                word: "game",
                answerOptions: [
                    {answerImg: "cube", isCorrect: false},
                    {answerImg: "game", isCorrect: true},
                    {answerImg: "screw", isCorrect: false},
                ]
            },
            {
                id: 17,
                word: "cube",
                answerOptions: [
                    {answerImg: "flute", isCorrect: false},
                    {answerImg: "cube", isCorrect: true},
                    {answerImg: "cloud", isCorrect: false},
                ]
            },
            {
                id: 18,
                word: "leaf",
                answerOptions: [
                    {answerImg: "cube", isCorrect: false},
                    {answerImg: "leaf", isCorrect: true},
                    {answerImg: "slide", isCorrect: false},
                ]
            },
            {
                id: 19,
                word: "screw",
                answerOptions: [
                    {answerImg: "boy", isCorrect: false},
                    {answerImg: "screw", isCorrect: true},
                    {answerImg: "sauce", isCorrect: false},
                ]
            },
            {
                id: 20,
                word: "flute",
                answerOptions: [
                    {answerImg: "flute", isCorrect: true},
                    {answerImg: "whale", isCorrect: false},
                    {answerImg: "glue", isCorrect: false},
                ]
            },
        ].sort(() => Math.random() - 0.5).slice(0,5)
    }

    const [quizQuestions, setQuizQuestions] = useState(shuffleSounds)
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [displayEndPage, setdisplayEndPage] = useState(false)
    const [answered, setAnswered] = useState()
    const [cantContinue, setCantContinue] = useState(true)
    const incrementalPoints = useContext(pointsContext)[1]

    function newGame() {
        setdisplayEndPage(false)
        setCurrentQuestion(0)
        setQuizQuestions(shuffleSounds())
      }

    const handleNextBtnClick = () => {
        setAnswered()
        setCantContinue(true)
        const nextQuestion = currentQuestion + 1
        if (nextQuestion < quizQuestions.length) {
            setCurrentQuestion(nextQuestion)
        }
        else {
            setdisplayEndPage(true)
            incrementalPoints()
        }
    }

    const handleAnswer = (isCorrect) => {
        const trueAnswer = "Correct ✅"
        const falseAnswer = "Try again ❌"
        if (isCorrect === true) {
            setCantContinue(false)
            setAnswered(trueAnswer)
        } else {
            setAnswered(falseAnswer)
            setTimeout(() => { setAnswered("") }, 800)
        }      
     }

    return ( 
        <section>
                <header>    
                <p onClick={() => navigate(-1)}><MdArrowBackIosNew className="back-arrow" /></p>
                <h1>Reading game</h1>
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
                    <div className="reading-game-word">
                        <div>{quizQuestions[currentQuestion].word}</div>
                    </div>
                    <div className="quiz-options">
                        { quizQuestions[currentQuestion].answerOptions.map((answer, index) => {                     
                            return (
                            <div className="sound reading-card" onClick={() => handleAnswer(answer.isCorrect)}>
                                <img className="reading-images" src={`../images/phase5-reading/${answer.answerImg}.png`} alt={answer.answerImg} />
                            </div>
                            )})
                        }
                    </div>
                    <p className="quiz-tip">{answered}</p>
                    <button className="next-btn" disabled={cantContinue} onClick={handleNextBtnClick}>Next</button>    
                </div>
                <footer>Icons made by <a href="https://www.flaticon.com/authors/freepik">Freepik</a> from <a href="www.flaticon.com">www.flaticon.com</a></footer>
            </>
            )}
        </section> 
    );
}
 
export default ReadingGame2