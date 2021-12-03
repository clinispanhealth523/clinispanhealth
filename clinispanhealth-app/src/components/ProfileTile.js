import { useState } from "react";
import React, { Component } from 'react'
import { getUser } from '../apis/api.js'
const loggedIn = localStorage.getItem('user').split(",")
const ProfileTile = () => {

    // Returns the user if the user is logged in S
   const userData = getUser(loggedIn)
        .then(function(res) {
         //   alert(res.data)
            return res.data
        })
    
   const [user, setUser] = useState({
        first: loggedIn[0],
        last: loggedIn[1],
        dob: "",
        location: "",
        displayName: "",
        displayEmail: loggedIn[2],
        phone: "",
        gender: "",
        ethnicity: "",
        meds: "",
        check: "" 
   })

  


   /* const [inputs, setInputs] = useState({

       
    }); */

    const [checkboxes, setCheckboxes] = useState({
        breastCancer: false,
        highCholesterol: false,
        atheroclerosis: false,
        sleepApnea: false,
        asthma: false,
        diabetes: false,
        depression: false,
        constipation: false,
        prostate: false,
        highBloodPressure: false,
        copd: false,
        obesity: false,
        add: false,
        migraine: false,
        pain: false,
        ibs: false,
        sars: false,
        diabetes2: false,
        renal: false,
        alz: false,
        arthritis: false,
        anxiety: false
    })

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setUser(values => ({...values, [name]: value}));
    }

    const handleBoxChange = (event) => {
        const name = event.target.name;
        const value = event.target.checked;
        setCheckboxes(values => ({...values, [name]: !value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div id="profileContainer">
            <div id="profileTile">
                <div id="header">
                    <h1 id="profile-h1">Profile</h1>
                </div>
                <div id="fieldsContainer">
                    <div className="fieldsRow">
                        <div className='inputContainer'>
                            <label className="label"> First Name
                                <input
                                    type="text"
                                    name="first"
                                    class="input"
                                    value={loggedIn[0]}
                                    onChange={handleChange}
                                />
                            </label>
                        </div>
                        <div className='inputContainer'>
                            <label className="label"> Last Name:
                                <input
                                    type="text"
                                    name="last"
                                    class="input"
                                    value={loggedIn[1]}
                                    onChange={handleChange}
                                />
                            </label>
                        </div>
                    </div>
                    <div className="fieldsRow">
                        <div className='inputContainer'>
                            <label className="label"> Date of Birth
                                <input
                                    type="text"
                                    name="dob"
                                    class="input"
                                    placeholder="mm/dd/yyyy"
                                    value={user.dob || ""}
                                    onChange={handleChange}
                                />
                            </label>
                        </div>
                        <div className='inputContainer'>
                            <label className="label"> Location/City
                                <input
                                    type="text"
                                    name="location"
                                    class="input"
                                    value={user.location || ""}
                                    onChange={handleChange}
                                />
                            </label>
                        </div>
                    </div>
                    <div className="fieldsRow">
                        <div className='inputContainer'>
                            <label className="label"> Display Name
                                <input
                                    type="text"
                                    name="displayName"
                                    class="input"
                                    value={loggedIn[2]}
                                    onChange={handleChange}
                                />
                            </label>
                        </div>
                        <div className='inputContainer'>
                            <label className="label"> Display E-mail
                                <input
                                    type="text"
                                    name="displayEmail"
                                    class="input"
                                    value={user.displayEmail}
                                    onChange={handleChange}
                                />
                            </label>
                        </div>
                    </div>
                    <div className="fieldsRow">
                        <div className='inputContainer'>
                            <label className="label"> Phone Number
                                <input
                                    type="text"
                                    name="phone"
                                    class="input"
                                    value={user.phone || ""}
                                    onChange={handleChange}
                                />
                            </label>
                        </div>
                    </div>
                </div>
                <div id="missionContainer">
                    <p id="mission">As part of our mission to improve diversity in clinical trials, please complete the gender and ethnicity selections listed below. Thank you for helping. 
                     <u>If you have several ethnic backgrounds, please select all that apply.</u></p>
                </div>
                <div id="fieldsContainer2">
                    <div className="fieldsRow">
                         <div className='inputContainer'>
                            <label className="label"> Gender
                                <input
                                    type="text"
                                    name="gender"
                                    class="input"
                                    value={user.gender || ""}
                                    onChange={handleChange}
                                />
                            </label>
                        </div>
                        <div className='inputContainer'>
                            <label className="label"> Ethnicity
                                <input
                                    type="text"
                                    name="ethnicity"
                                    class="input"
                                    value={user.ethnicity || ""}
                                    onChange={handleChange}
                                />
                            </label>
                        </div>
                    </div>
                </div>
                <div className="medsContainer">
                    <p className="meds">Medications</p>
                    <div className="line"></div>
                    <p className="listMeds">Please list any medications you are on</p>
                    <div id="textArea">
                            <input
                                id="medsTextArea"
                                type="text"
                                name="meds"
                                class="input"
                                value={user.meds || ""}
                                onChange={handleChange}
                            />
                    </div>
                </div>
                <div className="medsContainer">
                    <p className="meds">Conditions</p>
                    <div className="line"></div>
                    <div id="checkAll">
                        <p className="listMeds">I would be interested in participating in studies for:</p>
                    </div>
                </div>
                <div id="fieldsContainer3">
                    <div className="fieldsCol">
                        <div className="checkboxContainer">
                            <input className="checkbox" type="checkbox" defaultChecked={checkboxes.breastCancer} onChange={handleBoxChange}></input>
                            <label className="checkboxLabel">Breast Cancer</label><br/>
                        </div>
                        <div className="checkboxContainer">
                            <input className="checkbox" type="checkbox" defaultChecked={checkboxes.highCholesterol} onChange={handleBoxChange}></input>
                            <label className="checkboxLabel">High Cholesterol</label><br/>
                        </div>
                        <div className="checkboxContainer">
                            <input className="checkbox" type="checkbox" defaultChecked={checkboxes.atheroclerosis} onChange={handleBoxChange}></input>
                            <label className="checkboxLabel">Atherosclerosis (Arterial Occlusive Diseases)</label><br/>
                        </div>
                        <div className="checkboxContainer">
                            <input className="checkbox" type="checkbox" defaultChecked={checkboxes.sleepApnea} onChange={handleBoxChange}></input>
                            <label className="checkboxLabel">Sleep Apnea</label><br/>
                        </div>
                        <div className="checkboxContainer">
                            <input className="checkbox" type="checkbox" defaultChecked={checkboxes.asthma} onChange={handleBoxChange}></input>
                            <label className="checkboxLabel">Asthma</label><br/>
                        </div>
                        <div className="checkboxContainer">
                            <input className="checkbox" type="checkbox" defaultChecked={checkboxes.diabetes} onChange={handleBoxChange}></input>
                            <label className="checkboxLabel">Diabetes (Mellitus) Type I</label><br/>
                        </div>
                        <div className="checkboxContainer">
                            <input className="checkbox" type="checkbox" defaultChecked={checkboxes.depression} onChange={handleBoxChange}></input>
                            <label className="checkboxLabel">Depression</label><br/>
                        </div>
                        <div className="checkboxContainer">
                            <input className="checkbox" type="checkbox" defaultChecked={checkboxes.constipation} onChange={handleBoxChange}></input>
                            <label className="checkboxLabel">Constipation (Chronic)</label><br/>
                        </div>
                        <div className="checkboxContainer">
                            <input className="checkbox" type="checkbox" defaultChecked={checkboxes.prostate} onChange={handleBoxChange}></input>
                            <label className="checkboxLabel">Prostate Enlargement</label><br/>
                        </div>
                        <div className="checkboxContainer">
                            <input className="checkbox" type="checkbox" defaultChecked={checkboxes.highBloodPressure} onChange={handleBoxChange}></input>
                            <label className="checkboxLabel">High Blood Pressure (Hypertension)</label><br/>
                        </div>
                        <div className="checkboxContainer">
                            <input className="checkbox" type="checkbox" defaultChecked={checkboxes.copd} onChange={handleBoxChange}></input>
                            <label className="checkboxLabel">Chronic Obstructive Pulmonary Disease (COPD)</label><br/>
                        </div>
                    </div>
                    <div className="fieldsCol">
                        <div className="checkboxContainer">
                            <input className="checkbox" type="checkbox" defaultChecked={checkboxes.obesity} onChange={handleBoxChange}></input>
                            <label className="checkboxLabel">Obesity/Overweight</label><br/>
                        </div>
                        <div className="checkboxContainer">
                            <input className="checkbox" type="checkbox" defaultChecked={checkboxes.add} onChange={handleBoxChange}></input>
                            <label className="checkboxLabel">Attention Deficit Disorder (ADD/ADHD)</label><br/>
                        </div>
                        <div className="checkboxContainer">
                            <input className="checkbox" type="checkbox" defaultChecked={checkboxes.migraine} onChange={handleBoxChange}></input>
                            <label className="checkboxLabel">Migraine</label><br/>
                        </div>
                        <div className="checkboxContainer">
                            <input className="checkbox" type="checkbox" defaultChecked={checkboxes.pain} onChange={handleBoxChange}></input>
                            <label className="checkboxLabel">Chronic Pain</label><br/>
                        </div>
                        <div className="checkboxContainer">
                            <input className="checkbox" type="checkbox" defaultChecked={checkboxes.ibs} onChange={handleBoxChange}></input>
                            <label className="checkboxLabel">Irritable Bowel Syndrome (IBS)</label><br/>
                        </div>
                        <div className="checkboxContainer">
                            <input className="checkbox" type="checkbox" defaultChecked={checkboxes.sars} onChange={handleBoxChange}></input>
                            <label className="checkboxLabel">SARS-CoV-2</label><br/>
                        </div>
                        <div className="checkboxContainer">
                            <input className="checkbox" type="checkbox" defaultChecked={checkboxes.diabetes2} onChange={handleBoxChange}></input>
                            <label className="checkboxLabel">Diabetes (Mellitus) Type II</label><br/>
                        </div>
                        <div className="checkboxContainer">
                            <input className="checkbox" type="checkbox" defaultChecked={checkboxes.renal} onChange={handleBoxChange}></input>
                            <label className="checkboxLabel">Renal Cell Carcinoma</label><br/>
                        </div>
                        <div className="checkboxContainer">
                            <input className="checkbox" type="checkbox" defaultChecked={checkboxes.alz} onChange={handleBoxChange}></input>
                            <label className="checkboxLabel">Alzheimers/Memory Loss</label><br/>
                        </div>
                        <div className="checkboxContainer">
                            <input className="checkbox" type="checkbox" defaultChecked={checkboxes.arthritis} onChange={handleBoxChange}></input>
                            <label className="checkboxLabel">Arthritis</label><br/>
                        </div>
                        <div className="checkboxContainer">
                            <input className="checkbox" type="checkbox" defaultChecked={checkboxes.anxiety} onChange={handleBoxChange}></input>
                            <label className="checkboxLabel">Anxiety</label><br/>
                        </div>
                    </div>
                </div>
            </div>
            <div id="saveBtnContainer">
                <button id="saveBtn">Save changes</button>
            </div>
        </div>
    );
}

export default ProfileTile;