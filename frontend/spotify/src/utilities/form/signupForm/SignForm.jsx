import { useEffect, useState } from "react"
import axios from 'axios'
import PropTypes from 'prop-types';

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


    function navigateBack() {
        navigate('/');
    }

    function errorToNormal(){

        setTimeout(()=>{
// eslint-disable-next-line react/prop-types
props.setErrorExist(false);
// eslint-disable-next-line react/prop-types
props.setError("Validation Failed")
        },4000)
        
    }


   function clearDetails(){
        setEmail("")
        setName("")
        setPass("")
        setValidName(true);
        setValidPass(true);
        setValidEmail(true)
    }

    const handleSignup = async (e) => {
        setIsloading(true)
        e.preventDefault();
        
        if (validEmail && validName && validPass) {
            try {
                console.log("inside")
                await axios.post(`${apiBaseUrl}/signup`, {
                    name, email, pass
                }).then((response) => {
                    if (response.status == 200) {
                        //setting the localStorageItems
                        console.log("loggedin")
                        localStorage.setItem("email" , email)
                        localStorage.setItem("name" , name)
                        
                        props.setIsLoggedIn(true);
                        setSignup("Signed Up")
                      
                          navigateBack()
                    }

                })


            } catch (e) {
                setIsloading(false)
                console.log(e)
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
            <span>
                <label htmlFor="Email">What`s your email?</label>
                <input type="email" id="email" placeholder='Enter your email ' value={email} onChange={
                    (e) => {
                        setEmail(e.target.value)
                        setValidEmail(
                            /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value)
                        );
                    }
                } />
                <label >
                    {/* {!validEmail || ExistEmail && <h6>{ExistEmail}</h6>} */}
                    {!validEmail ? <h6 style={{ color: "green" }}>Enter A valid Email</h6> : ExistEmail ? <h6>{ExistEmail}</h6> : ""}
                </label>
            </span>




            <label htmlFor="password">Create a password</label>
            <input type="password" id="password" placeholder='Create a password' value={pass} onChange={
                (e) => {
                    setPass(e.target.value)
                    setValidPass(
                        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/.test(e.target.value)
                    );

                }}
            />
            {!validPass && <h6 style={{ color: "green" }}>Should have Upper , lower , special (@ , # , _ ) and digits with 8 char longs</h6>}

            <label htmlFor="name">What should we call you?</label>
            <input type="text" id='profile' placeholder='Enter a profile name' value={name} onChange={(e) => {
                setName(e.target.value)
                setValidName(
                    /^[A-Za-z0-9@_]{1,12}$/.test(e.target.value)
                )
            }} />
            {!validName && <h6 style={{ color: "green" }}>Should be only 12 char longs</h6>}

            <button id='signup' onClick={(e) => { handleSignup(e) }}>{signup}</button>
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