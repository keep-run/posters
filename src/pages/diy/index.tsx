
import '@/common/common.less'
import './index.less'
import { useEffect, useRef, useState } from 'react';
import Img1 from '@/assets/compontsImg/component-1.jpeg'
import Img2 from '@/assets/compontsImg/component-2.jpeg'
import Img3 from '@/assets/compontsImg/component-3.jpeg'
import Img4 from '@/assets/compontsImg/component-4.jpeg'
import Img5 from '@/assets/compontsImg/component-5.jpeg'
const FOOTER_IMGS = [Img1, Img2, Img3, Img4, Img5]
import DragItem from '@/components/DragItem';
export default function DIY() {
  const [flag, setFlag] = useState(1)
  const [imgs, setImgs] = useState([
    { id: '1', url: Img1, isFooter: true },
    { id: '2', url: Img2, isFooter: true },
    { id: '3', url: Img3, isFooter: true },
    { id: '4', url: Img4, isFooter: true },
    { id: '5', url: Img5, isFooter: true }
  ])
  const zIndex = useRef(10)
  const dropRef = useRef(null)

  const onDragStart = (event: any) => {
    console.log('---wzc--onDragStart---', event)

  }
  const onDrop = (event: any) => {

  }

  const allowDrop = (event: any) => {
    event.preventDefault();
  }

  const reset = () => {
    setFlag(flag + 1)
  }

  const onTouchEndCb = () => {
    zIndex.current = zIndex.current + 1
  }
  return (
    <div className='diy-container'>
      <div onClick={reset}>重置{flag}</div>
      <div className='content' ref={dropRef} id='droppable'>

      </div>
      <div draggable onTouchStart={onDragStart}>test</div>
      <div className='footer-container'>
        {imgs.filter(img => img.isFooter).map(item => (
          <DragItem 
          imgInfo={item} 
          getzIndex={() => zIndex.current}
           onTouchEndCb={onTouchEndCb} 
           dropContainer = {dropRef.current}
           droppableId = 'droppable'
           />
          // <div id={item.id} draggable onDragStart={onDragStart}>  ----------{item.id}--------</div>
          // <img src={item.url} alt="" className='img-small' id={item.id} draggable onDragStart={onDragStart} />
        ))}
      </div>
    </div>
  );
}
