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
                        <Input forName='emailAddress' label='Date of birth'/>
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
            </div>
        </div>
    );
}

export default ProfileTile;