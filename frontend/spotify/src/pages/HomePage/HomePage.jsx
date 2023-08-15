import React from 'react'


import { useState } from 'react'

import './HomePage.css'


import { RightSeg } from '../../Segment/RightSegment/RightSeg'
import { LeftSeg } from '../../Segment/LeftSegment/LeftSeg'
import PreviewPanel from '../../previewPanel/PreviewPanel'

export default function HomePage() {


    //let it be 
    const [isloggedIn, setIsloggedIn] = useState(false);


    return (
        <>
            <div id='MainCont'>

                {/* responsible for holding the left side of our spotify */}
                <div id='leftSeg'>

                    {/* this is my form */}
                    <LeftSeg />
                </div>


                {/* responsible for holding the right side of our spotify */}
                <div id='rightSeg'>
                    
                    <RightSeg />
                </div>



                {/* just checking if the user is logged in or not using ternanry , using useState to manage my loggedIn state */}
                {
                    !isloggedIn ? (<footer><PreviewPanel /></footer>) : null
                }


            </div>
        </>
    )
}