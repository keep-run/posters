import { useEffect } from "react";
import loadingImg from '@/assets/loading.png'
import "./index.less";

export default ({ onDone }) => {
  useEffect(() => {
    setTimeout(onDone, 3000);
  }, []);
  return (
    <div className="loading-container">
      <div className="loading-bg">
        <div className="loading-progress" >
          <img src={loadingImg} alt="" className="loading-img"/>
        </div>
      </div>
      <div className="loading-text">加载中</div>
    </div>
  );
};
