import './error.css'
import PropTypes from 'prop-types';
 
// eslint-disable-next-line react/prop-types
export default function  Error({error}){
return(
    <>
    <div id='errorCont'>
     <p id='errorMsg'>{error}</p>
    </div>
    </>
)
}

