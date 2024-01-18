import "@/common/common.less";
import "./index.less";
import bg from "@/assets/loadingBg.png";
import Loading from "@/components/Loading";
import { history } from "umi";
export default () => {
  const onDone = () => {
    history.replace("/anim");
  };

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
