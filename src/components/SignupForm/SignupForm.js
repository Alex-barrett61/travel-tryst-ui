import React from 'react';
import {useState} from 'react';
import './SignupForm.css'

function SignUp(props) {
    const {signup} = props

    const [userInfo, setUserInfo] = useState({
        username: '',
        password: '',
    });

    const [errors, setErrors] = useState({
        signupValidationError: false,
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
        const example = {
            name: "alex", "password": "alan101", "phone": "66666666", "email": "aeb@gmail"
        }

        // const loginSuccess = await signup(userInfo); TODO: use for real
        const loginSuccess = await signup(example);
        if (!loginSuccess) {
            const newErrors = {...errors, loginValidationError: true};
            setErrors(newErrors)
        }
    }

    const signupForm = <form className="Sign-up">
        <input type="text" placeholder="username" onChange={usernameChanged}/>
        <input type="password" placeholder="password" onChange={passwordChanged}/>
        <button onClick={handleSubmit}>Sign Up</button>
        <p className="message"><a href="#">Login</a></p>
    </form>;

    return (
        <div>
            <div className="Sign-up">
                <div className="form">
                    <form className="Sign-up">
                        <div className="header">
                            <h1>Sign Up</h1>
                            <p>Travel Tryst</p>
                        </div>
                        <input type="text" placeholder="name"/>
                        <input type="password" placeholder="password"/>
                        <input type="text" placeholder="email address"/>
                        <input type="text" placeholder="Phone Number"/>
                        <button onClick={handleSubmit}>create</button>
                        <p className="message">Already registered? <a href="#">Login</a></p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp;