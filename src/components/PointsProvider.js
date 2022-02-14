import React, {createContext, useState} from "react"

export const pointsContext = createContext();

const PointsProvider = (props) => {
    const [points, setPoints] = useState(() => {
        return Number(localStorage.getItem("points")) || 0
      });

      const incrementPoints = () => {
          const newPoints = points + 1
          localStorage.setItem("points", newPoints);
          setPoints(newPoints)
      }

    return (
        <pointsContext.Provider value={[points, incrementPoints]}>
            {props.children}
        </pointsContext.Provider>
    );
};

export default PointsProvider;