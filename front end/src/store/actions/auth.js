import * as actionTypes from './actionTypes';
import axios from '../../axios-base';

export const authInformations = (token, userName, fName, lName, profilePicture, userId) => {
    return {
        type: actionTypes.AUTH_INFORMATIONS,
        fName: fName,
        lName: lName,
        userName: userName,
        token: token,
        userId: userId,
        profilePicture: profilePicture
    }
};


export const cheackAuthState = () => {
    return (dispatch) => {
        const token = localStorage.getItem("token");
        if (!token){
            return 0
        }
        else {
            const token = localStorage.getItem("token");
            const userName = localStorage.getItem("userName");
            const fName = localStorage.getItem("fName");
            const lName = localStorage.getItem("lName");
            const profilePicture = localStorage.getItem("profilePicture");
            const userId = localStorage.getItem("userId");
            dispatch(authInformations(token,userName,fName,lName,profilePicture, userId))
        }
    }
};


const removeAuthInformation = () => {
    return {
        type: actionTypes.REMOVE_AUTH_INFORMATIONS
    }
};

export const logout = () => {
    return (dispatch) => {
        localStorage.removeItem("token");
        localStorage.removeItem("userName");
        localStorage.removeItem("fName");
        localStorage.removeItem("lName");
        localStorage.removeItem("userId");
        localStorage.removeItem("profilePicture");
        dispatch(removeAuthInformation());
    }
};

export const startProfilePicture = () => {
    return {
        type: actionTypes.START_ADD_PROFILE_PICRURE
    }
}

export const profilePictureUpdated = (profilePicture) => {
    return {
        type: actionTypes.PROFILE_PICTURE_UPDATED_SUCCESSFULY,
        profilePicture: profilePicture
    }
}

export const addProfilePicture = (userId, e, token) => {
    return (dispatch) => {
        dispatch(startProfilePicture());
        console.log("start add picture");
        let image = e.target.files;
        let reader = new FileReader();
        reader.readAsDataURL(image[0]);
        reader.onload = (e) => {
            const config = { headers: { "Authorization": "Bearer " + token, 'content-type': 'application/json' } };
            var payload = e.target.result.toString();
            console.log(payload);
            axios.put(`/api/UsersProfile/addprofilepicture/${userId}`, JSON.stringify(payload), config)
                .then(res => {
                    axios.get(`/api/UsersProfile/getprofilepicture/${userId}`, config)
                    .then(response => {
                        localStorage.setItem("profilePicture", response.data);
                        console.log("update profile picture");
                        dispatch(profilePictureUpdated(localStorage.getItem("profilePicture")));
                    })
                    .catch(err => console.log(err))
                })
                .catch(err => console.log(err))
            }
    }
}

export const updateUserInforamtion = () => {
    console.log("bla bla");
    return {
        type: actionTypes.UPDATE_USER_INFORMATION
    }
}
