const initialUser = {
    username: "",
    email: "",
    favUniversityList: [],
    usersUniversity: [],
    userReviews: [],

}

const userReducer = (state = initialUser, action) => {
    // console.log("action: ")
    // console.log(action)

    switch (action.type) {
        // after login
        case "set-user":
            state = action.newUser;
            // console.log("after setting user", state);
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

        case "like-university":
            state = {
                ...state,
                favUniversityList: [
                    action.universityId,
                    ...state.favUniversityList
                ]
            };
            return state;

        case "unlike-university":
            state = {
                ...state,
                favUniversityList: state.favUniversityList.filter(
                    universityID => universityID !== action.universityId
                )
            }
            return state;

        case "get-user-fav":
            state = {
                ...state,
                favUniversityList: action.list
            };
            // console.log("state: ", state.favUniversityList);
            return state;


        default:
            console.log("in default ", state);
            return state;
    }
};

export default userReducer;
