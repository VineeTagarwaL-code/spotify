

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage'
import LoginPage from './pages/loginPage/Login'

import './App.css'
import SignupPage from './pages/signupPage/Signup'


//everything is function in react , it always return the jsx - javascript and html 
function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/signup" element={<SignupPage/>}/>
      </Routes>
    </Router>
  )
}

export default App
