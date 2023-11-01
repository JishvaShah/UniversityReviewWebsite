const API_USER = 'http://localhost:3036/db/user';

const initialUser = {
    username: "winter",
    email: "1234",
    favUniversityList: [],
    usersUniversity: [],
    userReviews: [],

}

export const login = (user) =>
    fetch(`${API_USER}/login`, {
        method: 'POST',
        body: JSON.stringify(user),
        credentials: 'include',
        headers: {
            'content-type': 'application/json'
        }
    }).then(res => {

        if (res.ok)
            return res.json();
        else throw res;

    });

export const register = (user) =>
    fetch(`${API_USER}/register`, {
        method: 'POST',
        body: JSON.stringify(user),
        credentials: 'include',
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(res => {
            if (res.ok)
                return res.json();
            else throw res;
        });


export const getProfile = (dispatch) =>
    fetch(`${API_USER}/profile`, {
        method: 'POST',
        credentials: 'include',
    })
        .then(res =>{
            if (res.ok)
                return res.json();
            else throw res;
        })
        .then(newUser => {
            console.log("dispatch get user in getProfile service")
            console.log(newUser)
            dispatch({
                type: 'get-user',
                newUser
            })
            return(newUser);
        })
        .catch(e => console.log("No session record",e ));

export const logout = (dispatch) =>
    fetch(`${API_USER}/logout`, {
        method: 'POST',
        credentials: 'include',
    })
        .then(res => {
            dispatch({
                type: 'logout-user',
            })
        })


export const updateProfile = (dispatch, newProfile) =>
    fetch(`${API_USER}/editProfile`, {
        method: "PUT",
        body: JSON.stringify({user: newProfile}),
        credentials: 'include',
        headers: {
            'content-type': 'application/json'
        }
    }).then(res => {
        dispatch({
            type: 'update-profile',
            newProfile
        })
    })


export const getUserById = (userId) =>
    fetch(`${API_USER}/findUser`, {
        method: "POST",
        body: JSON.stringify({userId: userId}),
        credentials: 'include',
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(res => res.json());



export const getAllUsers = () =>
    fetch(`${API_USER}/allUsers`, {
        method: 'POST',
        credentials: 'include',
    })
        .then(res => res.json());







export default {
    login,
    register,
    getProfile,
    logout,
    getAllUsers,
    updateProfile
};