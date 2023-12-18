
import '@/common/common.less'
import './index.less'
import { useEffect, useState } from 'react';
import Img1  from '@/assets/compontsImg/component-1.jpeg'
import Img2  from '@/assets/compontsImg/component-2.jpeg'
import Img3  from '@/assets/compontsImg/component-3.jpeg'
import Img4  from '@/assets/compontsImg/component-4.jpeg'
import Img5  from '@/assets/compontsImg/component-5.jpeg'
const FOOTER_IMGS = [Img1,Img2,Img3,Img4,Img5]

export default function DIY() {

  return (
    <div className='diy-container'>
      <div className='content'>
        content
      </div>
      <div className='footer-container'>
      {FOOTER_IMGS.map(item=>(
        <img src={item} alt="" className='img-small'/>
      ))}
      </div>
    </div>
  );
}
