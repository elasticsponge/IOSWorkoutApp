const initialState = {
    isAuthenticated: false,
    userInfo: null,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { ...state, isAuthenticated: true, userInfo: action.payload };
        case 'LOGOUT':
            return { ...state, isAuthenticated: false, userInfo: null };
        default:
            return state;
    }
};

export default userReducer;
