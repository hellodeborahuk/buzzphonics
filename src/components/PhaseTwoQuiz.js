import { MdArrowBackIosNew } from "react-icons/md"
import { Link } from "react-router-dom"

const PhaseTwoQuiz= () => {

    const quizQuestions = [
        {
            id: 0,
            image: "dog",
            alt: "dog",
            a: "f",
            b: "d",
            c: "ck",
            answer: "d"
        },
    ]
    const alternatingColor = ["var(--pink)", "var(--green)", "var(--yellow)", "var(--blue)", "var(--light-blue)", "var(--purple)"]
    const randomElement = {backgroundColor: alternatingColor[Math.floor(Math.random() * alternatingColor.length)]}

    return ( 
        <section>
                <header>    
                <Link to="/"><MdArrowBackIosNew className="back-arrow" /></Link>
                <h1>Phase Two Quiz</h1>
            </header>
            <div className="quiz-container">
                <div className="quiz-image-container" style={randomElement}><img className="quiz-image" src={`../images/${quizQuestions[0].image}.png`} alt={quizQuestions.alt} /></div>
                <div className="quiz-options">
                    <div className="sound" style={randomElement}>
                        <p>{quizQuestions[0].a}</p>
                    </div>
                    <div className="sound" style={randomElement}>
                        <p>{quizQuestions[0].b}</p>
                    </div>   
                    <div className="sound" style={randomElement}>
                        <p>{quizQuestions[0].c}</p>
                    </div>
                </div>
            </div>
        </section> 
    );
}
 
export default PhaseTwoQuiz