import "@/common/common.less";
import Modal from "@/components/Modal";
import WishCard from "@/components/WishCard";
import { IMG_INFO } from "@/const/imgInfo";
import ReactIf from "@/utils/ReactIf";
import { useEffect, useState } from "react";
import { history } from "umi";
import "./index.less";

export default () => {
  const [currentTemplate, setCurrentTemplate] = useState({});
  const [showModal, setModal] = useState(true);
  const [names, setNames] = useState<Array<any>>([]);

  useEffect(() => {
    // 随机选一个模式
    const templateIndx = Math.floor(Math.random() * IMG_INFO.length);

    setCurrentTemplate({ ...IMG_INFO[templateIndx] });
    // setTemplateBg(IMG_INFO[templateIndx].templateBg);
  }, []);

  const onClose = () => {};
  const onModalOK = (data: Array<any>) => {
    setModal(false);
    setNames(data);
  };

  const goDiyPage = () => {
    history.replace({
      pathname: "/diy",
      search: `?templateId=${currentTemplate.templateId}&yourName=${names[0]}&hisName=${names[1]}`,
    });
  };

  return (
    <div className="guide-container">
      <img
        src={currentTemplate?.templateBg}
        style={{ maxWidth: "100%", maxHeight: "100%" }}
      />
      <ReactIf condition={!showModal}>
        <WishCard
          yourName={names[0]}
          hisName={names[1]}
          withBtn
          onBtnClick={goDiyPage}
        />
      </ReactIf>
      <Modal visible={showModal} onClose={onClose} onOK={onModalOK} />
    </div>
  );
};
