import { counterItems } from '../constants/index.js'
import CountUp from 'react-countup'
function AnimatedCounter() {
  return (
    <div id='counter' className='padding-x-lg xl:mt-0 mt-32'>
   <div className='mx-auto grid-4-cols'>
{counterItems.map((items)=>(
    <div className='bg-zinc-900 rounded-lg p-10 flex flex-col'>
 <div key={counterItems.label} className='counter-number text-white text-5xl font-bold mb-z'> <CountUp suffix={items.suffix} end={items.value}/>
<div className='text-white-50 text-lg'>{items.label}</div>
    </div>
    </div>
   
))}
   </div>
    </div> 
  )
}

export default AnimatedCounter
