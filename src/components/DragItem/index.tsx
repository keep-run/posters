import { useEffect, useRef } from "react"
import './index.less'
const DragItem = ({
  onTouchEndCb,
  imgInfo,
  getzIndex,
  droppableId
}) => {

 const droppable = useRef<HTMLElement>()

 useEffect(()=>{
  droppable.current = document.getElementById(droppableId)
 },[droppableId])
  const offset = useRef({
    offsetX: 0,
    offsetY: 0,
  })
  const targetRef = useRef<any>(null)


  const onTouchStart = (e: any) => {
    const touch = e.touches[0];
    const offsetX = touch.clientX - targetRef.current?.offsetLeft;
    const offsetY = touch.clientY - targetRef.current?.offsetTop;
    offset.current = { offsetX, offsetY }
  }

  const onTouchMove = (e: TouchEvent) => {
    e.stopPropagation();
    const touch = e.touches[0];
    const x = touch.clientX - offset.current.offsetX;
    let y = touch.clientY - offset.current.offsetY;
    // const draggable = document.getElementById('draggable');
    const rect = droppable.current?.getBoundingClientRect();

    console.log('---wzc-----touch---------', touch)
    // 
    if (y < rect.bottom && y + touch.target.height > rect.bottom) {
         y =  rect.bottom - touch.target.height 
    }


    targetRef.current.style.left = `${x}px`
    targetRef.current.style.top = `${y}px`
    targetRef.current.style.position = `absolute`
    targetRef.current.style['z-index'] = getzIndex()
  }


  const onTouchEnd = (e: TouchEvent) => {
    e.stopPropagation();

    // 判断是否进入可放置区域
    // var draggable = document.getElementById('draggable');
    const rect = droppable.current?.getBoundingClientRect?.()||{};
    var draggableRect = targetRef.current.getBoundingClientRect();
    if (
      draggableRect.left >= rect.left &&
      draggableRect.right <= rect.right &&
      draggableRect.top >= rect.top &&
      draggableRect.bottom <= rect.bottom
    ) {
      // 完全处于放置区
      // draggable.classList.add('hover');
    } else {
      // 不在可放置区域，就退回去
      targetRef.current.style.position = ''
      // draggable.classList.remove('hover');
    }

    onTouchEndCb()
  }
  return (
    <img src={imgInfo.url}
      id={imgInfo.id}
      onTouchStartCapture={onTouchStart}
      onTouchMoveCapture={onTouchMove}
      onTouchEndCapture={onTouchEnd}
      onTouchEnd={onTouchEnd}
      ref={targetRef}
      className="drag-item"
    />
  )
}


export default DragItem