import { useDispatch } from 'react-redux';
import { login, logout } from '../redux/actions/userActions';

const useAuth = () => {
    const dispatch = useDispatch();

    const signIn = (userInfo) => {
        dispatch(login(userInfo));
    };

    const signOut = () => {
        dispatch(logout());
    };

    return { signIn, signOut };
};

export default useAuth;
