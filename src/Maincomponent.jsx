import React, { useState } from 'react'
import Funcomponent from './Funcomponent'
import Classcomponent from './Classcomponent'
import './Maincomponent.css'


const Maincomponent = () => {
  const [on, setOn] = useState(false);
  const [off, setOff] = useState(false);

  return (
    <div className='main'>
      <div className='text'>
        <h1 className='h'>Styling using Functional and Class component</h1>
      </div>
      <div className='body'>
      <div className='fun'>
        <button className='but' onClick={() => { setOn(!on) }}>To see styling in functional component</button>
        {on && <Funcomponent />}
      </div>
       <div className='cla'>
      <button className='but' onClick={() => { setOff(!off) }}>To see styling in class component</button>
      {off && <Classcomponent />}
      </div>
      </div>
    </div>
  )
}

export default Maincomponent