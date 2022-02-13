import React, {createContext, useState} from "react"

export const pointsContext = createContext();

const PointsProvider = (props) => {
        // this state will be shared with all components 
    const [points, setPoints] = useState(0);

    return (
                // this is the provider providing state
        <pointsContext.Provider value={[points, setPoints]}>
            {props.children}
        </pointsContext.Provider>
    );
};

export default PointsProvider;