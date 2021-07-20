import React from "react";
import ReactPlayer from "react-player";
import "./responsive-player.css";
import videos from './post.mp4'

const Player = ({url}) => (
  <div className="player-wrapper">
    <ReactPlayer
      url = {videos}
      muted= {true}
      loop= {true}
      className="react-player"
      playing
      width="100%"
      height="100%"
      controls={false}
    />
  </div> 
);

export default Player;
