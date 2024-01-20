// import vidioSrc from "@/assets/video/93Z888piCXI3.mp4";
import "@/common/common.less";
// import { ControlBar, Player, PlayToggle } from "video-react";
import "./index.less";
// import VideoPlayer from '@/components/VideoPlayer';
import anim1 from "@/assets/animations/icon1.png";
import anim10 from "@/assets/animations/icon10.png";
import baseImg from "@/assets/firstPage/baseBox.png";
import anim12 from "@/assets/animations/icon12.png";
import anim13 from "@/assets/animations/icon13.png";
import anim14 from "@/assets/animations/icon14.png";
import anim2 from "@/assets/animations/icon2.png";
import anim3 from "@/assets/animations/icon3.png";
import anim4 from "@/assets/animations/icon4.png";
import anim5 from "@/assets/animations/icon5.png";
import anim6 from "@/assets/animations/icon6.png";
import anim7 from "@/assets/animations/icon7.png";
import anim8 from "@/assets/animations/icon8.png";
import anim9 from "@/assets/animations/icon9.png";
import bg from "@/assets/firstPage/bg.png";
import mov from "@/assets/firstPage/mov.png";
import text1 from "@/assets/firstPage/text1.png";
import text2 from "@/assets/firstPage/text2.png";
// import vidioSrc from "@/assets/video/93Z888piCXI3.mp4";
// import VideoPlayer from "@/components/VideoPlayer";
import Loading from "@/components/Loading";
import ReactIf from "@/utils/ReactIf";
import { history } from 'umi'
import { useEffect, useState } from "react";
export default () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      history.replace("/guide");
    }, 6000);
  }, []);

  return (
    <div className="anim-container">
 
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
        {/* 盒子 */}
        <img src={baseImg} alt="" className="base-img" />
        {/* 盖子 */}
        <img src={anim12} alt="" className="anim12-img" />
        <img src={anim1} alt="" className="anim1-img" />
        <img src={anim2} alt="" className="anim2-img" />
        <img src={anim3} alt="" className="anim3-img" />
        <img src={anim4} alt="" className="anim4-img" />
        <img src={anim5} alt="" className="anim5-img" />
        <img src={anim6} alt="" className="anim6-img" />
        <img src={anim7} alt="" className="anim7-img" />
        <img src={anim8} alt="" className="anim8-img" />
        <img src={anim9} alt="" className="anim9-img" />
        <img src={anim10} alt="" className="anim10-img" />
        <img src={anim13} alt="" className="anim13-img" />
        <img src={anim14} alt="" className="anim14-img" />
    
    </div>
  );
};
