import { MdArrowBackIosNew } from "react-icons/md"
import { useNavigate } from "react-router-dom"

const YesNoGame = () => {
    const navigate = useNavigate()

    const questions = [
      {
        question: "Can you drive a car on a lake?",
        answer: false
      },
      {
        question: "Can you call a monkey on the phone?",
        answer: false
      },
      {
        question: "Are wheels round?",
        answer: true
      }
    ]

    return (
        <section>
             <header>    
                <p onClick={() => navigate(-1)}><MdArrowBackIosNew className="back-arrow" /></p>
                <h1>Spelling Game 2</h1>
            </header>
            <>
                <div className="quiz-container">
                  <p className="yesno-question">Can you drive a car on a lake?</p>
                  <div className="quiz-options">
                    <p className="yesno-answers yesno-true">Yes</p>
                    <p className="yesno-answers yesno-false">No</p>
                  </div>
                </div>
            </>
        </section>
    )
}

export default YesNoGame;