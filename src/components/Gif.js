export default function Gif({ gif }) {
  return (
    <div className="app-view">
      <div className="single-gif">
        <h5>Title:{gif.title ? gif.title : "Unknown"}</h5>
        <img src={gif.image_url} alt="a gif" />
        <p>By: {gif.username}</p>
      </div>
    </div>
  );
}
