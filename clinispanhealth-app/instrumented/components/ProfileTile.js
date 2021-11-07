import Checkbox from "./Checkbox";
import Input from "./Input";

const ProfileTile = () => {
    return (
        <div id="profileContainer">
            <div id="profileTile">
                <div id="header">
                    <h1 id="profile-h1">Profile</h1>
                </div>
                <div id="fieldsContainer">
                    <div className="fieldsRow">
                        <Input forName='emailAddress' label='First Name' />
                        <Input forName='emailAddress' label='Last Name' />
                    </div>
                    <div className="fieldsRow">
                        <Input forName='emailAddress' label='Date of birth' placeholder='mm/dd/yyyy'/>
                        <Input forName='emailAddress' label='Location/City'/>
                    </div>
                    <div className="fieldsRow">
                        <Input forName='emailAddress' label='Display Name'/>
                        <Input forName='emailAddress' label='Display E-mail'/>
                    </div>
                    <div className="fieldsRow">
                        <Input forName='emailAddress' label='Phone Number'/>
                        <Input forName='emailAddress' label='Nonprofit Organization'/>
                    </div>
                </div>
                <div id="missionContainer">
                    <p id="mission">As part of our mission to improve diversity in clinical trials, please complete the gender and ethnicity selections listed below. Thank you for helping. 
                     <u>If you have several ethnic backgrounds, please select all that apply.</u></p>
                </div>
                <div id="fieldsContainer2">
                    <div className="fieldsRow">
                        <Input forName='emailAddress' label='Gender' />
                        <Input forName='emailAddress' label='Ethnicity' />
                    </div>
                </div>
                <div className="medsContainer">
                    <p className="meds">Medications</p>
                    <div className="line"></div>
                    <p className="listMeds">Please list any medications you are on</p>
                    <textarea id="largeInput" type="TextArea"></textarea>
                </div>
                <div className="medsContainer">
                    <p className="meds">Conditions</p>
                    <div className="line"></div>
                    <div id="checkAll">
                        <p className="listMeds">I would be interested in participating in studies for:</p>
                        <Checkbox forName='emailAddress' label='Check all' />
                    </div>
                </div>
                <div id="fieldsContainer3">
                    <div className="fieldsCol">
                        <Checkbox forName='emailAddress' label='Breast Cancer'/>
                        <Checkbox forName='emailAddress' label='High Cholesterol'/>
                        <Checkbox forName='emailAddress' label='Atherosclerosis (Arterial Occlusive Diseases)'/>
                        <Checkbox forName='emailAddress' label='Sleep Apnea'/>
                        <Checkbox forName='emailAddress' label='Asthma'/>
                        <Checkbox forName='emailAddress' label='Diabetes (Mellitus) Type I'/>
                        <Checkbox forName='emailAddress' label='Depression'/>
                        <Checkbox forName='emailAddress' label='Constipation (Chronic)'/>
                        <Checkbox forName='emailAddress' label='Prostate Enlargement'/>
                        <Checkbox forName='emailAddress' label='High Blood Pressure (Hypertension)'/>
                        <Checkbox forName='emailAddress' label='SARS-CoV-2'/>
                        <Checkbox forName='emailAddress' label='Chronic Obstructive Pulmonary Disease (COPD)'/>
                    </div>
                    <div className="fieldsCol">
                        <Checkbox forName='emailAddress' label='Obesity/Overweight' />
                        <Checkbox forName='emailAddress' label='Attention Deficit Disorder (ADD/ADHD)'/>
                        <Checkbox forName='emailAddress' label='Migraine'/>
                        <Checkbox forName='emailAddress' label='Chronic Pain'/>
                        <Checkbox forName='emailAddress' label='Irritable Bowel Syndrome (IBS)'/>
                        <Checkbox forName='emailAddress' label='SARS-CoV-2' />
                        <Checkbox forName='emailAddress' label='Diabetes (Mellitus) Type II'/>
                        <Checkbox forName='emailAddress' label='Renal Cell Carcinoma'/>
                        <Checkbox forName='emailAddress' label='Alzheimers/Memory Loss'/>
                        <Checkbox forName='emailAddress' label='Arthritis'/>
                        <Checkbox forName='emailAddress' label='Anxiety'/>
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