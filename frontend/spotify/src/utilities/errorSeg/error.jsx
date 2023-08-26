import './error.css'
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
// eslint-disable-next-line react/prop-types
export default function  Error({error}){
return(
    <>
    <div id='errorCont'>
     <p id='errorMsg'><FontAwesomeIcon icon={faCircleExclamation} size="xl" style={{ color: "#ff0000", marginRight: "5px" }} />{error}</p>
    </div>
    </>
)
}

