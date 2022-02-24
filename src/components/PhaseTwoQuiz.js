import { MdArrowBackIosNew } from "react-icons/md"
import { useNavigate } from "react-router-dom"
import { useState, useContext } from "react"
import { pointsContext } from "./PointsProvider";

const PhaseTwoQuiz= () => {
    const navigate = useNavigate()

    function shuffleSounds() {
        return [
            {
                id: 0,
                image: "duck",
                alt: "duck",
                answerOptions: [
                    {answerText: "d", isCorrect: true},
                    {answerText: "f", isCorrect: false},
                    {answerText: "ck", isCorrect: false},
                ]
            },
            {
                id: 1,
                image: "king",
                alt: "king",
                answerOptions: [
                    {answerText: "k", isCorrect: true},
                    {answerText: "h", isCorrect: false},
                    {answerText: "ck", isCorrect: false},
                ]
            },
            {
                id: 2,
                image: "umbrella",
                alt: "umbrella",
                answerOptions: [
                    {answerText: "a", isCorrect: false},
                    {answerText: "u", isCorrect: true},
                    {answerText: "b", isCorrect: false},
                ]
            },
            {
                id: 3,
                image: "igloo",
                alt: "igloo",
                answerOptions: [
                    {answerText: "p", isCorrect: false},
                    {answerText: "m", isCorrect: false},
                    {answerText: "i", isCorrect: true},
                ]
            },
            {
                id: 4,
                image: "leaf",
                alt: "leaf",
                answerOptions: [
                    {answerText: "l", isCorrect: true},
                    {answerText: "n", isCorrect: false},
                    {answerText: "e", isCorrect: false},
                ]
            },
            {
                id: 5,
                image: "map",
                alt: "map",
                answerOptions: [
                    {answerText: "t", isCorrect: false},
                    {answerText: "m", isCorrect: true},
                    {answerText: "p", isCorrect: false},
                ]
            },
            {
                id: 6,
                image: "octopus",
                alt: "octopus",
                answerOptions: [
                    {answerText: "o", isCorrect: true},
                    {answerText: "b", isCorrect: false},
                    {answerText: "d", isCorrect: false},
                ]
            },
            {
                id: 7,
                image: "bus",
                alt: "bus",
                answerOptions: [
                    {answerText: "s", isCorrect: false},
                    {answerText: "f", isCorrect: false},
                    {answerText: "b", isCorrect: true},
                ]
            },
            {
                id: 8,
                image: "pig",
                alt: "pig",
                answerOptions: [
                    {answerText: "t", isCorrect: false},
                    {answerText: "g", isCorrect: false},
                    {answerText: "p", isCorrect: true},
                ]
            },
            {
                id: 9,
                image: "socks",
                alt: "socks",
                answerOptions: [
                    {answerText: "s", isCorrect: true},
                    {answerText: "k", isCorrect: false},
                    {answerText: "o", isCorrect: false},
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
                <h1>Phase Two Quiz</h1>
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
                        <img className="quiz-image" src={`../images/quiz-images/${quizQuestions[currentQuestion].image}.png`} alt={quizQuestions[currentQuestion].alt} />
                    </div>
                    <div className="quiz-options">
                        { quizQuestions[currentQuestion].answerOptions.map((answer, index) => {    
                                                     
                            return (
                                <div className="sound" onClick={() => handleAnswer(answer.isCorrect)}>
                                <p>{answer.answerText}</p>
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
 
export default PhaseTwoQuiz