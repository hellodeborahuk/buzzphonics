import { pointsContext } from "./PointsProvider";
import { useContext } from "react";

const Points = () => {
    const [points] = useContext(pointsContext);

    return ( <div>
        <div className="star">{points}</div>
    </div> );
}
 
export default Points;