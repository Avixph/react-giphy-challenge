import { RandomGifAPI } from "../services/giphy_API";

export default function SearchGif() {
  const [gifSearch, setGifSearch] = useState("");

  const fetchSearchGif = async () => {
    const searchGif = await RandomGifAPI();
    setGif(searchGif.data);
  };

  return (
    <div className="gif-search">
      <form action="" className="search-bar">
        <input type="text" placeholder="Search gif" />
        <button type="submit" onClick={}>
          ➔
        </button>
      </form>
    </div>
  );
}
