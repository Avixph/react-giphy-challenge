import LoadingGif from "./LoadingGif";

export default function Gif({ gif }) {
  return (
    <div className="app-view">
      {gif ? (
        <div className="single-gif">
          <h5>Title: {gif.title ? gif.title : "Unknown"}</h5>
          <img src={gif.image_url} alt="a gif" />
          <p>By: {gif.username ? gif.username : "Unknown"}</p>
        </div>
      ) : (
        <LoadingGif />
      )}
    </div>
  );
}
