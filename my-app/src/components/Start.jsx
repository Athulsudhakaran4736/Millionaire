import React, { useRef } from 'react'
import '../app.css'
export default function Start({setUserName}) {
    const inputRef = useRef();
    const clickHandler = ()=>{
        setUserName(inputRef.current.value);
    }
  return (
    <div className='userStart'>
        <input placeholder='Enter your name'ref={inputRef} className='userStartInput'/>
        <button className='userStartButton'onClick={clickHandler}>Start</button>
    </div>
  )
}
