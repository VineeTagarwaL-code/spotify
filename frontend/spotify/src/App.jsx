import { useState } from 'react'
// hooks in react 
import PreviewPanel from './previewPanel/PreviewPanel'
import { LeftSeg  } from './Segment/LeftSegment/LeftSeg';
import { RightSeg } from './Segment/RightSegment/RightSeg';
import './App.css'


//everything is function in react , it always return the jsx - javascript and html 
function App() {
  const [isloggedIn, setIsloggedIn] = useState(false);

  return (
    // react fragment
    <>
     <div id='MainCont'>




    {/* responsible for holding the left side of our spotify */}
     <div id='leftSeg'>
      <LeftSeg/>
     </div>



     {/* responsible for holding the right side of our spotify */}
     <div  id='rightSeg'>
      <RightSeg/>
     </div>



      {/* just checking if the user is logged in or not using ternanry , using useState to manage my loggedIn state */}
      {
        !isloggedIn ? (<footer><PreviewPanel /></footer>) : null
      }

      
     </div>
    </>
  )
}

export default App
