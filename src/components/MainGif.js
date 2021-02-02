import React, { useState, useEffect } from "react";
import { RandomGifAPI } from "../services/giphy_API";
import Gif from "./Gif";
// import SearchGif from "./SearchGif";

export default function MainGiphy() {
  const [gif, setGif] = useState([]);
  console.log(gif);

  const fetchRandomGif = async () => {
    const randGif = await RandomGifAPI();
    setGif(randGif.data);
  };
  console.log(fetchRandomGif);

  useEffect(() => {
    fetchRandomGif();
  }, []);

  return (
    <main className="app-main">
      <h3 className="app-main">I'm going to show a random of gifs!</h3>
      {/* <SearchGif /> */}
      <button onClick={fetchRandomGif}>Gif Me</button>
      <Gif gif={gif} />
    </main>
  );
}
