// import vidioSrc from "@/assets/video/93Z888piCXI3.mp4";
import "@/common/common.less";
// import { ControlBar, Player, PlayToggle } from "video-react";
import "./index.less";
// import VideoPlayer from '@/components/VideoPlayer';
import bg from "@/assets/firstPage/bg.png";
import mov from "@/assets/firstPage/mov.png";
import text1 from "@/assets/firstPage/text1.png";
import text2 from "@/assets/firstPage/text2.png";
import { useEffect } from "react";
import { history } from "umi";
export default () => {
  useEffect(() => {
    setTimeout(() => {
      history.replace("/guide");
    }, 6000);
  }, []);
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
      <img
        src={bg}
        alt=""
        style={{
          width: "100%",
        }}
      />

      <img src={mov} alt="" className="mov-img" />

      <img src={text1} alt="" className="text1-img" />
      <img src={text2} alt="" className="text2-img" />
      {/* <VideoPlayer videoSrc={vidioSrc} /> */}
    </div>
  );
};
