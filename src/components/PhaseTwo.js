const PhaseTwo = () => {

    const sounds = [
        {
            letter: "s",
            sound: "/", 
            index: 1
        },
        {
            letter: "a",
            sound: "/", 
            index: 2
        },
        {
            letter: "t",
            sound: "/", 
            index: 3
        },
        {
            letter: "p",
            sound: "/", 
            index: 3
        },
        {
            letter: "i",
            sound: "/", 
            index: 3
        },
        {
            letter: "n",
            sound: "/", 
            index: 3
        },
    ]

    const alternatingColor = ["var(--pink)", "var(--green)", "var(--yellow)", "var(--blue)", "var(--light-blue)", "var(--purple)"]
    // if backgroundColor =  yellow or lightblue then color is darkblue

    return ( 
        <section>
            <h1>Phase Two</h1>
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
 
export default PhaseTwo;