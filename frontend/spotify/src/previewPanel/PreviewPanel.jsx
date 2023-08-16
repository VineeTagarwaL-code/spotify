import React from 'react'
import './PreviewPanel.css'
import { useNavigate } from 'react-router-dom'
function PreviewPanel(){

    const navigate  = useNavigate();
     function handelSignFClick(){
        navigate("/signup")
     }
    return (
        <>
        <div id='panelCont'>

        
        <div id='PanelRight'>
            <p id='mainMPanel'>PREVIEW OF SPOTIFY </p>
            <p id='mainTextPanel'>Sign Up to get unlimited songs and podcasts with occasional ads . No credit card needed</p>
        </div>
        <button id='PanelLeftButton' onClick={()=>{
            handelSignFClick()
        }}>Sign Up Free</button>
        </div>
        </>
    )
}

export default PreviewPanel