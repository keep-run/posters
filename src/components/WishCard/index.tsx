import diyBtn from "@/assets/diy-btn.png";
import wishCardImg from "@/assets/wishCard.png";
import ReactIf from "@/utils/ReactIf";
import "./index.less";
export default ({
  yourName,
  hisName,
  withBtn = false,
  onBtnClick = () => {},
}) => {
  return (
    <div className="wish-card">
      <div className="relative-container">
        <img src={wishCardImg} alt="" className="wish-card-bg" />
        <div className="his-name">亲爱的: {hisName}</div>
        <div className="your-name"> {yourName} 贺</div>
        <ReactIf condition={withBtn}>
          <div className="btn-wrap">
            <img className="diy-btn" src={diyBtn} alt="" onClick={onBtnClick} />
          </div>
         
        </ReactIf>
      </div>
    </div>
  );
};
