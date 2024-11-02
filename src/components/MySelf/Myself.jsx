import { useContext } from 'react';
import Son from '../Son/Son';
import { AssetContext } from '../Grandpa/Grandpa';

const Myself = () => {

    const gift = useContext(AssetContext)

    return (
        <div>
            <h2>Myself</h2>
            <Son></Son>
            <p>has: {gift}</p>
        </div>
    );
};

export default Myself;