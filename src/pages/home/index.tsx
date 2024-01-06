import vidioSrc from "@/assets/video/93Z888piCXI3.mp4";
import "@/common/common.less";
import { ControlBar, Player, PlayToggle } from "video-react";
import "./index.less";
import VideoPlayer from '@/components/VideoPlayer';
import gif from '@/assets/test.gif'
export default () => {
  return (
    <div className="home-container">
      {/* <Player
        autoPlay
        src={vidioSrc}
      >
        <ControlBar autoHide={false} disableDefaultControls={true}>
          <PlayToggle />
        </ControlBar>
      </Player> */}
      <img src={gif} alt="" />
      {/* <VideoPlayer videoSrc={vidioSrc} /> */}
    </div>
  );
};
