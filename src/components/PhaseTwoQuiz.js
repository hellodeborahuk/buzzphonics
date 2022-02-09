import { MdArrowBackIosNew } from "react-icons/md"
import { Link } from "react-router-dom"
import { useState } from "react"

const PhaseTwoQuiz= () => {
    const quizQuestions = [
        {
            id: 0,
            image: "dog",
            alt: "dog",
            answerOptions: [
                {answerText: "d", isCorrect: true},
                {answerText: "f", isCorrect: false},
                {answerText: "ck", isCorrect: false},
            ]
        },
        {
            id: 1,
            image: "king",
            alt: "crown",
            answerOptions: [
                {answerText: "c", isCorrect: true},
                {answerText: "h", isCorrect: false},
                {answerText: "ck", isCorrect: false},
            ]
        },
        {
            id: 2,
            image: "frog",
            alt: "frog",
            answerOptions: [
                {answerText: "a", isCorrect: false},
                {answerText: "f", isCorrect: true},
                {answerText: "p", isCorrect: false},
            ]
        },
    ]
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [displayEndPage, setdisplayEndPage] = useState(false)
    const [answered, setAnswered] = useState()

    const alternatingColor = ["var(--pink)", "var(--green)", "var(--yellow)", "var(--blue)", "var(--light-blue)", "var(--purple)"]
    const randomElement = () => {
        return {backgroundColor: alternatingColor[Math.floor(Math.random() * alternatingColor.length)]}
    }
    const handleNextBtnClick = () => {
        setAnswered()
        const nextQuestion = currentQuestion + 1
        if (nextQuestion < quizQuestions.length) {
            setCurrentQuestion(nextQuestion)
        }
        else {
            setdisplayEndPage(true)
        }
    }

    const handleAnswer = (isCorrect) => {
        const trueAnswer = "Correct ✅"
        const falseAnswer = "Try again ❌"
        if (isCorrect === true) {
            setAnswered(trueAnswer)
        } else {
            setAnswered(falseAnswer)
            setTimeout(() => { setAnswered("") }, 800)
        }
        
     }

    return ( 
        <section>
                <header>    
                <Link to="/"><MdArrowBackIosNew className="back-arrow" /></Link>
                <h1>Phase Two Quiz</h1>
            </header>
            {displayEndPage ? (
                <div className="well-done">
                
                    <h1>Well done!</h1>
                   <span className="well-done-icon animate-beat">🎉</span>
                
                </div>
            ) : (
                <>
                <div className="quiz-container">
                    <div className="quiz-image-container" style={randomElement()}>
                        <img className="quiz-image" src={`../images/${quizQuestions[currentQuestion].image}.png`} alt={quizQuestions[currentQuestion].alt} />
                    </div>
                    <div className="quiz-options">
                        { quizQuestions[currentQuestion].answerOptions.map((answer, index) => {    
                                                     
                            return (
                                <div className="sound" style={randomElement()}  onClick={() => handleAnswer(answer.isCorrect)}>
                                <p>{answer.answerText}</p>
                            </div>
                            )})
                        }
                    </div>
                    <p className="quiz-tip">{answered}</p>
                    <button className="next-btn" onClick={handleNextBtnClick}>Next</button>    
                </div>
            </>
            )}
        </section> 
    );
}
 
export default PhaseTwoQuiz