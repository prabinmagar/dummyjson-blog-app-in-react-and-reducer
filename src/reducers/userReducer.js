import {
    GET_SINGLE_USER_BEGIN,
    GET_SINGLE_USER_ERROR,
    GET_SINGLE_USER_SUCCESS
} from "../utils/constants";

const userReducer = (state, action) => {
    switch(action.type){
        case GET_SINGLE_USER_BEGIN:
            return {
                ...state, singleUserLoading: true
            }
        case GET_SINGLE_USER_SUCCESS:
            return {
                ...state, singleUserLoading: false, singleUser: action.payload
            }
        case GET_SINGLE_USER_ERROR:
            return {
                ...state, singleUserLoading: false, singleUserError: true
            }
        default:
            return state;
    }
}

export default userReducer;