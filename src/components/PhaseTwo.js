import { MdArrowBackIosNew } from "react-icons/md"
import { MdFlipCameraAndroid } from "react-icons/md"
import { Link } from "react-router-dom"
import { useState } from "react"

const PhaseTwo = () => {

 

    const sounds = [
        {
            letter: "s",
            sound: "s",
            icon: "sun"
        },
        {
            letter: "a",
            sound: "a",
            icon: "ant"
        },
        {
            letter: "t",
            sound: "t",
            icon: "tap"
        },
        {
            letter: "p",
            sound: "p",
            icon: "penguin"
        },
        {
            letter: "i",
            sound: "i",
            icon: "igloo"
        },
        {
            letter: "n",
            sound: "n",
            icon: "net"
        },
        {
            letter: "m",
            sound: "m",
            icon: "map"
        },
        {
            letter: "d",
            sound: "d",
            icon: "dog"
        },
        {
            letter: "g",
            sound: "g",
            icon: "guitar"
        },
        {
            letter: "o",
            sound: "o",
            icon: "octopus"
        },
        {
            letter: "c",
            sound: "c",
            icon: "cat"
        },
        {
            letter: "k",
            sound: "c",
            icon: "king"
        },
        {
            letter: "ck",
            sound: "c",
            icon: "duck"
        },
        {
            letter: "e",
            sound: "e",
            icon: "egg"
        },
        {
            letter: "u",
            sound: "u",
            icon: "umbrella"
        },
        {
            letter: "r",
            sound: "r",
            icon: "rat"
        },
        {
            letter: "h",
            sound: "h",
            icon: "hat"
        },
        {
            letter: "b",
            sound: "b",
            icon: "bin"
        },
        {
            letter: "f",
            sound: "f",
            icon: "frog"
        },
        {
            letter: "ff",
            sound: "f",
            icon: "muffin"
        },
        {
            letter: "l",
            sound: "l",
            icon: "leaf"
        },
        {
            letter: "ll",
            sound: "l",
            icon: "bell"
        },
        {
            letter: "ss",
            sound: "s",
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
                    let audio = new Audio(`/sounds/${sound.sound}.m4a`)

                    const start = () => {
                        audio.play()
                      }

                    if (displayIcons) {
                        return (<div className="sound" style={randomElement} onClick={start}><img src= {`../images/${sound.icon}.png`} alt={sound.icon} className="sound-icon"/></div>);
                    } else {
                        return (<div className="sound" style={randomElement} onClick={start}><p>{sound.letter}</p></div>);
                    }
                })
            }
            </div>
            <footer>Icons made by <a href="https://www.flaticon.com/authors/freepik">Freepik</a> from <a href="www.flaticon.com">www.flaticon.com</a></footer>
        </section>
     );
}
 
export default PhaseTwo;