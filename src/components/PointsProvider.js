import React, {createContext, useState} from "react"

export const pointsContext = createContext();

const PointsProvider = (props) => {
    const [points, setPoints] = useState(() => {
        // getting stored value
        const savedPoints = localStorage.getItem("points");
        const initialValue = JSON.parse(savedPoints);
        return initialValue || "";
      });



    return (
        <pointsContext.Provider value={[points, setPoints]}>
            {props.children}
        </pointsContext.Provider>
    );
};

export default PointsProvider;