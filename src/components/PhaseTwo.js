import { MdArrowBackIosNew } from "react-icons/md"
import { MdFlipCameraAndroid } from "react-icons/md"
import { Link } from "react-router-dom"
import { useState } from "react"

const PhaseTwo = () => {
    const sounds = [
        {
            letter: "s",
            sound: "/",
            icon: "sun"
        },
        {
            letter: "a",
            sound: "/",
            icon: "ant"
        },
        {
            letter: "t",
            sound: "/",
            icon: "tap"
        },
        {
            letter: "p",
            sound: "/",
            icon: "penguin"
        },
        {
            letter: "i",
            sound: "/",
            icon: "igloo"
        },
        {
            letter: "n",
            sound: "/",
            icon: "net"
        },
        {
            letter: "m",
            sound: "/",
            icon: "map"
        },
        {
            letter: "d",
            sound: "/",
            icon: "dog"
        },
        {
            letter: "g",
            sound: "/",
            icon: "guitar"
        },
        {
            letter: "o",
            sound: "/",
            icon: "octopus"
        },
        {
            letter: "c",
            sound: "/",
            icon: "cat"
        },
        {
            letter: "k",
            sound: "/",
            icon: "king"
        },
        {
            letter: "ck",
            sound: "/",
            icon: "duck"
        },
        {
            letter: "e",
            sound: "/",
            icon: "egg"
        },
        {
            letter: "u",
            sound: "/",
            icon: "umbrella"
        },
        {
            letter: "r",
            sound: "/",
            icon: "rat"
        },
        {
            letter: "h",
            sound: "/",
            icon: "hat"
        },
        {
            letter: "b",
            sound: "/",
            icon: "bin"
        },
        {
            letter: "f",
            sound: "/",
            icon: "frog"
        },
        {
            letter: "ff",
            sound: "/",
            icon: "muffin"
        },
        {
            letter: "l",
            sound: "/",
            icon: "leaf"
        },
        {
            letter: "ll",
            sound: "/",
            icon: "bell"
        },
        {
            letter: "ss",
            sound: "/",
            icon: "dress"
        }
    ]

    const [displayIcons, setdisplayIcons] = useState(false);

    const soundToggle = () => {
        setdisplayIcons(!displayIcons)
    }

    const alternatingColor = ["var(--pink)", "var(--green)", "var(--yellow)", "var(--blue)", "var(--light-blue)", "var(--purple)"]
    // if backgroundColor =  yellow or lightblue then color is darkblue

    return ( 
        <section>
            <header>    
                <Link to="/"><MdArrowBackIosNew className="back-arrow" /></Link>
                <h1>Phase Two</h1>
                <MdFlipCameraAndroid onClick={soundToggle} className="toggle" />
            </header>
            <div className="sound-container">
            {
                sounds.map((sound, index) => {
                    const randomElement = {backgroundColor: alternatingColor[Math.floor(Math.random() * alternatingColor.length)]}
                
                    if (displayIcons) {
                        return (<div className="sound" style={randomElement}><img src= {`../images/${sound.icon}.png`} alt={sound.icon} className="sound-icon"/></div>);
                    } else {
                        return (<div className="sound" style={randomElement}><p>{sound.letter}</p></div>);
                    }
                })
            }
            </div>
        </section>
     );
}
 
export default PhaseTwo;