const Greeting = () => {
    let myDate = new Date()
    let hours = myDate.getHours()
    let greeting

    if (hours < 12) {
        greeting = "morning"
    } else if (hours >= 12 && hours <= 17) {
        greeting = "afternoon"
    } else if (hours >= 18 && hours <= 24) {
        greeting = "evening"
    }

    return ( 
        <p className="greeting">{`Good ${greeting}!`}</p>
     );
}
 
export default Greeting;