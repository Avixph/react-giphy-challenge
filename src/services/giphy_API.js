import axios from "axios";

// export async function SearchGifAPI() {
//   const SearchAPI = `${process.env.REACT_APP_API_URL}/v1/gifs/search?api_key=${process.env.REACT_APP_API_KEY}&q=${giphy}&limit=25`;
//   console.log(SearchAPI);

//   const Result = await axios.get(SearchAPI).then(({ data }) => {
//     return data;
//   });
//   return Result;
// }

export async function RandomGifAPI() {
  const RandomAPI = `${process.env.REACT_APP_API_URL}/v1/gifs/random?api_key=${process.env.REACT_APP_API_KEY}`;
  console.log(RandomAPI);

  const Result = await axios.get(RandomAPI).then(({ data }) => {
    return data;
  });
  return Result;
}
