import React from 'react';
import './LoginForm.css'

function LoginForm(props) {
    const {login} = props

    return (
        <div onClick={login}>Login Form</div>
    )
}

export default LoginForm;
