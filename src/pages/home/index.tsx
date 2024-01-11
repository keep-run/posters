// import vidioSrc from "@/assets/video/93Z888piCXI3.mp4";
import "@/common/common.less";
// import { ControlBar, Player, PlayToggle } from "video-react";
import "./index.less";
// import VideoPlayer from '@/components/VideoPlayer';
import bg from "@/assets/firstPage/bg.png";
import mov from "@/assets/firstPage/mov.png";
import text1 from "@/assets/firstPage/text1.png";
import text2 from "@/assets/firstPage/text2.png";
import baseImg from '@/assets/animations/icon11.png'
import anim1 from '@/assets/animations/icon1.png'
import anim2 from '@/assets/animations/icon2.png'
import anim3 from '@/assets/animations/icon3.png'
import anim4 from '@/assets/animations/icon4.png'
import anim5 from '@/assets/animations/icon5.png'
import anim6 from '@/assets/animations/icon6.png'
import anim7 from '@/assets/animations/icon7.png'
import anim8 from '@/assets/animations/icon8.png'
import anim9 from '@/assets/animations/icon9.png'
import anim10 from '@/assets/animations/icon10.png'

import { useEffect } from "react";
import { history } from "umi";
export default () => {
  useEffect(() => {
    setTimeout(() => {
      history.replace("/guide");
    }, 16000);
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
      <img src={baseImg} alt="" className="base-img"  />
      <img src={anim1} alt="" className="anim1-img"  />
      <img src={anim2} alt="" className="anim2-img"  />
      <img src={anim3} alt="" className="anim3-img"  />
      <img src={anim4} alt="" className="anim4-img"  />
      <img src={anim5} alt="" className="anim5-img"  />
      <img src={anim6} alt="" className="anim6-img"  />
      <img src={anim7} alt="" className="anim7-img"  />
      <img src={anim8} alt="" className="anim8-img"  />
      <img src={anim9} alt="" className="anim9-img" style={{color:'red'}} />
      <img src={anim10} alt="" className="anim10-img"  />
    </div>
  );
};
