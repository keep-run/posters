import "@/common/common.less";
import WishCard from "@/components/WishCard";
import { IMG_INFO } from "@/const/imgInfo";
import ReactIf from "@/utils/ReactIf";
import classNames from "classnames";
import html2canvas from "html2canvas";
import { useEffect, useMemo, useRef, useState } from "react";
import { useLocation } from "umi";
import "./index.less";

import DragItem from "@/components/DragItem";

const FOOTERS_LIST = new Array(5).fill({});

export default function DIY() {
  const [isPreview, setIsPreview] = useState(false);
  const [mode, setMode] = useState("diy");
  // const [showModal, setModal] = useState(false);
  const zIndex = useRef(10);
  const dropRef = useRef(null);
  const previewRef = useRef(null);
  const [names, setNames] = useState<Array<any>>([]);
  const [currentTemplate, setCurrentTemplate] = useState({});
  const [size, setSize] = useState({});
  const { search } = useLocation();

  useEffect(() => {
    // const { clientWidth, clientHeight } = dropRef.current;
    // const width = 0.5 * clientHeight;
    // setSize({
    //   width,
    //   height: clientHeight,
    // });

    let searchParams = new URLSearchParams(search);
    const templateId = searchParams.get("templateId");
    const hisName = searchParams.get("hisName");
    const yourName = searchParams.get("yourName");
    setNames([yourName, hisName]);
    const current = IMG_INFO.find((item) => item.templateId == templateId);
    setCurrentTemplate(current);
    // setTemplateBg(current.templateBg);
  }, []);

  const onNext = () => {
    setTimeout(() => {
      html2canvas(dropRef.current).then((canvas) => {
        previewRef.current.src = canvas.toDataURL("image/png");
        setIsPreview(true);
      });
    }, 1000);
  };

  const onTouchEndCb = (data: any) => {
    // 从内容区拖拽到底部的，需要放到最后去
    let toLast = false
    let newImgs = currentTemplate?.icons
      ?.map?.((img) => {
        if (data.id === img.id) {
          toLast = (!img.isFooter) && data.isFooter
          return { ...img, ...data, style: { ...img.style, ...data.style } };
        } else {
          return img;
        }
      })
      if(toLast)
      newImgs = newImgs.sort((img1, img2) => (img2.id === data.id ? -1 : 0));

    // console.log("newImgs---", newImgs);
    setCurrentTemplate({ ...currentTemplate, icons: newImgs });
    zIndex.current = zIndex.current + 1;
  };

  const onReset = () => {
    setIsPreview(false);
    let searchParams = new URLSearchParams(search);
    const templateId = searchParams.get("templateId");
    setCurrentTemplate(IMG_INFO.find((item) => item.templateId == templateId));
    setMode("diy");
  };

  const handleTemplateChange = (templateId) => {
    setCurrentTemplate(IMG_INFO.find((item) => item.templateId == templateId));
  };

  // const {diyFooterList,footerImgs} = useMemo(()=>{

  // },[currentTemplate])

  const diyFooters = useMemo(
    () => currentTemplate?.icons?.filter((item) => item.isFooter) || [],
    [currentTemplate]
  );

  return (
    <div className="diy-container">
      <div className="header">
        <div className="action" onClick={onReset}>
          重置
        </div>
        <ReactIf condition={!isPreview}>
          <div onClick={onNext} className="action">
            下一步
          </div>
        </ReactIf>
      </div>

      <div
        className="content"
        style={{
          flexGrow: isPreview ? 0 : 1,
        }}
      >
        <div ref={dropRef} id="droppable" className="droppable">
          <img
            src={currentTemplate?.diyBg}
            style={{
              width: "100%",
            }}
          />

          <WishCard
            yourName={names[0]}
            hisName={names[1]}
            bgImg={currentTemplate?.wishBg}
          />
          {/* canvas生成的图 */}
          <img
            src="null"
            alt="Preview"
            ref={previewRef}
            className="preview"
            style={{
              zIndex: zIndex.current + 10,
              display: isPreview ? "flex" : "none",
              // width: size.width || "auto",
              // height: size.height || "auto",
            }}
          />

          {/* <ReactIf condition={mode === "diy"}> */}
          {currentTemplate?.icons
            ?.filter?.((img) => !img.isFooter)
            ?.map((item) => (
              <DragItem
                key={`droppable-${item.id}`}
                disable = {mode === "template"}
                imgInfo={item}
                getzIndex={() => zIndex.current}
                onTouchEndCb={onTouchEndCb}
                dropContainer={dropRef.current}
                droppableId="droppable"
                footerIsOver={diyFooters?.length >= FOOTERS_LIST.length}
              />
            ))}
          {/* </ReactIf> */}
        </div>
      </div>
      <div className="footer-container">
        <ReactIf condition={!isPreview}>
          <div className="mode-select">
            <div
              className={classNames("mode-item", {
                "active-mode": mode === "diy",
              })}
              onClick={() => {
                setMode("diy");
              }}
            >
              自定义DIY
            </div>
            <div className="divider" />
            <div
              className={classNames("mode-item", {
                "active-mode": mode === "template",
              })}
              onClick={() => {
                setMode("template");
              }}
            >
              场景模板
            </div>
          </div>
          <div className="footer-imgs">
            {/* {FOOTERS_LIST} */}
            {FOOTERS_LIST.map((_, index) => (
              <>
                <ReactIf condition={mode === "diy"}>
                  <div className="footer-item-container">
                    <ReactIf condition={diyFooters[index]?.isFooter}>
                      <DragItem
                        key={`footer-${diyFooters[index]?.id}`}
                        imgInfo={diyFooters[index]}
                        footerIsOver={diyFooters?.length >= FOOTERS_LIST.length}
                        getzIndex={() => zIndex.current}
                        onTouchEndCb={onTouchEndCb}
                        dropContainer={dropRef.current}
                        droppableId="droppable"
                      />
                    </ReactIf>
                  </div>
                </ReactIf>

                {/* 场景模板，展示背景图 */}
                <ReactIf condition={mode === "template"}>
                <div className="footer-item-container">
                <ReactIf condition={IMG_INFO[index]}>
                    <img
                      key={index}
                      src={IMG_INFO[index]?.templateBg}
                      className="template-img"
                      onClick={() => handleTemplateChange(IMG_INFO[index]?.templateId)}
                      // onClick={() => setTemplateBg(item.templateBg)}
                    />
                 
                  </ReactIf>
                </div>
                </ReactIf>
              </>
            ))}
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
      {/* <Modal visible={showModal} onClose={onClose} onOK={onModalOK} /> */}
    </div>
  );
}
