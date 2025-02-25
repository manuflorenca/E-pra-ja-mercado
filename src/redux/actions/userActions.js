export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const login = (name, email, age, password) => ({
    type: LOGIN,
    payload: {
        name: name,
        email: email,
        age: age,
        password: password
    }
})

export const logout = (email) => ({
    type: LOGOUT,
    payload: email
})
