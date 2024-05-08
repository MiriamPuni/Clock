import React, { useState } from 'react'
import './App.css'
export default function App() {

  let date = new Date()
  let [hours, setHours] = useState(date.getHours())
  let [minutes, setMinutes] = useState(date.getMinutes())
  let [seconds, setSeconds] = useState(date.getSeconds())

  return (
    <div className='container'>
      <div className='clock' >
        <div style={{ rotate: `${(hours*30) + (minutes*0.5)}deg`}} className='pointer hours'></div>
        <div style={{ rotate: `${(minutes*6)+ (seconds*0.1)}deg`}} className='pointer minutes'></div>
        <div style={{ rotate: `${seconds*6}deg`}} className='pointer'></div>
      </div>
    </div>
  )
}