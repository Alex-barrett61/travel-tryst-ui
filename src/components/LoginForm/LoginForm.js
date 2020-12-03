import React from 'react';
import {useState} from 'react';
import './LoginForm.css'

function LoginForm(props) {
    const {login, history} = props

    const [userInfo, setUserInfo] = useState({
        username: '',
        password: '',
    });

    const [errors, setErrors] = useState({
        loginValidationError: false,
    })

    const usernameChanged = (event) => {
        const value = event.target.value;
        const newUserInfo = {...userInfo, username: value};
        setUserInfo(newUserInfo);
    }

    const passwordChanged = (event) => {
        const value = event.target.value;
        const newUserInfo = {...userInfo, password: value};
        setUserInfo(newUserInfo);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const loginSuccess = await login(userInfo);
        if (!loginSuccess) {
            const newErrors = {...errors, loginValidationError: true};
            setErrors(newErrors)
        }
    }

    const goToSignup = () => {
        history.push('/signup')
    }

    const loginForm = <form className="login-form">
        <input type="text" placeholder="username" onChange={usernameChanged}/>
        <input type="password" placeholder="password" onChange={passwordChanged}/>
        <button onClick={handleSubmit}>login</button>
        <p className="message"><a onClick={goToSignup}>Sign Up</a></p>
    </form>;

    const erroredLoginForm = <form className="login-form">
        "derp"
    </form>;

    return (
        <div>
            <div className="login-page">
                <div className="form">
                    <form className="register-form">
                        <div className="header">
                            <h1>Header</h1>
                            <p>Travel Tryst</p>
                        </div>
                        <input type="text" placeholder="name"/>
                        <input type="password" placeholder="password"/>
                        <input type="text" placeholder="email address"/>
                        <button>create</button>
                        <p className="message">Already registered? <a href="#">Sign In</a></p>
                    </form>
                    {errors.loginValidationError ? erroredLoginForm : loginForm}
                </div>
            </div>
        </div>
    )
}

export default LoginForm;
