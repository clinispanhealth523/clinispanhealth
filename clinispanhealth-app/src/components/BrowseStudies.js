import Banner from './Banner'
import TrialBox from './TrialBox'
import React, { Component } from 'react'
import axios from 'axios'
import { faCalendarTimes } from '@fortawesome/free-solid-svg-icons'

class BrowseStudies extends Component  {
        constructor(props) {
        super(props)

        this.state = {
            posts: [],
            keyword: ''
        }
    }


    componentDidMount() {
        var min = Math.trunc(Math.random()*10)+1
        var max = min+10
        // 
        /*TO DO:

        OPTIONS TO SORT BY:
        https://clinicaltrials.gov/api/info/study_fields_list
        shows a list of fields that we can potentially allow the user to sort by on the page

        WHEN SEARCHING FOR SPECIFIC STUDIES
        -- users can enter a search term in the search box, and the link above must be updated by adding expr='' after 'studyfields?'


        -- users can choose how many studies to show per page. 10, 50, 100, etc. This will be updated by changing the max_rank=''
        */
        axios.get('https://clinicaltrials.gov/api/query/study_fields?&fields=BriefTitle%2C+LocationCity%2C+LocationState%2C+BaselineGroupDescription%2C+BriefSummary%2C+Gender%2C+MinimumAge%2C+MaximumAge%2C+StartDate&min_rnk=10&max_rnk=20&fmt=json')

        .then(res => {
            /* 
            
            
            response.data['StudyFieldsResponse']['StudyFields']
            returns an array of objects, where you access the study fields by 
           response.data['StudyFieldsResponse']['StudyFields'][#]

           HELPFUL Indexes after ['#']
           -- ['BriefTitle']
           -- ['LocationCity']
           -- ['LocationState']


            */
            this.setState({
                posts: res.data ? res.data['StudyFieldsResponse']['StudyFields'] : [],
                keyword: this.state.keyword
            })

        })
        .catch(error => {
            console.log(error)
        })

        
    }



    // Automatically refreshes depending on what the patient enters in the search box
    handleSearch = (event) => {
        this.setState({
            posts: this.state.posts,
            keyword: event.target.value
        })
        // Set to show the first 50 studies when a search term is entered. Can add functionality by adding a min and max setting to the "sort" button 
        var min = 1
        var max = 50
        axios.get(`https://clinicaltrials.gov/api/query/study_fields?expr=` + this.state.keyword + `&fields=BriefTitle%2C+LocationCity%2C+LocationState%2C+BaselineGroupDescription%2C+CompletionDate%2C+StudyPopulation%2C+BriefSummary%2C+Gender%2C+MinimumAge%2C+MaximumAge%2C+StartDate&min_rnk=` + 
        min + `&max_rnk=` + max + `&fmt=json`).then(res => {
            this.setState({
                posts: res.data ? res.data['StudyFieldsResponse']['StudyFields'] : [],
                keyword: this.state.keyword
            })
        })

    }
    
    render () {
     return   <div>
            <Banner color='browse-studies'/>
                <div className='main'>
                <div className='searchContainer'>
                <div className='searchBox'>
                    <div className='searchLabel'>
                        <p className='label'>Search:</p>
                    </div>
                    <input className='search' value={this.state.keyword}
                    name='keyword'
                    onChange={this.handleSearch}
                    placeholder='Enter a specific search term...'></input>
                </div>
                <div className='searchBox'>
                    <div className='searchLabel'>
                        <p className='label'>Sort:</p>
                    </div>
                <div className="dropdown">
                    <button className="dropbtn"><b>Location</b></button>
                    <div className="dropdown-content">
                        <p>Sort 1</p>
                        <p>Sort 2</p>
                        <p>Sort 3</p>
                    </div>
                </div>
                </div>
            </div>
            
                <div className='trialContainer'>
                    {
                    
                    this.state.posts ?
                    this.state.posts.map(post => <TrialBox key={post.rank} title={post['BriefTitle']} 
                    location={post['LocationCity']} state={post['LocaionState']}
                    summary={post['BriefSummary']} gender={post['Gender']} minAge={post['MinimumAge']}
                    maxAge={post['MaximumAge']} startDate={post['StartDate']}
                    endDate={post['CompletionDate']} population={post['population']}/>) :
                    null  
                    }
                </div> 
            </div>
        </div>
    }
    
}

export default BrowseStudies
