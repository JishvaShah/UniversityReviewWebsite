const initialUser = {
    username: "",
    email: "",
    address:"",
    id: 0,
    tel:"",
    password:""

}

const userReducer = (state = initialUser, action) => {

    switch (action.type) {
        // after login
        case "set-user":
            state = action.newUser;
            return state;

        case "get-user":
            // console.log("state: ", state);
            state = action.newUser;
            return state;

        case "logout-user":
            state = {
                username: "",
                email: "",
                favUniversityList: [],
                usersUniversity: [],
                userReviews: [],
            }
            return state;

        case "update-profile":
            state = action.newProfile
            // console.log("new profile in reducer: ")
            // console.log(state);
            return state;

        default:
            return state;
    }
};

export default userReducer;
