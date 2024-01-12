import vidioSrc from "@/assets/video/93Z888piCXI3.mp4";
import "@/common/common.less";
// import { ControlBar, Player, PlayToggle } from "video-react";
import VideoPlayer from "@/components/VideoPlayer";
import "./index.less";
// import bg from "@/assets/firstPage/bg.png";

import { useEffect } from "react";
import { history } from "umi";
export default () => {


  const onEnded = () => {
    history.replace("/anim");
  };
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
      {/* <img
        src={bg}
        alt=""
        style={{
          width: "100%",
        }}
      /> */}
      <div>
        <VideoPlayer videoSrc={vidioSrc} onEnded={onEnded} />
        {/* <Button size='mini' color='primary' onClick={onEnded}>
            跳过
          </Button> */}
      </div>
    </div>
  );
};
