import Banner from './Banner';
import Dropdown from './Dropdown';

const FAQ = () => {
    return (
        <div>
            <Banner color='faq'/>
            <div id="faq-banner">
                <p id="faq-banner-title">
                    Frequently Asked Questions about Clinical Trials
                </p>
            </div>
            <div id="container">
                <div id="inner-container">
                    <p id="faq-subtitle">
                    If you have never been in a clinical study, here is some additional information. 
                    If you have questions not listed, email them to <a>abby@clinispanhealth.com</a>
                    </p>
                </div>
                <div id="dropdowns">
                    <Dropdown title='Will I get paid or will it cost me money?'/>
                    <Dropdown title='When will I get a chance to go over the details of the clinical study to decide if it is right for me?'/>
                    <Dropdown title='Can I change my mind?'/>
                    <Dropdown title='Will my nonprofit or anyone else find out?'/>
                    <Dropdown title='Should I discuss this with my doctor?'/>
                </div>
            </div>
        </div>
    );
}

export default FAQ;