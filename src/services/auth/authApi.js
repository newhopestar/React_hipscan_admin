import { wrapRequest, xapi } from '../utils';

const login = wrapRequest( async (login, password) => 
    xapi().post('/authorization',{
        login,
        password
    })
);

const register = wrapRequest( async params => 
    xapi().post('/registration', 
        params
    )
);
export { login, register };