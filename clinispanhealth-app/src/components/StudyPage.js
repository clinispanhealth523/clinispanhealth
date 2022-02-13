import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"
import vid from '../images/study-video.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments } from '@fortawesome/free-solid-svg-icons'

const StudyPage = () => {
    const location = useLocation()

    return (
        <div className='studyPageContainer'>
            <div className='studyPageHeader'>
                    <div className='back'>
                        <Link className='studyInfo' to="/browse-studies">
                           <p>
                            &lt;-- Back to 
                                <br/>
                            Browse Studies
                            </p>
                        </Link>
                     </div>
                <div className='studyTitle'>{location.state.title}</div>
                <div className='contact'>      
                    <p>
                        Contact a CSH 
                        <br />
                        Professional
                    </p>
                    <button id="contact"><FontAwesomeIcon id="icon" icon={faComments} /></button>
                </div>
            </div>
            <div className='mainContainer'>
                <div className='main2'>
                    <div className='col'>
                        <div className='location'>
                            <p className='studyInfo'><p className='bold'>Location: </p>{location.state.state ? location.state.state + ', ' + 
                            location.state.location : location.state.location} </p>
                        </div>
                        
                        <div className='summary'>
                            <p className='studyInfo'><p className='bold'>Summary: </p>{location.state.summary}</p>
                        </div>

                        <div className='timeline'>
                            <p className='studyInfo'><p className='bold'>Timeline Available: </p>{location.state.endDate ? location.state.startDate + ' - ' + 
                            location.state.endDate : 'As of ' + location.state.startDate}</p>
                        </div>
                        
                        <div className='elig'>
                            <p className='studyInfo'><p className='bold'>Eligibility: </p>
                            Study requirements are as follows...
                                <ul>
                                    <li>Gender: {location.state.gender}</li>
                                    <li>Age: {location.state.minAge} - {location.state.maxAge}</li>
                                    <li>{location.state.population ? 'Population: ' + location.state.population : 'Any population'} </li>
                                </ul>
                            </p>   
                        </div>

                                            
                        <div className="studyBtnDiv">
                            <Link to="/study-sign-up">
                                <button className="tileBtn">Sign-up for a Pre-Screening Appointment</button>
                            </Link>
                         </div>

                        </div>
                    <div className='col2'>
                        <p className='studyInfo'><h3 className='bold'>Video explaining trial (If Available)</h3></p>
                        <img className='video' src={vid}></img>
                        <div className="studyBtnDiv">
                            <Link to="/faq">
                                <button className="tileBtn">Frequently Asked Questions</button>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}


export default StudyPage