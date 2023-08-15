import React from 'react'

import HomePage from './pages/HomePage/HomePage'
import LoginPage from './pages/loginPage/Login'

import './App.css'


//everything is function in react , it always return the jsx - javascript and html 
function App() {


  return (
    // react fragment
    //we use something called routing , (href a tag )/login - LoginPage etc etc 
    <>
    
        <LoginPage/>
    </>
  
     
  )
}

export default App
