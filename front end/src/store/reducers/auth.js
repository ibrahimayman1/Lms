import * as actionTypes from '../actions/actionTypes';

const initialState = {
    token: null,
    userId: null,
    fName: null,
    lName: null,
    userId: null,
    profilePicture: null,
    startProfilePicture: false
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_INFORMATIONS:
            return {
                token: action.token,
                userName: action.userName,
                fName: action.fName,
                lName: action.lName,
                userId: action.userId,
                profilePicture: action.profilePicture
            }
        case actionTypes.REMOVE_AUTH_INFORMATIONS:
            return {
                token: null,
                userName: null,
                fName: null,
                lName: null,
                userId: null,
                profilePicture: null
            }
        case actionTypes.START_ADD_PROFILE_PICRURE:
            return { ...state, startProfilePicture: true }

        case actionTypes.PROFILE_PICTURE_UPDATED_SUCCESSFULY:
            return { ...state, profilePicture: action.profilePicture, startProfilePicture: false }

        case actionTypes.UPDATE_USER_INFORMATION:
            return { ...state, fName: localStorage.getItem("fName"), lName: localStorage.getItem("lName") }

        default:
            return state
    }
}

export default reducer;