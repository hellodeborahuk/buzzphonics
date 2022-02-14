import React, {createContext, useState} from "react"

export const pointsContext = createContext();

const PointsProvider = (props) => {
    const [points, setPoints] = useState(() => {
        return localStorage.getItem("points") || 0
      });



    return (
        <pointsContext.Provider value={[points, setPoints]}>
            {props.children}
        </pointsContext.Provider>
    );
};

export default PointsProvider;