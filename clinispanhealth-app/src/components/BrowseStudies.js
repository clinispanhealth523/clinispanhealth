import Banner from './Banner'
import TrialBox from './TrialBox'

const BrowseStudies = () => {
    return (
        <div>
            <Banner color='browse-studies'/>
                <div className='main'>
                <div className='searchContainer'>
                <div className='searchBox'>
                    <div className='searchLabel'>
                        <p class='label'>Search:</p>
                    </div>
                    <input className='search' placeholder='Enter a specific search term...'></input>
                </div>
                <div className='searchBox'>
                    <div className='searchLabel'>
                        <p class='label'>Sort:</p>
                    </div>
                    <div>(In Progress)</div>
                    
                </div>
            </div>
                <div className='trialContainer'>
                    <TrialBox/>
                    <TrialBox/>
                    <TrialBox/>
                    <TrialBox/>
                    <TrialBox/>
                    <TrialBox/>
                </div>
            </div>
        </div>
    )
}

export default BrowseStudies
