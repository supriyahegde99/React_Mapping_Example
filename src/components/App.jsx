import React from "react";
import emojipedia from "../emojipedia";
import Card from "./Card";



function createCard(emoj)
{
  return(
    <Card 
    key ={emoj.id}
    emojiDsiplay={emoj.emoji}
    name={emoj.name}
    meaning ={emoj.meaning}
   />
  );
}
function App() {
 
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createCard)}</dl> 
    </div>
  );
}

export default App;
