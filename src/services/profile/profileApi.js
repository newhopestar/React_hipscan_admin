import { wrapRequest, xapi } from '../utils';

const getProfile = wrapRequest( async () => 
    xapi().get('/profile')
);

const getHipscans =  wrapRequest( async () => 
    xapi().get('/qr')
)

const addHipscan = wrapRequest( async params => 
    xapi.post('qr', {
        params
    })    
)
export {
    getProfile,
    getHipscans,
    addHipscan,
}