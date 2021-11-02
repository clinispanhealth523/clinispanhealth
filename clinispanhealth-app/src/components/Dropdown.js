import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

const Dropdown = (props) => {

    return (
        <div className='dropdownContainer'>
            <p className='question'>{props.title}<FontAwesomeIcon className="arrow" icon={faArrowDown} /></p>
            <div className='line'></div>
        </div>
    )
}

export default Dropdown;