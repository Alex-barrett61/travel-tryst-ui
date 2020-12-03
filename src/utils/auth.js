export const setToken = (jwt) => {
    sessionStorage.setItem('authorization', jwt);
}

export const login = async ({username, password}) => {
    const baseUrl = 'http://localhost:3001';
    const loginPath = '/login';
    const url = `${baseUrl}${loginPath}/${username}/${password}`;

    try {
        const response = await fetch(url, {
            method: 'POST',
        });
        const {jwt} = await response.json();
        await setToken(jwt);
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}
