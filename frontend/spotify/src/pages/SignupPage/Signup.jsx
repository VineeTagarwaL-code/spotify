
import { useNavigate } from 'react-router-dom';
import './Signup.css'
import PropTypes from 'prop-types';
import SignForm from '../../utilities/form/signupForm/SignForm';
import Error from '../../utilities/errorSeg/error';
import Success from '../../utilities/SuccessSeg/Success';
import { useState } from 'react';
// eslint-disable-next-line react/prop-types


export default function SignupPage() {


    const [isErrorExist, setErrorExist] = useState(false);
    const [error, setError] = useState("");

    const [isSuccessExist, setSuccessExist] = useState(false);



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
                {isErrorExist ? (
                    <div id='error'>
                        <Error error={error} />
                    </div>
                ) : null}


                <div className='wrapperSignup'>
                    <img src="./images/download.png" alt="" id="spotify-black" />
                    <h2 id='signUpmsg'>Sign up for free to start listening.</h2>
                    <div id='signUpAuth'>
                        <button className='btnSignup facebook'>Sign up with Facebook</button>
                        <button className='btnSignup google'>Sign up with Google</button>
                    </div>
                    <span className="FormDivider__LineThrough-sc-1mk5332-0 bRsiqD"> or</span>
                    <SignForm setErrorExist={setErrorExist} setError={setError} />
                    <p style={{ color: "black", marginTop: "10px" }} >Have an account? <span style={{ textDecoration: "underline", cursor: "pointer", color: "green" }} onClick={() => {
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

SignForm.propTypes = {
    setIsLoggedIn: PropTypes.func, // Ensure setLoggedIn is a required function prop
};
