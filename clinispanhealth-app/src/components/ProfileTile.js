import Input from "./Input";

const ProfileTile = () => {
    return (
        <div id="profileContainer">
            <div id="profileTile">
                <div id="header">
                    <h1 id="profile-h1">Profile</h1>
                </div>
                <div id="fieldsContainer">
                    <div className="fieldsCol">
                        <Input forName='emailAddress' label='First Name' width='40%'/>
                        <Input forName='emailAddress' label='Date of birth' placeholder='mm/dd/yyyy'/>
                        <Input forName='emailAddress' label='Display Name'/>
                        <Input forName='emailAddress' label='Phone Number'/>
                    </div>
                    <div className="fieldsCol">
                        <Input forName='emailAddress' label='Last Name' />
                        <Input forName='emailAddress' label='Location/City'/>
                        <Input forName='emailAddress' label='Display E-mail'/>
                        <Input forName='emailAddress' label='Nonprofit Organization'/>
                    </div>
                </div>
                <div id="missionContainer">
                    <p id="mission">As part of our mission to improve diversity in clinical trials, please complete the gender and ethnicity selections listed below. Thank you for helping. 
                     <u>If you have several ethnic backgrounds, please select all that apply.</u></p>
                </div>
                
            </div>
        </div>
    );
}

export default ProfileTile;