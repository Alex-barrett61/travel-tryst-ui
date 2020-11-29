import React from 'react';
import LoginForm from "../components/LoginForm/LoginForm";
import {login} from '../utils/auth';

function LoginContainer() {
    return (
        <div>
            Login Page
            <LoginForm login={login}/>
        </div>)
}

export default LoginContainer;
