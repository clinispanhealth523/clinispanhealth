import Banner from './Banner';
import Dropdown from './Dropdown';
import diversity from '../images/diversity.PNG'

const FAQ = () => {
    return (
        <div>
            <Banner color='faq'/>
            <div id="faq-banner">
                <p id="faq-banner-title">
                    Frequently Asked Questions (FAQs)
                </p>
            </div>
            <div id="container">
                <div className="inner-container">
                    <p id="faq-subtitle">
                    If you have never been in a clinical study, here is some additional information. 
                    If you have questions not listed, email them to <a>abby@clinispanhealth.com</a>
                    </p>
                </div>
                <div className="inner-container">
                    <p className="subtitle">
                    There are a lot of important things to think about before deciding to
                    participate in a trial. The informed consent process will address some of the
                    questions, but there may be other items to consider. Read on to learn more
                    about what to consider before participating in a clinical trial.
                    </p>
                </div>
                <div className="inner-container">
                    <h2>What is a clinical trial?</h2>
                    <p className="subtitle">
                    A clinical trial is a research study that is done to find out if medical treatments
                    can improve people’s health. A medical treatment can be a drug, medical
                    device, medical procedure, or a change in a person’s behavior such as diet or exercise.
                    </p>
                </div>
                <div className="inner-container">
                    <h2>Will I be compensated or will it cost me money?</h2>
                    <p className="subtitle">
                    There is NEVER any cost to you in a clinical trial. The study will fund
                    doctor visits, labs, medications, and other necessary costs. The study
                    also usually pays you directly for time, travel, etc.
                    </p>
                </div>
                <div className="diversityContainer">
                    <img id="divImg" src={diversity} alt="Diversity" />
                    <div id="innerDivContainer">
                        <h2>Why is diversity in clinical trials so important?</h2>
                        <p className="subtitle">
                        Different people may have different reactions to the same treatment, based
                        on their age, gender, weight, race, ethnicity, and other factors. Clinical trials
                        rely on volunteers to take part, and it’s vital that these people come from
                        diverse backgrounds. By including people from diverse backgrounds, clinical
                        trials can show if the treatments are safe and work well for people from all
                        different communities.
                        </p>
                    </div>
                </div>
                <div id="dropdowns">
                    <div className="line"></div>
                    <Dropdown id="1" title='Why are clinical trials needed?' para='Clinical trials are the fastest and safest way to find treatments that help
                    improve people’s health. When people participate in clinical trials they help
                    contribute to medical research that finds new or better treatments for people
                    with illnesses and diseases. The results of every clinical trial is important
                    because it gives researchers more information about the risks and benefits of
                    the treatments in the trial.'/>
                    <Dropdown id="2" title='Who can participate in a clinical trial?' para='All clinical trials have rules about who can and cannot participate. These rules
                    are called “eligibility criteria.” The criteria are based on factors such as age,
                    gender, the type and stage of a disease, previous treatment history, and other
                    medical conditions. Eligibility criteria is not used to reject people personally.
                    Instead, the eligibility criteria helps to make sure that the participants in the
                    trial are safe and that the trial gets the most accurate information about the
                    treatments being researched.
                    Some clinical trials seek participants with certain illnesses or conditions, while
                    others need healthy participants.'/>
                    <Dropdown id="3" title='When will I get a chance to go over the details of the clinical study to decide if it is right for me?' para='Once you register on our website, the local clinical research site will reach out
                    to you to answer questions. Informed consent is the process of learning about
                    a clinical trial before deciding whether or not to participate. To help someone
                    decide whether or not to participate, the doctors and nurses involved in the
                    trial are required to explain the details of the study. They also provide a
                    written document that includes details about the study including the
                    purpose, risks and potential benefits, duration, required procedures, and
                    important contact information. This document is called the “informed
                    consent form”.
                    People who are considering participating are allowed to take a reasonable
                    amount of time to review the informed consent form. They can also ask the
                    doctors and nurses any questions they have about the trial before deciding to
                    participate. They can also talk with family, friends, or their personal doctor
                    before they choose to participate.
                    Each person decides whether or not to sign the form to participate in the trial
                    and no one should pressure or influence their decision in any way. If the
                    participant is a child, then the parent or guardian will determine whether or
                    not to sign the form and enroll the child in the trial. Informed consent is not a
                    contract and the participant may leave the trial at any time for any reason.'/>
                    <Dropdown id="4" title='How are participants protected?' para='Clinical trials follow the same laws and ethical standards that all doctors,
                    nurses, and other medical professionals follow. The government also oversees
                    most clinical research and has requirements in place to protect the
                    participants. All trials must follow a detailed study plan, or protocol, that tells
                    the researchers what to do in the study.
                    The government has also established guidelines and regulations that require
                    every clinical trial to be reviewed and approved by an independent
                    committee to make sure that the trial follows the law and ethical standards.
                    Clinical trials are generally designed to protect participants’ privacy and
                    confidentiality. This means participants’ names and other identifying
                    information about illnesses and behaviors are only known by a few people at
                    the study site. The study sponsor and other researchers will not know this
                    information and the published results of the trial will not include this information.'/>
                    <Dropdown id="5" title='Can a participant leave a clinical trial after it has started?' para='Yes. A participant can leave a clinical trial at any time and for any reason.
                    Although it is not required, the participant should let the research team know
                    if they are leaving the trial and the reasons for leaving. This helps make sure the trial results are accurate.'/>
                    <Dropdown id="6" title='What is a placebo?' para='A placebo looks like a treatment but does not have any medicine in it.
                    Researchers use a placebo to help make sure any of the effects they see in the
                    participants who take the real treatments are actually caused by the
                    treatments. Not all trials use a placebo and the study plan and informed
                    consent form must state if a placebo will be used in a trial.
                    Usually, researchers use a computer program to randomly choose the
                    treatment each participant received. This helps make sure the groups are
                    chosen fairly. Researchers do this so that comparing the results of each
                    treatment is as accurate as possible. But in some trials, the doctors will
                    choose the treatment a participant receives if that is what is best for their
                    health.
                    Some clinical trials are “blinded”. This can mean that none of the participants
                    know what treatment they are receiving. In some blinded trials, even the
                    doctors or other study staff do not know what treatment each participant is
                    receiving. Trials are done this way because knowing what treatment the
                    participants are getting can affect the accuracy of the results.
                    If you have any questions that are not listed above, please reach out to us at info@clinispanhealth.com'/>
                </div>
                <br></br>
            </div>
        </div>
    );
}

export default FAQ;