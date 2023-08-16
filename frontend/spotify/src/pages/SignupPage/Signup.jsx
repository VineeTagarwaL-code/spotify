
import { useNavigate } from 'react-router-dom';
import './Signup.css'
import SignForm from '../../utilities/form/signupForm/SignForm';
export default function SignupPage() {
    function handleLoginClick() {
        navigate("/login")
    }

    function handleGoBack() {
        navigate("/");
    }
    const navigate = useNavigate();
    return (
        <>
            <div className="signup">
                <div className="header">
                    <img src="./images/Signup.png" alt="" />
                    <h1>Sign up for free to start listening.</h1>
                      <SignForm/>
                    <p>Already have an account? <span style={{ textDecoration: "underline", cursor: "pointer" , color:"green"  }} onClick={() => {
                        handleLoginClick()
                    }}>Log in</span></p>
                    <p style={{ marginTop: "20px", textDecoration: "underline", cursor: "pointer" }} onClick={() => {
                        handleGoBack()
                    }}>Go back ?</p>
                </div>
            </div>




        </>
    )
}