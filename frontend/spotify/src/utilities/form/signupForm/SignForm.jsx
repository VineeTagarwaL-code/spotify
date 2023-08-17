import { useEffect, useState } from "react"
import axios from 'axios'
export default function SignForm() {
    // validated inputs
    const [validName, setValidName] = useState(true);
    const [validPass, setValidPass] = useState(true);
    const [validEmail, setValidEmail] = useState(true);
    //non-validated inputs
    const [Name, setName] = useState("");
    const [Pass, setPass] = useState("");
    const [Email, setEmail] = useState("");

    //alredy existing
    const [ExistName, setExistName] = useState(null);
    const [ExistEmail, setExistEmail] = useState(null);



 
  const handleSignup =async()=>{
    await new Promise(resolve => setTimeout(resolve, 1000));
    if(validEmail && validName && validPass){
        try{
            console.log("hey welcome bitch")

        }catch(e) {
            console.log(e)
        }
    }else{
        console.log("validation failed");

    }

     
  }



    return (
        <form className="signup-form">
            <span>
                <label htmlFor="Email">What`s your email?</label>
                <input type="email" id="email" placeholder='Enter your email ' value={Email} onChange={
                    (e) => {
                        setEmail(e.target.value)
                        setValidEmail(
                            /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value)
                        );
                    }
                } />
                <label >
                    {/* {!validEmail || ExistEmail && <h6>{ExistEmail}</h6>} */}
                    {!validEmail ? <h6 style={{color:"green"}}>Enter A valid Email</h6> : ExistEmail ? <h6>{ExistEmail}</h6> : ""}
                </label>
            </span> 




            <label htmlFor="password">Create a password</label>
            <input type="password" id="password" placeholder='Create a password' value={Pass} onChange={
                (e) => {
                  setPass(e.target.value)
                  setValidPass(
                    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/.test(e.target.value)
                  );

                }}
                 />
                 {!validPass && <h6 style={{color:"green"}}>Should have Upper , lower , special (@ , # , _ ) and digits with 8 char longs</h6>}

            <label htmlFor="name">What should we call you?</label>
            <input type="text" id='profile' placeholder='Enter a profile name' value={Name} onChange={(e)=>{
                setName(e.target.value)
                setValidName(
                    /^[A-Za-z0-9@_]{1,12}$/.test(e.target.value)
                )
            }} />
            {!validName && <h6 style={{color:"green"}}>Should be only 12 char longs</h6>}

            <button id='signup' onClick={()=>{handleSignup()}}>Sign up</button>
        </form>

    )
}