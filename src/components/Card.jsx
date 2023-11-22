import quotes from "../db/quotes.json";
import vectorIcon from "/vector.svg";
import {useState } from "react";
const Card = (props) => {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function refreshPhrase(){
    setPhrase(quotes[getRandomInt(arrayLength)].phrase)
    props.fnRefreshed()
  }

  const arrayLength = quotes.length;
  let randomValue = getRandomInt(arrayLength);

  const [phrase, setPhrase] = useState(quotes[randomValue].phrase);
  return (
    <>
      <div className="card">{phrase}</div>
      <button onClick={refreshPhrase} className="button">
        <img src={vectorIcon} alt="" />
      </button>
    </>
  );
};
export default Card;
