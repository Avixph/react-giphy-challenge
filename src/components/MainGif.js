import React, { useState, useEffect } from "react";
import { RandomGifAPI } from "../services/giphy_API";
import Gif from "./Gif";
// import SearchGif from "./SearchGif";

export default function MainGif() {
  const [gif, setGif] = useState([]);
  // const [loading, setLoading] = useState(true);

  console.log(gif);

  const fetchRandomGif = async () => {
    // setLoading(true);
    const randGif = await RandomGifAPI();
    setGif(randGif.data);
    // setLoading(false);
  };
  console.log(fetchRandomGif);

  useEffect(() => {
    fetchRandomGif();
  }, []);

  return (
    <main className="app-main">
      <h3 className="app-main">I'm going to show random gifs!</h3>
      {/* <SearchGif /> */}
      <button onClick={fetchRandomGif}>Gif Me</button>
      {gif ? <Gif gif={gif} /> : <LoadingGif />}
    </main>
  );
}
