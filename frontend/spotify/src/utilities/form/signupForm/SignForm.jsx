
export default function SignForm() {
    return (
        <form className="signup-form">
            <label htmlFor="Email">What`s your email?</label>
            <input type="email" id="email" placeholder='Enter your email ' />
            <label htmlFor="password">Create a password</label>
            <input type="password" id="password" placeholder='Create a password' />
            <label htmlFor="name">What should we call you?</label>
            <input type="text" id='profile' placeholder='Enter a profile name' />
            <div className="gen">
                <label className="gen-label" htmlFor="gender">What`s your gender?</label>
                <div className="radio">
                    <input type="radio" id="male" name="gender" value="male" />Male
                    <input type="radio" id="female" name="gender" value="female" />Female
                    <input type="radio" id="non-binary" name="gender" value="non-binary" />Non-binary
                    <input type="radio" id="other" name="gender" value="other" />Other
                </div>
            </div>
            <button id='signup'>Sign up</button>
        </form>

    )
}