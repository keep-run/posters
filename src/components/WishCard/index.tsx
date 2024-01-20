import diyBtn from "@/assets/diy-btn.png";
import ReactIf from "@/utils/ReactIf";
import "./index.less";
export default ({
  yourName,
  hisName,
  withBtn = false,
  bgImg,
  onBtnClick = () => {},
  wishText = "",
  handleWishTextChange = () => {},
  editAble = true,
}) => {
  return (
    <div className="wish-card">
      <div className="relative-container">
        <img src={bgImg} alt="" className="wish-card-bg" />
        <div className="wish-content">
          <div className="his-name">亲爱的: {hisName}</div>
          <div className="wish-input-wrap">
            <div
              contenteditable={editAble?"true":"false"}
              class="wish-input"
              onChange={handleWishTextChange}
            >
              {wishText}
            </div>
          </div>
          <div className="your-name"> {yourName} 贺</div>
        </div>

        <ReactIf condition={withBtn}>
          <div className="btn-wrap">
            <img className="diy-btn" src={diyBtn} alt="" onClick={onBtnClick} />
          </div>
        </ReactIf>
      </div>
    </div>
  );
};
