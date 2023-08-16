
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'


import './RightSeg.css'


export function RightSeg() {


  const navigate = useNavigate();


  const handleLoginClick = () => {
    navigate("/login")
  }

  const handleSignupClick = () => {
    navigate("/signup")
  }



  return (
    <>
      <div id='RighSegCont'>
        <div id='navi'>
          <div id='buttonIcon'>
            <button className='iconRight'>
              <FontAwesomeIcon icon={faChevronLeft} size="xl" style={{ color: "#ededed", }} />
            </button>
            <button className='iconRight'>
              <FontAwesomeIcon icon={faChevronRight} size="xl" style={{ color: "#ededed", }} />
            </button>


          </div>

          <div id='authCont'>

            <button className='authBtn' onClick={() => {
              handleSignupClick()
            }}>Sign up</button>
            <button className='authBtn color' onClick={() => {
              handleLoginClick()
            }}>Log in</button>
          </div>
        </div>
      </div>

    </>
  )
}