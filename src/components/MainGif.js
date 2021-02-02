import React, { useState, useEffect } from "react";
import { RandomGifAPI } from "../services/giphy_API";
import Gif from "./Gif";

export default function MainGif() {
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
      <h3 className="app-main">I'm going to show random gifs!</h3>
      <button onClick={fetchRandomGif}>Gif Me</button>
      <Gif gif={gif} />
    </main>
  );
}
