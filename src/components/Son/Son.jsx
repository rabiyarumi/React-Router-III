import { useContext } from 'react';
import Grandson from '../GrandSon/Grandson';
import { MoneyContext } from '../Grandpa/Grandpa';



const Son = () => {

    const [money] = useContext(MoneyContext)

    return (
        <div>
            <h2>Son</h2>
            <Grandson></Grandson>
            <p>Money: {money}</p>
        </div>
    );
};

export default Son;