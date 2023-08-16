import React from 'react'

import './Login.css'


export default function LoginPage() {
return(
    <>
<nav>
    <img src="./images/Spotify-logo.png" alt="" />
</nav>
 <div className='main'>
    <div className="content">
        <h1>Log in to Spotify</h1>
        <div className="form">
            <form>
            <label htmlFor="username">Email or username</label>
            <input type="email" id="email" placeholder='Email or username' />

            <label htmlFor="password">Password</label>
            <input type="password"id=" password" placeholder='Password' />
            <label class="toggle">Remember me
                 <input type="checkbox" class="toggle-input"/>
                  <span class="toggle-slider"></span>
             </label>     
        <button type="submit" id='button'>Log In</button>
       </form>
        </div>
    </div>
    </div>  
  </>
)
}