import axios from "./axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import Video from "./Video";

function App() {
  const [Videos, setVideos] = useState([]);
  useEffect(() => {
    async function fetchPost() {
      const response = await axios.get("/v2/posts");
      setVideos(response.data);

      return response;
    }
    fetchPost();
  }, []);

  return (
    //BEM Covention
    <div className="app">
      <div className="app__videos">
        {Videos.map(
          ({ url, channel, description, song, likes, messages, shares }) => (
            <Video
              url={url}
              channel={channel}
              description={description}
              song={song}
              likes={likes}
              messages={messages}
              shares={shares}
            ></Video>
          )
        )}
      </div>
    </div>
  );
}

export default App;
