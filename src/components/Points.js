import { pointsContext } from "./PointsProvider";
import { useContext } from "react";

const Points = () => {
    const [points] = useContext(pointsContext);


    return ( <div>
        <div className="hexagon">{points}</div>
    </div> );
}
 
export default Points;