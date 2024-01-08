import wishCardImg from '@/assets/wishCard.png'
import './index.less'
export default ({
  yourName,
  hisName
})=>{
 return (
  <div className='wish-card'>
    <div className='relative-container'>
    <img src={wishCardImg} alt="" className='wish-card-bg'/>
    <div className='his-name'>亲爱的: {hisName}</div>
    <div className='your-name'> {yourName} 贺</div>
    </div>
   
  </div>
 )
}