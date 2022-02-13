import { pointsContext } from "./PointsProvider";
import { useContext } from "react";

const Points = () => {
    const [points, setPoints] = useContext(pointsContext);

    return ( <div>
        {points}
    </div> );
}
 
export default Points;