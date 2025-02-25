import { LOGIN, LOGOUT } from "../actions/userActions";

const initialState = {
    user: {
        name: '',
        email: '',
        age: 0,
        password: ''
    }
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                user: {
                    name: action.payload.name,
                    email: action.payload.email,
                    age: action.payload.age,
                    password: action.payload.password
                }
            }
        
        case LOGOUT:
            return initialState;
    
        default:
            return state;
    }
}

export default userReducer;
