import modalBg from "@/assets/modalBg.png";
import { Input } from "antd-mobile";
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

  useEffect(() => {
    if (!visible) {
      setYourName("");
      setHisName("");
    }
  }, [visible]);

  return (
    <div
      className="modal"
      onClick={onMaskClose}
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
            '--color': 'rgb(249,219,164)',
            marginLeft:10,
          }}
        />

        <Input
          placeholder=""
          value={hisName}
          onChange={(val) => {
            setHisName(val);
          }}
          style={{
            "--text-align": "center",
            position: "absolute",
            top: "291px",
            '--color': 'rgb(249,219,164)',
            marginLeft:10,
          }}
        />

        <div
          style={{
            position: "absolute",
            height: 36,
            top: 344,
            width:'100%'
          }}
          onClick={()=>onOK([yourName,hisName])}
        />
      </div>
    </div>
  );
}

export default Modal;

// export default ({ visible = false, onClose = () => {} }) => {
//   const [yourName, setYourName] = useState("");
//   const [hisName, setHisName] = useState("");
//   return (
//     <Mask
//       visible={visible}
//       onMaskClick={onClose}
//       opacity="thick"
//       className="mask-container"
//     >
//       <div
//         className="modal-content"
//         style={{
//           backgroundImage: `url(${Img1})`,
//         }}
//       >
//         <div>填写以下信息</div>
//         <div>小德帮你搬运祝福</div>
//         <div>你的姓名</div>
//         <Input
//           placeholder=""
//           value={yourName}
//           onChange={(val) => {
//             setYourName(val);
//           }}
//         />
//         <div>获赠人姓名</div>
//       </div>
//     </Mask>
//   );
// };
