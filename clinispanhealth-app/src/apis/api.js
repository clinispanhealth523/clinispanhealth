import axios from 'axios'

export async function getUser(loggedIn) {
    
    const result = await axios ({
        method: 'get',
        url: window.location.origin + `/user/` + loggedIn,
    }).then(function(res)  {
        return res
    })
    return result
}