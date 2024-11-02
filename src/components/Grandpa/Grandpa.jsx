import { createContext, useState } from "react";
import Dad from "../Dad/Dad";
import "./grandpa.css";

export const AssetContext = createContext("gold");
export const MoneyContext = createContext(1000)

const Grandpa = () => {

    const [money, setMoney] = useState(1000);



  return (
    <div className="grand">
      <h1>Grandpa</h1>
      <p>Net Money: {money}</p>

     <MoneyContext.Provider value={[money, setMoney]}>
     <AssetContext.Provider value="gold">
        <Dad></Dad>
      </AssetContext.Provider>
     </MoneyContext.Provider>
    </div>
  );
};

export default Grandpa;
