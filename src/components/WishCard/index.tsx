import diyBtn from "@/assets/diy-btn.png";
import ReactIf from "@/utils/ReactIf";
import { TextArea } from "antd-mobile";
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
          <TextArea
            disabled={!editAble}
            placeholder=""
            value={wishText}
            onChange={handleWishTextChange}
            style={{
              "--color": "rgb(123, 45, 58)",
              "--disabled-color": "rgb(123, 45, 58)",
              "--font-size": "14px",
              marginLeft: 25,
              flexGrow: 1,
              width: "auto",
              marginTop: "2px",
            }}
          />
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
