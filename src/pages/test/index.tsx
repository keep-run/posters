import testImg from "@/assets/test.jpg";
import "@/common/common.less";
import { useEffect, useRef, useState } from "react";
import "./index.less";
export default () => {
  const [size, setSize] = useState({});
  const domRef = useRef();

  useEffect(() => {
    const { clientWidth, clientHeight } = domRef.current;
    const width = 0.34 * clientHeight;
    setSize({
      width,
      height: clientHeight,
    });
  }, []);
  return (
    <div className="test-container">
      <div className="header">header</div>
      <div className="content" ref={domRef}>
        <div
          className="target"
          style={{
            width: size.width || "auto",
            height: size.height || "auto",
          }}
        >
          <img
            src={testImg}
            alt=""
            style={{
              width: size.width || "auto",
              height: size.height || "auto",
            }}
            // style={{
            //   // width: 300,
            //   maxWidth: "100%",
            //   // height: 300,
            //   // width: "auto",
            //   maxHeight: "100%",
            // }}
          />
        </div>
      </div>
      <div className="footer">footer</div>
    </div>
  );
};
