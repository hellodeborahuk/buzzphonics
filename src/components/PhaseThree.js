import { Link } from "react-router-dom"
import { MdArrowBackIosNew } from "react-icons/md"

const PhaseThree = () => {

    const sounds = [
        {
            letter: "j",
            sound: "/"
        },
        {
            letter: "v",
            sound: "/"
        },
        {
            letter: "w",
            sound: "/"
        },
        {
            letter: "x",
            sound: "/"
        },
        {
            letter: "y",
            sound: "/"
        },
        {
            letter: "z",
            sound: "/"
        },
        {
            letter: "zz",
            sound: "/"
        },
        {
            letter: "qu",
            sound: "/"
        },
        {
            letter: "ch",
            sound: "/"
        },
        {
            letter: "sh",
            sound: "/"
        },
        {
            letter: "th",
            sound: "/"
        },
        {
            letter: "ng",
            sound: "/"
        },
        {
            letter: "ai",
            sound: "/"
        },
        {
            letter: "ee",
            sound: "/"
        },
        {
            letter: "igh",
            sound: "/"
        },
        {
            letter: "oa",
            sound: "/"
        },
        {
            letter: "oo",
            sound: "/"
        },
        {
            letter: "oo",
            sound: "/"
        },
        {
            letter: "ar",
            sound: "/"
        },
        {
            letter: "or",
            sound: "/"
        },
        {
            letter: "ur",
            sound: "/"
        },
        {
            letter: "ow",
            sound: "/"
        },
        {
            letter: "oi",
            sound: "/"
        },
        {
            letter: "ear",
            sound: "/"
        },
        {
            letter: "air",
            sound: "/"
        },
        {
            letter: "ure",
            sound: "/"
        },
        {
            letter: "er",
            sound: "/"
        }
    ]

    const alternatingColor = ["var(--pink)", "var(--green)", "var(--yellow)", "var(--blue)", "var(--light-blue)", "var(--purple)"]
    // if backgroundColor =  yellow or lightblue then color is darkblue

    return ( 
        <section>
            <header>    
                <Link to="/"><MdArrowBackIosNew className="back-arrow" /></Link>
                <h1>Phase Three</h1>
            </header>
            <div className="sound-container">
            {
                sounds.map((sound, index) => {
                    // get random item from alternatingColor
                    const randomElement = {backgroundColor: alternatingColor[Math.floor(Math.random() * alternatingColor.length)]}
                    // apply to below as style...   
                    return (<div className="sound" style={randomElement} ><p>{sound.letter}</p></div>);
                })
            }
            </div>
        </section>
     );
}
 
export default PhaseThree;