import './LoginF.css'
export default function LoginForm(){
    return (
        <form>
            <label htmlFor="username">Email or username</label>
            <input type="email" id="email" placeholder='Email or username' />

            <label htmlFor="password">Password</label>
            <input type="password" id=" password" placeholder='Password' />
            <label className="toggle">Remember me
                <input type="checkbox" className="toggle-input" />
                <span className="toggle-slider"></span>
            </label>
            <button type="submit" id='button'>Log In</button>
        </form>
    )
}