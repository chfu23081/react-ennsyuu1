import React,{ useState } from "react";

function randomValueFromArray(array){
    const random = Math.floor(Math.random()*array.length);
    return array[random];
  }

export default function App() {
    const [showStory, setShowStory] = useState(false);
  const [xItem, setXItem] = useState("");
  const [yItem, setYItem] = useState("");
  const [zItem, setZItem] = useState("");
  const ukus = "us";

  const xItems = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
  const yItems = ["the soup kitchen", "Disneyland", "the White House"];
  const zItems = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

  const generateStory = () => {
    setXItem(randomValueFromArray(xItems));
    setYItem(randomValueFromArray(yItems));
    setZItem(randomValueFromArray(zItems));
    setShowStory(true);
  };
    return (
      <>
        <div>
          <label htmlFor="customname">Enter custom name:</label>
          <input type="text" placeholder="" />
        </div>
        <div>
          <label htmlFor="us">US</label>
          <input type="radio" value="us" checked={ukus === "us"} />
          <label htmlFor="uk">UK</label>
          <input type="radio" value="uk" checked={ukus === "uk"} />
        </div>
        <div>
          <button onClick={generateStory}>Generate random story</button>
        </div>
        {showStory && (
          <p>
            It was 94 fahrenheit outside, so {xItem} went for a walk. When they
            got to {yItem}, they stared in horror for a few moments, then {zItem}.
            Bob saw the whole thing, but was not surprised — {xItem} weighs 300
            pounds, and it was a hot day.
          </p>
        )}
      </>
    );
  }