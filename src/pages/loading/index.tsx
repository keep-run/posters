import "@/common/common.less";
import "./index.less";
import bg from "@/assets/loadingBg.png";
import Loading from "@/components/Loading";
// import musicInit from '@/assets/js/music'
// import musicSrc from '@/assets/music.mp3'
import { history } from "umi";
import { useEffect} from 'react'
export default () => {
  const onDone = () => {
    history.replace("/anim");
  };
  // useEffect(()=>{
  //   musicInit();
  //   window.SMmuiscPlay({
  //     el: "root",
  //     audioUrl :musicSrc,
  //     position: "top:10px;right:10px",//右上角
  //     animaClass: "muiscIconRotate"
  // }); 
  // },[])
  return (
    <div className="loading-page">
      <img
        src={bg}
        alt=""
        style={{
          width: "100%",
        }}
      />
      <Loading onDone={onDone} />
    </div>
  );
};
