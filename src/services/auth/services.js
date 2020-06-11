export const storeCurrentToken = token => {  localStorage.setItem('token', JSON.stringify(token)); };

export const getStoredToken = () => JSON.parse(localStorage.getItem('token'));

export const removeCurrentToken = () => { localStorage.removeItem('token')};