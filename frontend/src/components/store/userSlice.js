// const initialUser = {
//     username: "",
//     email: "",
//     address:"",
//     id: 0,
//     tel:"",
//     password:""
//
// }
//
// const userReducer = (state = initialUser, action) => {
//     switch (action.type) {
//         // after login
//         case "set-user":
//             state = { ...state, ...action.newUser };
//             return state;
//
//         case "logout-user":
//             return {
//                 username: "",
//                 email: "",
//                 address:"",
//                 id: 0,
//                 tel:"",
//                 password:""
//             };
//         default:
//             console.log("reducer return default" + JSON.stringify(state));
//             return state;
//     }
// };
//
// export default userReducer;
//


import { createSlice} from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        currentUserId: 0,
        originalUser: {
            username: "",
            email: "",
            address:"",
            id: 0,
            tel:"",
            password:""
        }

    },
    reducers: {
        getUser: (state, action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state = {...state}
        },
        setUserLogout: (state, action) => {
            state.originalUser = {
                    username: "",
                    email: "",
                    address:"",
                    id: 0,
                    tel:"",
                    password:""
            }
        },
        setUserLogin: (state, action) => {
            state.originalUser = { ...state.originalUser, ...action.payload };
            state.currentUserId = action.payload.id;

            console.log("setUserLogIn "+ JSON.stringify(state));
        },
    },
})

// Action creators are generated for each case reducer function
export const { setUserLogout, setUserLogin, getUser} = userSlice.actions

export default userSlice.reducer
