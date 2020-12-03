import React from 'react';
import {withRouter} from 'react-router-dom';
import LoginForm from "../components/LoginForm/LoginForm";
import {login} from '../utils/auth';

function LoginContainer({ history }) {
    return (
        <div>
            Login Page
            <LoginForm history={history} login={login}/>
        </div>)
}

export default withRouter(LoginContainer);
