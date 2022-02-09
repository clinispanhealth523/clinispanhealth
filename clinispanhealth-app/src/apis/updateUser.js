import axios from 'axios';

// UPDATES User Profile in the database after saving changes from 'Manage Profile'

// Takes as INPUT: data field values in the 'Manage Profile' page
// Outputs: A success code or message if the data has successfully been updated in the DB

export async function updateUser(user, conditions, host) {
    // Logic to handle when a DATE is entered
    var dates = user.dob.split('-');
    const date = dates[2].concat('-').concat(dates[0]).concat('-').concat(dates[1]);
    await axios({
        method: 'POST',
        url: `${host}/manage-profile`,
        responseType: JSON,
        data: {
            email: window.localStorage.getItem('email'),
            first: user.first,
            last: user.last,
            dob: date,
            zipcode: user.location,
            nickname: user.displayName,
            display_email: user.displayEmail,
            phone: user.phone,
            gender: user.gender,
            ethnicity: user.ethnicity
        }

    }).then(function(res) {
        window.localStorage.setItem('first', res.data.first);
        window.localStorage.setItem('last', res.data.last);
        window.localStorage.setItem('zipcode', res.data.zipcode);
        window.localStorage.setItem('gender', res.data.gender);
        window.localStorage.setItem('dob', user.dob);
        window.localStorage.setItem('phone', res.data.phone);
        window.localStorage.setItem('nickname', res.data.nickname);
        window.localStorage.setItem('display_email', res.data.display_email);
        window.localStorage.setItem('ethnicity', res.data.ethnicity);
    });
   /* await axios ({
        method: 'POST',
        url: `${host}/manage-profile`,
        data: {
            breastCancer: 'Breast Cancer',
            highCholesterol: 'High Cholesterol',
            atheroclerosis: 'atheroclerosis',
            sleepApnea: 'Sleep Apnea',
            asthma: 'Asthma',
            diabetes: 'Diabetes',
            depression: 'Depression',
            constipation: 'Constipation',
            prostate: 'Prostate',
            highBloodPressure: 'High Blood Pressure',
            copd: 'COPD',
            obesity: 'Obesity',
            add: 'ADD',
            migraine: 'Migraine',
            pain: 'Pain',
            ibs: 'IBS',
            sars: 'SARS',
            diabetes2: 'Diabetes 2',
            renal: 'Renal',
            alz: 'Alzheimers',
            arthritis: 'Arthritis',
            anxiety: 'Anxiety'
        }
    }) */


}