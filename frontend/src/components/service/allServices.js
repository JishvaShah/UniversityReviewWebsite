const API_USER = 'http://localhost:8080/user';
const API_FAV = 'http://localhost:8080/favourite';
const API_UNI = 'http://localhost:8080/university';
const API_REVIEWS = 'http://localhost:8080/review';


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
    fetch(`${API_USER}/getByID`, {
        method: "POST",
        body: JSON.stringify({id: userId}),
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



// university related services
export const getRecommendUni = () =>
    fetch(`${API_UNI}/recommend`, {
        method: 'POST',
        body: JSON.stringify({"num": 3}),
        credentials: 'include',
        headers: {
            'content-type': 'application/json'
        }
    }).then(res => {
        if (res.ok) {
            return res.json();
        }

        else throw res;

    });

export const getUniByID = (id) =>
    fetch(`${API_UNI}/getByID`, {
        method: 'POST',
        body: JSON.stringify(id),
        credentials: 'include',
        headers: {
            'content-type': 'application/json'
        }
    }).then(res => {
        if (res.ok) {
            return res.json();
        }

        else throw res;

    });

// export const getUniByName = (name) =>
//     fetch(`${API_UNI}/getByNameFuzzy`, {
//         method: 'POST',
//         body: JSON.stringify(name),
//         credentials: 'include',
//         headers: {
//             'content-type': 'application/json'
//         }
//     }).then(res => {
//         if (res.ok) {
//             return res.json();
//         }
//
//         else throw res;
//
//     });



// User favorite related services
export const getFavByUserId = (userID) =>
    fetch(`${API_FAV}/get_by_user_id`, {
        method: 'POST',
        body: JSON.stringify(userID),
        credentials: 'include',
        headers: {
            'content-type': 'application/json'
        }
    }).then(res => {
        if (res.ok) {
            return res.json();
        }

        else throw res;

    });

export const likeUni = ({userID, uniID}) =>
    fetch(`${API_FAV}/like`, {
        method: 'POST',
        body: JSON.stringify({userID, uniID}),
        credentials: 'include',
        headers: {
            'content-type': 'application/json'
        }
    }).then(res => {
        if (res.ok) {
            return res.json();
        }

        else throw res;

    });

export const unlikeUni = ({userID, uniID}) =>
    fetch(`${API_FAV}/unlike`, {
        method: 'POST',
        body: JSON.stringify({userID, uniID}),
        credentials: 'include',
        headers: {
            'content-type': 'application/json'
        }
    }).then(res => {
        if (res.ok) {
            return res.json();
        }

        else throw res;

    });

// all reviews related functions
export const getReviewsByUniId = (universityID) =>
    fetch(`${API_REVIEWS}/get_reviews_by_university_id`, {
        method: 'POST',
        body: JSON.stringify(universityID),
        credentials: 'include',
        headers: {
            'content-type': 'application/json'
        }
    }).then(res => {
        if (res.ok) {
            return res.json();
        }

        else throw res;

    });





export default {
    login,
    register,
    getProfile,
    logout,
    getAllUsers,
    updateProfile,
    getFavByUserId,
    getRecommendUni

};