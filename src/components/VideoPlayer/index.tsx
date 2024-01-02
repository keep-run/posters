import React, { useEffect, useRef } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

const VideoPlayer = ({ videoSrc }) => {
  // const videoRef = useRef(null);
  // const playerRef = useRef(null);

  // useEffect(() => {
  //   const videoElement = videoRef.current;
  //   const player = videojs(videoElement, {
  //     autoplay: true,
  //     controls: true,
  //     sources: [{
  //       src: videoSrc,
  //       type: 'video/mp4'
  //     }]
  //   });

  //   playerRef.current = player;

  //   return () => {
  //     if (playerRef.current) {
  //       playerRef.current.dispose();
  //     }
  //   };
  // }, [videoSrc]);

  return (
    <video
    id="my-player"
    className="video-js"
    controls
    preload="auto"
    poster=""
    data-setup='{}'
    muted 
  >
    <source src={videoSrc} type="video/mp4"/>
  </video>
  );
};

export default VideoPlayer;
