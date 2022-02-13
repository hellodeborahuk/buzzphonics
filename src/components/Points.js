import { pointsContext } from "./PointsProvider";
import { useContext } from "react";

const Points = () => {
    const [points] = useContext(pointsContext);

    return ( <div>
        {points}
    </div> );
}
 
export default Points;