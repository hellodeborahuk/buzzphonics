import { pointsContext } from "./PointsProvider";
import { useContext } from "react";

const Points = () => {
    const [points, setPoints] = useContext(pointsContext);

    return ( <div>
        <div className="star">{points}</div>
    </div> );
}
 
export default Points;