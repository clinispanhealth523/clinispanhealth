import studyImg from '../images/study-logo.png'
import { Link } from 'react-router-dom'

const TrialBox = ({title, location}) => {
    const newTo = {
        pathname: "/study-page",
        props: {
            title: {title},
            location: {location}
        }
    }
    return (
            <Link className='trialBox' to={newTo}>
                <img className='studyImage' src={studyImg} height='100px' width='100px' alt='study'/>
                <div className='studyContainer'>
                    <p className='study'>{title}</p>
                    <h3 className='study'>{location.length === 1 ? location : location[0]}</h3>
                </div>
                
            </Link>
    )
}

export default TrialBox
