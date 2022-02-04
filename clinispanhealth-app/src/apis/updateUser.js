import axios from 'axios';

// UPDATES User Profile in the database after saving changes from 'Manage Profile'

// Takes as INPUT: data field values in the 'Manage Profile' page
// Outputs: A success code or message if the data has successfully been updated in the DB

export async function updateUser(user, host) {
    await axios({
        method: 'POST',
        url: `${host}/manage-profile`,
        responseType: JSON,
        data: {
            email: window.localStorage.getItem('email'),
            first: user.first,
            last: user.last,
            dob: user.dob,
            zipcode: user.location,
            nickname: user.displayName,
            display_email: user.displayEmail,
            phone: user.phone,
            gender: user.gender
        }

    }).then(function(res) {
        window.localStorage.setItem('first', res.data.first);
        window.localStorage.setItem('last', res.data.last);
        window.localStorage.setItem('zipcode', res.data.zipcode);
        window.localStorage.setItem('gender', res.data.gender);
        window.localStorage.setItem('dob', res.data.dob);
        window.localStorage.setItem('phone', res.data.phone);
        window.localStorage.setItem('nickname', res.data.displayName);
        window.localStorage.setItem('display_email', res.data.displayEmail);
    })

}