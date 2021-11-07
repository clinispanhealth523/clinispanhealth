/*
reusable hyperlink for the sign-up and login pages for patient/partner/admin
*/
const HyperLink = ({name}) => {
    var n =  name === 'browse' ? 'BROWSE STUDIES' : 'Login'
    return (
        <p style={
            {
                color: name === 'browse' ? 'black' : '#059ec5',
                fontStretch: name === 'browse' ? 'ultra-condensed' : '',
                fontWeight: name === 'browse' ? 'bold' : 'normal',
            }
    } className='hyperLink'>{n}</p>
    )
}



export default HyperLink
