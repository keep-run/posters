import { useEffect, useRef } from "react";
import "./index.less";

const DragItem = ({ onTouchEndCb, imgInfo, getzIndex, droppableId }: any) => {
  const droppable = useRef<any>(null);

  const getPxToNumber = (str: string) => {
    return Number(str.replace("px", ""));
  };
  useEffect(() => {
    droppable.current = document.getElementById(droppableId);
  }, [droppableId]);
  const offset = useRef({
    offsetX: 0,
    offsetY: 0,
  });
  const targetRef = useRef<any>(null);

  useEffect(() => {
    if (!imgInfo.isFooter && imgInfo.style) {
      targetRef.current.style.left = imgInfo.style.left;
      targetRef.current.style.top = imgInfo.style.top;
      targetRef.current.style.position = imgInfo.style.position;
      targetRef.current.style.zIndex = getzIndex();
    }
  }, [imgInfo, targetRef, droppable]);

  const onTouchStart = (e: any) => {
    const touch = e.touches[0];
    const offsetX = touch.clientX - targetRef.current?.offsetLeft;
    const offsetY = touch.clientY - targetRef.current?.offsetTop;
    offset.current = { offsetX, offsetY };
  };

  const onTouchMove = (e: any) => {
    e.stopPropagation();
    const touch = e.touches[0];
    const x = touch.clientX - offset.current.offsetX;
    let y = touch.clientY - offset.current.offsetY;

    targetRef.current.style.left = `${x}px`;
    targetRef.current.style.top = `${y}px`;
    targetRef.current.style.position = `absolute`;
    targetRef.current.style["z-index"] = getzIndex();
  };

  const onTouchEnd = (event: any) => {
    event.stopPropagation();

    const targetRect = targetRef.current.getBoundingClientRect();
    const droppableRect = droppable.current?.getBoundingClientRect?.() || {};

    // 完全不在放置区的时候，认为是不要了，回到原来的地方
    if (
      targetRect.right < droppableRect.left ||
      targetRect.left > droppableRect.right ||
      targetRect.bottom < droppableRect.top ||
      targetRect.top > droppableRect.bottom
    ) {
      targetRef.current.style.position = "";
      onTouchEndCb({
        style: {
          top: 0,
          left: 0,
          position: "",
        },
        isFooter: true,
        id: imgInfo.id,
      });
      return;
    }

    // 横跨左边缘
    if (targetRect.left < droppableRect.left) {
      targetRef.current.style.left = `${
        imgInfo.isFooter ? droppableRect.left : 0
      }px`;
    }

    // 横跨右边缘
    if (targetRect.right > droppableRect.right) {
      targetRef.current.style.left = `${
        droppableRect.right -
        event.target.width -
        (imgInfo.isFooter ? 0 : droppableRect.left)
      }px`;
    }

    // 横跨上边缘
    if (targetRect.top < droppableRect.top) {
      targetRef.current.style.top = `${
        imgInfo.isFooter ? droppableRect.top : 0
      }px`;
    }

    // 横跨下边缘边缘
    if (targetRect.bottom > droppableRect.bottom) {
      targetRef.current.style.top = `${
        droppableRect.bottom -
        event.target.height -
        (imgInfo.isFooter ? 0 : droppableRect.top)
      }px`;
    }

    onTouchEndCb({
      style: {
        top: `${
          getPxToNumber(targetRef.current.style.top) -
          (imgInfo.isFooter ? droppableRect.top : 0)
        }px`,
        left: `${
          getPxToNumber(targetRef.current.style.left) -
          (imgInfo.isFooter ? droppableRect.left : 0)
        }px`,
        position: "absolute",
      },
      isFooter: false,
      id: imgInfo.id,
    });
  };
  return (
    <img
      src={imgInfo.url}
      id={imgInfo.id}
      onTouchStartCapture={onTouchStart}
      onTouchMoveCapture={onTouchMove}
      onTouchEndCapture={onTouchEnd}
      onTouchEnd={onTouchEnd}
      ref={targetRef}
      className="drag-item"
    />
  );
};

export default DragItem;
