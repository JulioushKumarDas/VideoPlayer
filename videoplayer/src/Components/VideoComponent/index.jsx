"use client"
import React, { useRef, useState } from 'react'
import ReactPlayer from 'react-player';
const VideoComponent = () => {
  const [playing, setPlaying] = useState(true);
  const [played, setPlayed] = useState(0);
  const [duration, setDuration] = useState(0);
  const playerRef = useRef(null);

  const handlePlayPause = () => setPlaying(!playing);
  const handleProgress = ({ played }) => setPlayed(played);
  const handleDuration = (duration) => setDuration(duration);
  return (
    <div>
       <ReactPlayer
        ref={playerRef}
        url={ "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" }
        playing={playing}
        onProgress={handleProgress}
        onDuration={handleDuration}
        width="100%"
        controls={true}
      />
    </div>
  )
}
export default VideoComponent;