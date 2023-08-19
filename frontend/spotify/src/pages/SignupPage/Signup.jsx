
import { useNavigate } from 'react-router-dom';
import './Signup.css'
import PropTypes from 'prop-types';
import SignForm from '../../utilities/form/signupForm/SignForm';
import Error from '../../utilities/errorSeg/error';
import Success from '../../utilities/SuccessSeg/Success';
import { useState } from 'react';
// eslint-disable-next-line react/prop-types


export default function SignupPage() {
   

   const [isErrorExist , setErrorExist] = useState(false);
   const [error , setError ] = useState("");

   const [isSuccessExist , setSuccessExist] = useState(false);
 


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
                        <Error error = {error}/>
                        </div>
                ) : null}

              
                <div className="header">
                    <img src="./images/Signup.png" alt="" />
                    <h1>Sign up for free to start listening.</h1>
                      <SignForm  setErrorExist={setErrorExist} setError={setError}  />
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

SignForm.propTypes = {
   setIsLoggedIn: PropTypes.func, // Ensure setLoggedIn is a required function prop
  };
