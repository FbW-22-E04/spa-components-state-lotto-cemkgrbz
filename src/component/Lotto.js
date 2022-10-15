import { useState } from "react";
import "./Lotto.css"

function Lotto() {

    const luckyNr49 = () => {
        return Math.ceil(Math.random() * 49);
      };
      
    const luckyNr10 = () => {
        return Math.ceil(Math.random() * 10);
      };

    const [luckyNr49Arr, setLuckyNr49] = useState([]);
    const [luckyNr10Arr, setLuckyNr10] = useState([]);

      
    const arr = [];
    const arr2 = [];

    const showNr = () => {
          for (let i = 0; i < 1000; i++) {
            const firstSixNr = luckyNr49();
            const lastNr = luckyNr10();
            if (!arr.includes(firstSixNr) && arr.length < 6) {
              arr.push(firstSixNr);
            }
      
            if (arr2.length < 1) {
              arr2.push(lastNr);
            }
          }
      
          setLuckyNr49(arr);
          setLuckyNr10(arr2);
        };
      
    const reset = () => {
        setLuckyNr49([]);
        setLuckyNr10([]);
        };


    return (
        <div className="container">
            <div className="header">
                <h1>Lotto 6/49</h1>
                <p>Generating lucky numbers</p>
            </div>
            <ul className="list">
          {luckyNr49Arr.map((num, idx) => {
            return (
              <li className="lucky-nr" key={idx}> {num} </li>
            );
          })}

          {luckyNr10Arr.map((num, idx) => {
            return (
              <li className="lucky-nr-last" key={idx}> {num} </li>
            );
          })}
        </ul>
        <div className="buttons">
            <button className="reset" onClick={reset}>Reset</button>
            <button className="show-nr" onClick={showNr}>Show me lucky numbers</button>
        </div>

        </div>
    );
}

export default Lotto
