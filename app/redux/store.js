import { createStore, combineReducers } from 'redux';
import userReducer from './reducers/userReducer';

const rootReducer = combineReducers({
    user: userReducer,
    // Add more reducers as needed
});

const store = createStore(rootReducer);

export default store;
