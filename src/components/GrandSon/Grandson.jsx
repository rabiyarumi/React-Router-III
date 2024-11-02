import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";

const Grandson = () => {


    const gift = useContext(AssetContext)

    return (
        <div>
            <h2>Grandson</h2>
            <p>Has:{gift}</p>
        </div>
    );
};

export default Grandson;