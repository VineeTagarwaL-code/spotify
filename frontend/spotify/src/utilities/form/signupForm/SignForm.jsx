import { useEffect, useState } from "react"
import axios from 'axios'
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';

import Loading from "../../Loading/Loading";

export default function SignForm(props) {
    // validated inputs
    const [validName, setValidName] = useState(true);
    const [validPass, setValidPass] = useState(true);
    const [validEmail, setValidEmail] = useState(true);
    //non-validated inputs
    const [name, setName] = useState("");
    const [pass, setPass] = useState("");
    const [email, setEmail] = useState("");

    //alredy existing
    const [ExistName, setExistName] = useState(null);
    const [ExistEmail, setExistEmail] = useState(null);

    const [loading, setIsloading] = useState(false)

    const navigate = useNavigate();

    const apiBaseUrl = 'http://192.168.56.1:5000';

    //state for sign up button update
    const [signup, setSignup] = useState("Sign up")


    const [strength, setStrength] = useState('');



    function navigateBack() {
        navigate('/');
    }

    function errorToNormal() {

        setTimeout(() => {
            // eslint-disable-next-line react/prop-types
            props.setErrorExist(false);
            // eslint-disable-next-line react/prop-types
            props.setError("Validation Failed")
        }, 4000)

    }

  const checkPasswordStrength = (value) => {
    // You can implement your own password strength criteria here
    if (value.length >= 8 && /[A-Za-z]/.test(value) && /[0-9]/.test(value)) {
      setStrength('Your Passowrd is strong');
    } else if (value.length >= 6 && /[A-Za-z]/.test(value)) {
      setStrength('Your Passowrd is moderate');
    } else {
      setStrength('Your Passowrd is weak ');
    }
  };




    function clearDetails() {
        setEmail("")
        setName("")
        setPass("")
        setValidName(true);
        setValidPass(true);
        setValidEmail(true);
        setStrength('');
    }

    const handleSignup = async (e) => {
        setIsloading(true)
        e.preventDefault();
        await new Promise(resolve => setTimeout(resolve, 1000));
        if (validEmail && validName && validPass ) {
            try {
                console.log("inside")

                await axios.post(`${apiBaseUrl}/signup`, {
                    name, email, pass
                }).then((response) => {

                    
                    if (response.status == 200) {

                         console.log(response)
                        localStorage.setItem("email", email)
                        localStorage.setItem("sessionId", response.data.sessionId)

                       

                        
                        setTimeout(() => {
                            setIsloading(false)
                        }, 3000);
                        clearDetails();
                        navigateBack()
                    }

                    if (response.status == 202) {


                        // eslint-disable-next-line react/prop-types
                        props.setErrorExist(true)
                        // eslint-disable-next-line react/prop-types
                        props.setError(response.data.response)
                        setTimeout(() => {
                            setIsloading(false)
                        }, 3000);

                        clearDetails();
                        errorToNormal();
                    }

                })


            } catch (e) {
                               setIsloading(false)
                console.log(e)
                  // eslint-disable-next-line react/prop-types
            props.setErrorExist(true)
            // eslint-disable-next-line react/prop-types
            props.setError("Server Error ")
            }
        } else {
            setIsloading(false)
            // eslint-disable-next-line react/prop-types
            props.setErrorExist(true)
            // eslint-disable-next-line react/prop-types
            props.setError("Validation Failed")
            clearDetails();
            errorToNormal();


        }


    }



    return (<>
        <form className="signup-form">
            <div className="inputBox">
                <label htmlFor="Email" className="inputName" >What`s your email?</label>
                <input type="email" id="email" className={`inputField ${validEmail ? '' : 'redBorder'}`}placeholder='Enter your email ' value={email} onChange={
                    (e) => {
                        setEmail(e.target.value)
                        setValidEmail(
                            /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value)
                        );
                    }
                } />
                <label >
                    {/* {!validEmail || ExistEmail && <h6>{ExistEmail}</h6>} */}
                    {!validEmail ? <h6 className="validationError"><FontAwesomeIcon icon={faCircleExclamation} size="xl" style={{ color: "#ff0000", marginRight: "5px" }} />Enter A valid Email</h6> : ExistEmail ? <h6>{ExistEmail}</h6> : ""}
                </label>
            </div>



            <div className="inputBox">
                <label htmlFor="password" className="inputName">Create a password</label>
                <input type="password" className={`inputField ${validPass ? '' : 'redBorder'}`} id="password" placeholder='Create a password' value={pass} onChange={
                    (e) => {
                        setPass(e.target.value)
                        if(e.target.value ==""){
                            setValidPass(false)
                            setStrength("")
                        }else{
                            setValidPass(true)
                        }
                        checkPasswordStrength(e.target.value);
                        
                    }}
                />
                <label >

                    {!validPass && <h6 className="validationError"><FontAwesomeIcon icon={faCircleExclamation} size="xl" style={{ color: "#ff0000", marginRight: "5px" }} />Enter a valid password</h6>}
                    {strength && <h6 className="validationError strengthChecker"><FontAwesomeIcon icon={faCircleExclamation} size="xl" style={{ color: "green", marginRight: "5px" }} />{strength}</h6> }
                </label>

            </div>


            <div className="inputBox">

                <label htmlFor="name" className="inputName">What should we call you?</label>

                <input type="text" id='profile' className="inputField" placeholder='Enter a profile name' value={name} onChange={(e) => {
                    setName(e.target.value)
                    if(e.target.value == ""){
                        setValidName(false)
                    }else{
                        setValidName(true);
                    }

                    
                }} />

                <label>
                    {!validName && <h6 className="validationError"><FontAwesomeIcon icon={faCircleExclamation} size="xl" style={{ color: "#ff0000", marginRight: "5px" }} />Enter your name</h6>}

                </label>

            </div>
{/* 
            <div className="inputBox">
                <label htmlFor="birth" className="inputName">What's your Gender? </label>
                <div id="radios">

                    <input type="radio" id="html" name="fav_language" value="HTML" />
                    <label className="radiolabel">Male</label>
                    <input type="radio" id="html" name="fav_language" value="HTML" />
                    <label className="radiolabel">Female</label>
                    <input type="radio" id="html" name="fav_language" value="HTML" />
                    <label className="radiolabel">Non-Binary</label>
                    <input type="radio" id="html" name="fav_language" value="HTML" />
                    <label className="radiolabel">Other</label>

                </div>

            </div>

            <div className="userPreference">
                <label className="container" >
                    <input type="checkbox" checked="checked" />
                    <span className="checkmark"></span>I would prefer not to receive marketing messages from Spotify
                </label> <br/>
                <label className="container" >
                    <input type="checkbox" checked="checked" />
                    <span className="checkmark"></span>Share my registration data with Spotify's content providers for marketing purposes.
                </label>

            </div> */}
            <div id="btnCont">
            <button id='signup' onClick={(e) => { handleSignup(e) }}>{signup}</button>

            </div>
            
        </form>
        {loading ? (
            <div id="loadingCont">
                <Loading />
            </div>
        )
            : null}
    </>
    )
}
SignForm.propTypes = {
    setIsLoggedIn: PropTypes.func, // Ensure setLoggedIn is a required function prop
};