"use client"
import React, { useRef, useState } from 'react'
import VideoComponent from '../../Components/VideoComponent'
import PlayList from '../../Components/PlayList'

const VideoPlayer = () => {
  const initialPlaylist = [
    { id: 1, title: 'Video 1', url: 'https://www.example.com/video1.mp4' },
    { id: 2, title: 'Video 2', url: 'https://www.example.com/video2.mp4' },
  ];

  const [playlist, setPlaylist] = useState(initialPlaylist);
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);

  const handleVideoClick = (index) => setSelectedVideoIndex(index);

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const reorderedPlaylist = Array.from(playlist);
    const [movedItem] = reorderedPlaylist.splice(result.source.index, 1);
    reorderedPlaylist.splice(result.destination.index, 0, movedItem);

    setPlaylist(reorderedPlaylist);
  };
  return (
    <div className='mt-10'>
      <VideoComponent />
      <div>
      <PlayList
        playlist={playlist}
        selectedVideoIndex={selectedVideoIndex}
        onVideoClick={handleVideoClick}
        onDragEnd={handleDragEnd}
      />
      </div>
    </div>
  )
}
export default VideoPlayer