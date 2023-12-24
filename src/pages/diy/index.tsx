import Img1 from "@/assets/compontsImg/component-1.jpeg";
import Img2 from "@/assets/compontsImg/component-2.jpeg";
import Img3 from "@/assets/compontsImg/component-3.jpeg";
import Img4 from "@/assets/compontsImg/component-4.jpeg";
import Img5 from "@/assets/compontsImg/component-5.jpeg";
import "@/common/common.less";
import Modal from "@/components/Modal";
import ReactIf from "@/utils/ReactIf";
import classNames from "classnames";
import html2canvas from "html2canvas";
import { useEffect, useRef, useState } from "react";
import "./index.less";

import Bg1 from "@/assets/mainImg/bg1.jpg";
import Bg2 from "@/assets/mainImg/bg2.jpg";
import Bg3 from "@/assets/mainImg/bg3.jpg";

const BG_IMGS = [Bg1, Bg2, Bg3];
const TEMPLATE_IMGS = [Bg1, Bg2, Bg3];

const INIT_IMGS = [
  { id: "1", url: Img1, isFooter: true },
  { id: "2", url: Img2, isFooter: true },
  { id: "3", url: Img3, isFooter: true },
  { id: "4", url: Img4, isFooter: true },
  { id: "5", url: Img5, isFooter: true },
];

import DragItem from "@/components/DragItem";
export default function DIY() {
  const [flag, setFlag] = useState(1);
  const [bg, setBg] = useState(BG_IMGS[0]);
  const [templateImg, setTemplateImg] = useState(TEMPLATE_IMGS[0]);
  const [isPreview, setIsPreview] = useState(false);
  const [mode, setMode] = useState("diy");
  const [imgs, setImgs] = useState(INIT_IMGS);
  const [showModal, setModal] = useState(false);
  const zIndex = useRef(10);
  const dropRef = useRef(null);
  const previewRef = useRef(null);
  const [names, setNames] = useState<Array<any>>([]);

  useEffect(() => {
    // 随机选一个背景图
    setBg(BG_IMGS[Math.floor(Math.random() * BG_IMGS.length)]);
  }, []);

  const allowDrop = (event: any) => {
    event.preventDefault();
  };

  const onModalOK = (data: Array<any>) => {
    setModal(false);
    setNames(data);
    setTimeout(() => {
      html2canvas(dropRef.current).then((canvas) => {
        previewRef.current.src = canvas.toDataURL("image/png");
        setIsPreview(true);
      });
    }, 1000);
  };

  const onTouchEndCb = (data: any) => {
    const newImgs = imgs.map((img) => {
      if (data.id === img.id) {
        return { ...img, ...data };
      } else {
        return img;
      }
    });
    setImgs(newImgs);
    zIndex.current = zIndex.current + 1;
  };

  const onReset = () => {
    setIsPreview(false);
    setImgs(INIT_IMGS);
    setMode("diy");
    setNames([]);
  };

  const onClose = () => {
    setModal(false);
    setNames([]);
  };
  return (
    <div className="diy-container">
      <div className="header">
        <div className="action" onClick={onReset}>
          重置
        </div>
        <ReactIf condition={!isPreview}>
          <div onClick={() => setModal(true)} className="action">
            下一步
          </div>
        </ReactIf>
      </div>

      <div
        className="content"
        ref={dropRef}
        id="droppable"
        style={{
          backgroundImage: `url(${mode === "diy" ? bg : templateImg})`,
        }}
      >
        <ReactIf condition={names[1]}>
          <div
            className="show-hisName"
            style={{
              zIndex: zIndex.current + 1,
              // display: names[1] ? "flex" : "none",
            }}
          >
            尊敬的{names[1]}
          </div>
        </ReactIf>
        <ReactIf condition={names[0]}>
          <div
            className="show-YourName"
            style={{
              zIndex: zIndex.current + 1,
              // display: names[0] ? "flex" : "none",
            }}
          >
            From{names[0]}
          </div>
        </ReactIf>
        {/* canvas生成的图 */}
        <img
          src="null"
          alt="Preview"
          ref={previewRef}
          className="preview"
          style={{
            zIndex: zIndex.current+10,
            display: isPreview ? "flex" : "none",
          }}
        />

        <ReactIf condition={mode === "diy"}>
          {imgs
            .filter((img) => !img.isFooter)
            .map((item) => (
              <DragItem
                key={`droppable-${item.id}`}
                imgInfo={item}
                getzIndex={() => zIndex.current}
                onTouchEndCb={onTouchEndCb}
                dropContainer={dropRef.current}
                droppableId="droppable"
              />
            ))}
        </ReactIf>
      </div>
      <div className="footer-container">
        <ReactIf condition={!isPreview}>
          <div className="mode-select">
            <div
              className={classNames("mode-item", {
                "active-mode": mode === "diy",
              })}
              onClick={() => setMode("diy")}
            >
              自定义DIY
            </div>
            <div className="divider" />
            <div
              className={classNames("mode-item", {
                "active-mode": mode === "template",
              })}
              onClick={() => setMode("template")}
            >
              场景模板
            </div>
          </div>
          <div className="footer-imgs">
            <ReactIf condition={mode === "diy"}>
              {imgs
                .filter((img) => img.isFooter)
                .map((item) => (
                  <DragItem
                    key={`footer-${item.id}`}
                    imgInfo={item}
                    getzIndex={() => zIndex.current}
                    onTouchEndCb={onTouchEndCb}
                    dropContainer={dropRef.current}
                    droppableId="droppable"
                  />
                ))}
            </ReactIf>
            <ReactIf condition={mode === "template"}>
              {TEMPLATE_IMGS.map((item, index) => (
                <img
                  key={index}
                  src={item}
                  className="template-img"
                  onClick={() => setTemplateImg(item)}
                />
              ))}
            </ReactIf>
          </div>
        </ReactIf>
        <ReactIf condition={isPreview}>
          <div className="preview-footer">
            <div className="line"></div>
            <div className="save-tip">长按海报保存</div>
            <div className="line"></div>
          </div>
        </ReactIf>
      </div>
      <Modal visible={showModal} onClose={onClose} onOK={onModalOK} />
    </div>
  );
}
