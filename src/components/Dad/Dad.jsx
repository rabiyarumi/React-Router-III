import React, { useContext } from 'react';
import Myself from '../MySelf/Myself';
import { MoneyContext } from '../Grandpa/Grandpa';

const Dad = () => {

    const [ money, setMoney] = useContext(MoneyContext)

    return (
        <div>
            <h2>Dad</h2>
            <Myself></Myself>
            <p>Money: {money}</p>
            <button onClick={() => setMoney(money + 500)} className='btn bg-purple-400'>Give Money</button>
        </div>
    );
};

export default Dad;