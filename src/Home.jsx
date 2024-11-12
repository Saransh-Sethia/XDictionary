import React, { useState } from "react";

const Home = () => {
  const dictionary=[
    {
      word: "React",
      meaning: "A JavaScript library for building user interfaces.",
    },

    { word: "Component", meaning: "A reusable building block in React." },

    { word: "State", meaning: "An object that stores data for a component." },
  ]
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

const handleSearch = (e) => {
    e.preventDefault();

    const foundWord = dictionary.find((item) => item.word.toLowerCase() === input.toLowerCase());

    if(foundWord){
        setResult(foundWord.meaning)
    } else {
        setResult("Word not found in the dictionary.")
    }
}

  return (
    <div>
      <h1>Dictionary App</h1>
      <input
        placeholder="Search for a word..."
        value={input}
        type="text"
        onChange={(e)=>setInput(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <h2>Definition: </h2>
      <p>{result}</p>
    </div>
  );
};

export default Home;
