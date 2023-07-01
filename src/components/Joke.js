import React from "react"
import "./Joke.css"
function Joke(){
    const [joke, setJoke]=React.useState("Why do mathematicians hate the U.S.? Because it's indivisible.")
    
    
    function handleClick() {
      fetch("https://icanhazdadjoke.com/", {
        headers: {
          Accept: "application/json",
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch joke");
          }
          return response.json();
        })
        .then((data) => {
          setJoke(data.joke);
          console.log(data.joke);
        })
        .catch((error) => {
          console.error(error);
          setJoke("Failed to fetch joke. Please check your internet connection.");
        });
    }
    
        

    return(
        <div className="container">
      <button className="btn" onClick={handleClick}>
        Generate New Joke
      </button>
      <p className="result">{joke}</p>
    </div>
  );
}

export default Joke;
