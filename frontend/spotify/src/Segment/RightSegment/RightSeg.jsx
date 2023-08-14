import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'


import './RightSeg.css'


export function RightSeg() {
  return (
    <>
      <div id='RighSegCont'>
        <div id='navi'>
          <div id='buttonIcon'>
            <button className='iconRight'>
            <FontAwesomeIcon icon={faChevronLeft} size="xl" style={{ color: "#ededed", }}  />
            </button>
          <button className='iconRight'>
          <FontAwesomeIcon icon={faChevronRight} size="xl" style={{ color: "#ededed", }}  />
          </button>
          
        
          </div>
      
        <div id='authCont'>
         
          <button className='authBtn'>Sign up</button>
          <button className='authBtn color'>Log in</button>
        </div>
        </div>
      </div>

    </>
  )
}