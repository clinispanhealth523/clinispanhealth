import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

const Dropdown = (props) => {

    const id = props.id;

    var isVisible = false;

    var arrowUp = document.createElement('FontAwesomeIcon');
    arrowUp.icon = {faChevronUp};
    arrowUp.id = id+2;
    arrowUp.onclick = handleClick;
    arrowUp.className = 'arrow';

    var line = document.createElement('div');
    line.id = id+3;
    line.className = 'line';


    function handleClick() {
        if (isVisible) {
            // remove hidden paragraph
            document.getElementById(id+1).remove();
            // flip arrow
            var arrow = document.getElementById(id+2);
            arrow.style.transform = '';
            // change color of question to black
            document.getElementById(id+4).style.color = '#000000'
            isVisible = false;
        } else {
            // flip arrow
            var arrow = document.getElementById(id+2);
            // remove line
            document.getElementById(id+3).remove();
            arrow.style.transform = 'rotateX(180deg)';
            var p = document.createElement('p');
            var newId = id + 1;
            p.innerHTML = props.para;
            p.className = 'hiddenPara';
            p.id = newId;
            // append hidden paragraph
            document.getElementById(id).appendChild(p);
            // append line
            document.getElementById(id).appendChild(line);
            // change color of question to blue
            document.getElementById(id+4).style.color = '#059EC5'
            isVisible = true;
        }
    }

    return (
        <div id={id} className='dropdownContainer'>
                <div className="questionContainer" onClick={handleClick}>
                    <p id={id+4} className='question'>{props.title}</p>
                    <FontAwesomeIcon id={id+2} className="arrow" icon={faChevronDown} />
                </div>
            <div id={id+3} className='line'></div>
        </div>
    )
}

export default Dropdown;