import React from 'react';
import LoginForm from "../components/LoginForm/LoginForm";

function LoginContainer() {
    const login = () => {
        console.log('fetch here')
    }

    return (
        <div>
            Login Container
            <LoginForm login={login}/>
        </div>
    )
}

export default LoginContainer;
