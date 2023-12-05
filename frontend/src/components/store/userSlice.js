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

        },
    },
})

// Action creators are generated for each case reducer function
export const { setUserLogout, setUserLogin, getUser} = userSlice.actions

export default userSlice.reducer
