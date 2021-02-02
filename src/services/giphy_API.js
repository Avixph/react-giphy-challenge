import axios from "axios";
import React from "react";

export default async function searchGif() {
  const SearchAPI = `${process.env.REACT_APP_API_URL}/v1/gifs/search?api_key=${API_KEY}&q=${giphy}&limit=25`;
  console.log(SearchAPI);

  const Result = await axios.get(SearchAPI).then(({ data }) => {
    return data;
  });
  return Result;
}

export default async function RandomGif() {
  const RandomAPI = `${process.env.REACT_APP_API_URL}/v1/gifs/random?api_key=${process.env.REACT_APP_API_KEY}&limit=25`;
  console.log(RandomAPI);

  const Result = await axios.get(RandomAPI).then(({ data }) => {
    return data;
  });
  return Result;
}
