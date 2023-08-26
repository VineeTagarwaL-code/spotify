/* eslint-disable react/prop-types */
import { useState } from "react"

import axios from 'axios'


import { useNavigate } from 'react-router-dom';

import Loading from "../../Loading/Loading";


export default function LoginForm(props) {



    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");


    const [loading, setIsloading] = useState(false)


    const navigate = useNavigate();

    const apiBaseUrl = 'http://192.168.56.1:5000';


    function navigateBack() {
        navigate('/');
    }




    function errorToNormal() {

        setTimeout(() => {
            // eslint-disable-next-line react/prop-types
            props.setErrorExist(false);
            // eslint-disable-next-line react/prop-types
            props.setError("")
        }, 4000)

    }


    function clearDetails() {
        setEmail("")
        setPass("")
    }

    async function handleLogInClick(e) {
        setIsloading(true)
        e.preventDefault();
        await new Promise(resolve => setTimeout(resolve, 1000));

        try {
            console.log("inside")

            await axios.post(`${apiBaseUrl}/login`, {
                email, pass
            }).then((response) => {
    
                console.log(response)
                if (response.status == 200) {

                   


                    localStorage.setItem("email", email)
                    localStorage.setItem("sessionId", response.data.sessionId)


                    // eslint-disable-next-line react/prop-types
                  

                    setTimeout(() => {
                        setIsloading(false)
                    }, 3000);
                    clearDetails();
                    navigateBack()
                }

               else if (response.status == 202) {


                    // eslint-disable-next-line react/prop-types
                    props.setErrorExist(true)
                    // eslint-disable-next-line react/prop-types
                    props.setError("Invalid Credentials")

                    setTimeout(() => {
                        setIsloading(false)
                    }, 2000);

                    clearDetails();
                    errorToNormal();
                }

            })


        } catch (e) {
            setIsloading(false)
              // eslint-disable-next-line react/prop-types
            props.setErrorExist(true)
            props.setError("Server Error")
            clearDetails();
                    errorToNormal();
            
        }

    }


    return (
        <>
            <form>

                <div className="inputBox">
                    <label htmlFor="username" className="inputName white" >Email or username</label>
                    <input  className="inputField white"  type="email" id="email" placeholder='Email or username' value={email} onChange={(e)=>{
                        setEmail(e.target.value)
                    }}/>

                </div>


                <div className="inputBox">
                    <label htmlFor="password" className="inputName white">Password</label>
                    <input className="inputField  white" type="password" id=" password" placeholder='Password' value={pass} onChange={(e)=>{
                        setPass(e.target.value)
                    }} />

                </div>


                <div className="inputBox">
                    <label className="toggle">Remember me
                        <input type="checkbox" className="toggle-input" />
                        <span className="toggle-slider"></span>
                    </label>
                </div>



                <button type="submit" id='login' onClick={(e) => { handleLogInClick(e) }}>Log In</button>
            </form>
            {loading ? (
                <div id="loadingContLogin">
                    <Loading />
                </div>
            )
                : null}
        </>
    )
}