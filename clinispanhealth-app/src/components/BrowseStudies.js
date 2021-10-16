import Banner from './Banner'
import TrialBox from './TrialBox'
import React, { Component } from 'react'
import axios from 'axios'

class BrowseStudies extends Component  {
        constructor(props) {
        super(props)

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        axios.get('https://clinicaltrials.gov/api/query/study_fields?expr=covid&fields=BriefTitle%2CLocationCity%2CLocationState&min_rnk=1&max_rnk=10&fmt=json')
        .then(response => {
            /* 
            
            
            response.data['StudyFieldsResponse']['StudyFields']
            returns an array of objects, where you access the study fields by 
           response.data['StudyFieldsResponse']['StudyFields'][#]

           HELPFUL Indexes after ['#']
           -- ['BriefTitle']
           -- ['LocationCity']
           -- ['LocationState']

           OPTIONS TO SORT BY:
           https://clinicaltrials.gov/api/info/study_fields_list
           shows a list of fields that we can potentially allow the user to sort by on the page

           WHEN SEARCHING FOR SPECIFIC STUDIES
           -- users can enter a search term in the search box, and the link above must be updated by changing expr=''

            */
           //alert(response.data['StudyFieldsResponse']['StudyFields'])
            this.setState({posts: response.data['StudyFieldsResponse']['StudyFields']})
        })
        .catch(error => {
            console.log(error)
        })
    }
    render () {
        const {posts} = this.state
     return   <div>
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
                    {
                    posts.length ?
                    posts.map(post => <TrialBox key={post.rank} title={post['BriefTitle']} 
                    location={post['LocationCity']} />) :
                    null
                    }
                </div>
            </div>
        </div>
    }
    
}

export default BrowseStudies
