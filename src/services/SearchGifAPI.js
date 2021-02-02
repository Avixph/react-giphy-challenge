import axios from "axios";

async function SearchGifAPI() {
  const SearchAPI = `${process.env.REACT_APP_API_URL}/v1/gifs/search?api_key=${API_KEY}&q=${giphy}&limit=25`;
  console.log(SearchAPI);

  const Result = await axios.get(SearchAPI).then(({ data }) => {
    return data;
  });
  return Result;
}

export default SearchGifAPI;
