import studyImg from '../images/study-logo.png'

const TrialBox = ({title, location}) => {
    return (
        <div className='trialBox'>
            <img className='studyImage' src={studyImg} height='100px' width='100px' alt='study image'/>
            <div className='studyContainer'>
                <p className='study'>{title}</p>
                <h3 className='study'>{location.length == 1 ? location : location[0]}</h3>
            </div>
            
        </div>
    )
}

export default TrialBox
