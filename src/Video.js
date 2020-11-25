import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

function Video({url, channel,description,song,likes,messages,shares}) {
  const [playing, setPlaying] = useState(false);
  const VideoRef = useRef(null);
  const handleVideoPress = () => {
    if (playing) {
      VideoRef.current.pause();
      setPlaying(false);
    } else {
      VideoRef.current.play();
      setPlaying(true);
    }
  };
  return (
    <div className="video">
      <video
        className="video__player"
        loop
        onClick={handleVideoPress}
        ref={VideoRef}
        src={url}
      >
        
      </video>
      <VideoFooter channel = {channel} description = {description} song = {song}></VideoFooter>
      <VideoSidebar likes ={likes} messages = {messages} shares = {shares}></VideoSidebar>
    </div>
  );
}

export default Video;
