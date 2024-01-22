import assetsBgm from "@/assets/music.mp3";
import musicIcon from "@/assets/music.png";
import classNames from "classnames";
import { Howl } from "howler";
import { useEffect, useRef, useState } from "react";
import "./index.less";

export default () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const soundBgm = useRef();

  useEffect(() => {
    // Web Audio 初始化
    soundBgm.current = new Howl({
      src: [assetsBgm],
      loop: true,
      preload: true,
    });

    // 音频资源 load 之后通过微信桥接触发播放
    soundBgm.current?.on("load", () => {
      window.WeixinJSBridge &&
        window.WeixinJSBridge.invoke(
          "getNetworkType",
          {},
          () => {
            setIsPlaying(true);
            soundBgm.current?.play();
          },
          false
        );
    });
  }, []);

  const handleClick = () => {
    const isPlaying = soundBgm.current?.playing();
    if (isPlaying) {
      soundBgm.current?.pause();
      setIsPlaying(false);
    } else {
      soundBgm.current?.play();
      setIsPlaying(true);
    }

    // Toast.show({
    //   content: `${isPlaying}`,
    //   position: "top",
    // });
  };
  return (
    <div onClick={handleClick} className="music-bg">
      <img
        src={musicIcon}
        className={classNames("music-icon", {
          playing: isPlaying,
        })}
      />
    </div>
  );
};
