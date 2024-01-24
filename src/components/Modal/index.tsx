import modalBg from "@/assets/modalBg.png";
import { Input, Toast } from "antd-mobile";
import { useEffect, useRef, useState } from "react";
import "./index.less";

function Modal({ visible = false, onClose = () => {}, onOK = (data) => {} }) {
  const [yourName, setYourName] = useState("");
  const [hisName, setHisName] = useState("");
  const maskRef = useRef(null);

  const onMaskClose = (event: any) => {
    if (event.target === maskRef.current) {
      onClose();
    }
  };

  const handleOK = () => {
    if (yourName && hisName) {
      onOK([yourName, hisName]);
    } else {
      Toast.show({
        content: "请完善信息",
        position: "top",
      });
    }
  };
  useEffect(() => {
    if (!visible) {
      setYourName("");
      setHisName("");
    }
  }, [visible]);

  return (
    <div
      className="modal"
      // onClick={onMaskClose}
      ref={maskRef}
      style={{
        display: visible ? "flex" : "none",
      }}
    >
      <div
        className="modal-content"
        style={{
          backgroundImage: `url(${modalBg})`,
        }}
      >
        <Input
          placeholder=""
          value={yourName}
          onChange={(val) => {
            setYourName(val);
          }}
          style={{
            "--text-align": "center",
            position: "absolute",
            top: "211px",
            "--color": "rgb(249,219,164)",
            "--font-size": "18px",
            marginLeft: 10,
          }}
          className="name-input"
        />

        <Input
          placeholder=""
          value={hisName}
          onChange={(val) => {
            setHisName(val);
          }}
          className="name-input"
          style={{
            "--text-align": "center",
            position: "absolute",
            top: "291px",
            "--color": "rgb(249,219,164)",
            "--font-size": "18px",
            marginLeft: 10,
          }}
        />

        <div
          style={{
            position: "absolute",
            height: 36,
            top: 344,
            width: "100%",
          }}
          onClick={handleOK}
        />
      </div>
    </div>
  );
}

export default Modal;

