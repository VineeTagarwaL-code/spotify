import { useState } from 'react'
// hooks in react 
import PreviewPanel from './previewPanel/PreviewPanel'

import './App.css'


//everything is function in react , it always return the jsx - javascript and html 
function App() {
  const [isloggedIn, setIsloggedIn] = useState(false);

  return (
    // react fragment
    <>

     

      {/* just checking if the user is logged in or not using ternanry , using useState to manage my loggedIn state */}
      {
        !isloggedIn ? (<footer><PreviewPanel /></footer>) : null
      }

    </>
  )
}

export default App
