import React, { Component } from "react";
import "./App.css";
import Giphy from "./components/Giphy";
import Header from "./components/Header";
import SearchGiphy from "./components/SearchGiphy";


function App() {
  /* 
 * Perhaps some hints?
 *
 * 1. use the useState hook
 * 2. Set up an axios function in a separate service folder/constant file then export to fetchRandomGif(). **Use your giphy api endpoint as url**.       
remember to use useEffect
 * 3. call fetchRandomGif when the button on your page is clicked
 * 4. Set up a loading message until promise is resolved, and fetch status: 200 (optional)
 * 5. Save your data to your state, and have your render method display it on the page
 */
// remember to use hooks for your state
// putting the method below in useEffect
 fetchRandomGif() {
  // declare a url variable for the Giphy API endpoint
  // get a random gif!
  // set state with the data you've fetched from the API to allGifs
  }

  return (
    <div className="App">
      <Header />
      <main>I'm going to show a random of gifs!</main>
      <SearchGiphy />
      <Giphy />
    </div>
  );

}

export default App;
