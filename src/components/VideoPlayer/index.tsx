import { history } from "umi";
import "video.js/dist/video-js.css";

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
  const onEnded = () => {

    history.push("/diy");
  };

  return (
    <>
      <video
        autoplay="any"
        id="my-player"
        className="video-js"
        controls
        preload="auto"
        poster=""
        data-setup="{}"
        muted
        x5-video-player-type="h5-page"
        onEnded={onEnded}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
    </>
  );
};

export default VideoPlayer;
