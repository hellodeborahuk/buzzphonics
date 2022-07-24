import { useNavigate } from "react-router-dom"
import { MdArrowBackIosNew } from "react-icons/md"

const PhaseFive = () => {
    const navigate = useNavigate()
    const sounds = [
        {
            letter: "ay",
            sound: "ay"
        },
        {
            letter: "ou",
            sound: "ou"
        },
        {
            letter: "ie",
            sound: "ie"
        },
        {
            letter: "ea",
            sound: "ea"
        },
        {
            letter: "oy",
            sound: "oy"
        },
        {
            letter: "ir",
            sound: "ir"
        },
        {
            letter: "ue",
            sound: "ue1"
        },
        {
            letter: "ue",
            sound: "ue2"
        },
        {
            letter: "aw",
            sound: "aw"
        },
        {
            letter: "wh",
            sound: "wh"
        },
        {
            letter: "ph",
            sound: "ph"
        },
        {
            letter: "ew",
            sound: "ew1"
        },
        {
            letter: "ew",
            sound: "ew2"
        },
        {
            letter: "oe",
            sound: "oe"
        },
        {
            letter: "au",
            sound: "au"
        },
        {
            letter: "ey",
            sound: "ey"
        },
        {
            letter: "a-e",
            sound: "a-e"
        },
        {
            letter: "e-e",
            sound: "e-e"
        },
        {
            letter: "i-e",
            sound: "i-e"
        },
        {
            letter: "o-e",
            sound: "o-e"
        },
        {
            letter: "u-e",
            sound: "u-e2"
        },
        {
            letter: "u-e",
            sound: "u-e1"
        }
    ]

    const alternatingColor = ["var(--pink)", "var(--green)", "var(--yellow)", "var(--blue)", "var(--light-blue)", "var(--purple)"]
    // if backgroundColor =  yellow or lightblue then color is darkblue

    return ( 
        <section>
            <header>    
            <p onClick={() => navigate(-1)}><MdArrowBackIosNew className="back-arrow" /></p>
            <h1>Phase Five</h1>
            </header>
            <div className="sound-container">
            {
                sounds.map((sound, index) => {
                    let audio = new Audio(`/sounds/Phase5/${sound.sound}.m4a`)

                    const start = () => {
                        audio.play()
                      }
                    // get random item from alternatingColor
                    const randomElement = {backgroundColor: alternatingColor[Math.floor(Math.random() * alternatingColor.length)]}
                    // apply to below as style...   
                    return (<div className="sound sound-p5" style={randomElement} onClick={start}><p>{sound.letter}</p></div>);
                })
            }
            </div>
        </section>
     );
}
 
export default PhaseFive;