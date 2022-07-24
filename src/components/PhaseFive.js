import { useNavigate } from "react-router-dom"
import { MdArrowBackIosNew } from "react-icons/md"

const PhaseFive = () => {
    const navigate = useNavigate()
    const sounds = [
        {
            sound: "ay"
        },
        {
            sound: "ou"
        },
        {
            sound: "ie"
        },
        {
            sound: "ea"
        },
        {
            sound: "oy"
        },
        {
            sound: "ir"
        },
        {
            sound: "ue"
        },
        {
            sound: "ue"
        },
        {
            sound: "aw"
        },
        {
            sound: "wh"
        },
        {
            sound: "ph"
        },
        {
            sound: "ew"
        },
        {
            sound: "ew"
        },
        {
            sound: "oe"
        },
        {
            sound: "au"
        },
        {
            sound: "ey"
        },
        {
            sound: "a-e"
        },
        {
            sound: "e-e"
        },
        {
            sound: "i-e"
        },
        {
            sound: "o-e"
        },
        {
            sound: "u-e"
        },
        {
            sound: "u-e"
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
                    return (<div className="sound sound-p5" style={randomElement} onClick={start}><p>{sound.sound}</p></div>);
                })
            }
            </div>
        </section>
     );
}
 
export default PhaseFive;