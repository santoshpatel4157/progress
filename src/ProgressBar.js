import React, { useState } from 'react'

export default function ProgressBar() {
    const [count,setCount] = useState(0)

    const handleProgress=()=>{
        if(count <100){
            setCount(count+20)
        }
        
    }
    const handleReset = ()=>{
        setCount(0)
    }
    const getColor=()=>{
        if(count<40){
            return "#ff0000";
        }else if( count<70){
            return "#ffa500";
        }else {
            return "#2ecc71";
        }
    }

  return (
    <div className='container'>
               <div className='header'>ProgressBar
         <div className='progres-bar'>
     
         <div className='progres-bar-fill' style={{ width:`${count}%`,backgroundColor:getColor()}}></div>
        </div>
        
         <div className='progress-leabel'>{count}%</div>
         <button onClick={handleProgress}>progress</button>
         <button onClick={handleReset}>reset</button>
         </div>
    </div>
   
  )
}
