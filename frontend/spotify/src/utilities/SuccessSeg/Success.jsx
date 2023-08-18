import './Success.css'

 
// eslint-disable-next-line react/prop-types
export default function  Success({success}){
return(
    <>
    <div id='successCont'>
     <p id='successMsg'>{success}</p>
    </div>
    </>
)
}

