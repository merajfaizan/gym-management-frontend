import "./playlist.css";
import PLAY from "../../assets/logos/spotify.png";
import Image from "next/image";

const Playlist = () => {
  return (
    <div className="playlist-container">
      <div className="playlist-text">
        <h2>
          Beats for <span className="pink">gains</span>
        </h2>
        <p>
          Get pumped up with our <br />
          workout playlist!
        </p>
      </div>
      <button className="play-btn">
        <Image src={PLAY} alt="play" /> Play
      </button>
    </div>
  );
};

export default Playlist;
