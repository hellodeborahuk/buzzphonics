import { MdArrowBackIosNew } from "react-icons/md"
import { Link } from "react-router-dom"

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
        }
    ]
    const alternatingColor = ["var(--pink)", "var(--green)", "var(--yellow)", "var(--blue)", "var(--light-blue)", "var(--purple)"]

    return ( 
        <section>
                <header>    
                <Link to="/"><MdArrowBackIosNew className="back-arrow" /></Link>
                <h1>Phase Two Quiz</h1>
            </header>
            <div className="quiz-container">
                {
                    quizQuestions.map((quizQuestion, index) => {
                        const randomElement = () => {
                            return {backgroundColor: alternatingColor[Math.floor(Math.random() * alternatingColor.length)]}
                        }
                        return (
                            <>
                                <div className="quiz-image-container" style={randomElement()}>
                                    <img className="quiz-image" src={`../images/${quizQuestion.image}.png`} alt={quizQuestion.alt} />
                                    </div>
                                    <div className="quiz-options">
                                        { quizQuestions[0].answerOptions.map((answer, index) => {
                                            console.log(answer.answerText)
                                            return (
                                                <div className="sound" style={randomElement()}>
                                                <p>{answer.answerText}</p>
                                            </div>
                                            )
                                        })
                                    }
                                    </div>
                                <button className="next-btn">Next</button>
                             </>
                       )
                    })

                }
               
            </div>
        </section> 
    );
}
 
export default PhaseTwoQuiz