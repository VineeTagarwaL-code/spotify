import React from 'react'
import './LeftSeg.css'
export function LeftSeg (){
   return (
        <>
       <div className="left-nav">
            <div className="nav-opt">
              <img src="./images/house.png" alt="" />
             <a href="#">Home</a>
             </div>
             <div className="nav-opt">
              <img src="./images/search.png" alt="" />
              <a href="#">Search</a>
            </div>
            <div className="library">
              <div className="lib">
               <img src="./images/library.png" alt="" />
               <a href="#">Your Library</a>
              </div>
              {/* <div className="plus">
              <img src="./images/plus.png" alt="" />
              </div> */}
               <div className="lib-box">
               <div className="box">
               <p className="box-p1">Create your first playlist</p>
               <p className="box-p2">It's easy we will help you</p>
               <button className="badge">Create playlist</button>
               </div>
               <div className="box">
               <p className="box-p1">Let's find some podcasts to follow</p>
               <p className="box-p2">We will keep you updated</p>
               <button className="badge">Browse podcasts</button>
               </div>
               </div>
               <div className="side-footer">
              <ul>
                <li><a href="#">Legal</a></li>
                <li><a href="#">Privacy Center</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Cookies</a></li>
                <li><a href="#">About Ads</a></li>
                <li><a href="#">Accessibility</a></li>
                <li><a href="#">Cookies</a></li>
    
               </ul>
              </div>
             </div>
             
             </div>
    
        </>
    )
}