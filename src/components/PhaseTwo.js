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
    return ( 
        <section>
            <h1>Phase Two</h1>
            <div className="sound-container">
            {sounds.map((sound, index) =>
            <div className="sound"><p>{sound.letter}</p></div>)}
            </div>
        </section>
     );
}
 
export default PhaseTwo;