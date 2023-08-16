

import './Login.css'
import LoginForm from '../../utilities/form/LoginForm/LoginForm'

export default function LoginPage() {
    return (
        <>
            <nav>
                <img src="./images/Spotify-logo.png" alt="" />
            </nav>
            <div className='main'>
                <div className="content">
                    <h1>Log in to Spotify</h1>
                    <div className="form">
                      <LoginForm/>
                    </div>
                </div>
            </div>
        </>
    )
}