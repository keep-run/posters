import { history } from "umi";
import "video.js/dist/video-js.css";
import postrtImg from '@/assets/poster.jpg'
// import 
const VideoPlayer = ({ videoSrc,onEnded }) => {
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
    <>
      <video
        autoplay="any"
        id="my-player"
        className="video-js"
        controls
        preload="auto"
        poster={postrtImg}
        data-setup="{}"
        muted
        x5-video-player-type="h5-page"
        onEnded={onEnded}
        style={{width:'100%'}}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
    </>
  );
};

export default VideoPlayer;
