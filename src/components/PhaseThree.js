const PhaseThree = () => {

    const sounds = [
        {
            letter: "s",
            sound: "/"
        },
        {
            letter: "a",
            sound: "/"
        },
        {
            letter: "t",
            sound: "/"
        },
        {
            letter: "p",
            sound: "/"
        },
        {
            letter: "i",
            sound: "/"
        },
        {
            letter: "n",
            sound: "/"
        },
        {
            letter: "m",
            sound: "/"
        },
        {
            letter: "d",
            sound: "/"
        },
        {
            letter: "g",
            sound: "/"
        },
        {
            letter: "o",
            sound: "/"
        },
        {
            letter: "c",
            sound: "/"
        },
        {
            letter: "k",
            sound: "/"
        },
        {
            letter: "ck",
            sound: "/"
        },
        {
            letter: "e",
            sound: "/"
        },
        {
            letter: "u",
            sound: "/"
        },
        {
            letter: "r",
            sound: "/"
        },
        {
            letter: "h",
            sound: "/"
        },
        {
            letter: "b",
            sound: "/"
        },
        {
            letter: "f",
            sound: "/"
        },
        {
            letter: "ff",
            sound: "/"
        },
        {
            letter: "l",
            sound: "/"
        },
        {
            letter: "ll",
            sound: "/"
        },
        {
            letter: "s",
            sound: "/"
        },
        {
            letter: "ss",
            sound: "/"
        }
    ]

    const alternatingColor = ["var(--pink)", "var(--green)", "var(--yellow)", "var(--blue)", "var(--light-blue)", "var(--purple)"]
    // if backgroundColor =  yellow or lightblue then color is darkblue

    return ( 
        <section>
            <h1>Phase Three</h1>
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