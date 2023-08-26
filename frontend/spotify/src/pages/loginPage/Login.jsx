/* eslint-disable react/prop-types */

import { useEffect, useState } from 'react';
import './Login.css'
import Error from '../../utilities/errorSeg/error';
import { useParams } from 'react-router-dom';
import LoginForm from '../../utilities/form/LoginForm/LoginForm'

export default function LoginPage() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const [isErrorExist, setErrorExist] = useState(false);
  const [error, setError] = useState("");


  useEffect(() => {
    if (localStorage.getItem("sessionId") != null) {
      setIsLoggedIn(true)
    }
  }, [])

  return (
    <>
     <div id='LoginCont'>
     <nav id='loginNav'>
        <img src="./images/Spotify-logo.png" alt="" id="spotify-black" className='loginSpotify'/>
      </nav>

      <div className='formLoginCont'>
          <div id='mainLoginCont'>
          <h2 id='LogInmsg' className=''>Log in to Spotify</h2>
          <div id='signUpAuth'>
                        <button className='LoginActBtn'>Continue With Google</button>
                        <button className='LoginActBtn'>Continue With facebook</button>
                        <button className='LoginActBtn'>Continue With apple</button>
                        <button className='LoginActBtn'>Continue With phone number</button>
                      
                    </div>
          </div>
      </div>
     </div>
   

      {/* {isErrorExist ? (
        <div id='error'>
          <Error error={error} />
        </div>
      ) : null}


      <div className='main'>
        <div className="content">
          {
            // eslint-disable-next-line react/prop-types
            isLoggedIn ?
              <h1>Already Logged In</h1> : <h1>Log in to Spotify</h1>
          }

          {
            // eslint-disable-next-line react/prop-types
            isLoggedIn ?
              (
                null

              ) : (
                <div className="form">
                  <LoginForm setErrorExist={setErrorExist} setError={setError} />
                </div>
              )
          }




        </div>
      </div> */}
    </>
  )
}