import React from 'react';
import {withRouter} from 'react-router-dom';
import SignupForm from "../components/SignupForm/SignupForm";
import {login} from '../utils/auth';

function SignupContainer() {
    const signup = async ({name, password, phone, email}) => {
        const baseUrl = 'http://localhost:3001';
        const signupPath = '/user';
        const url = `${baseUrl}${signupPath}`;

        try {
            const response = await fetch(url, {
                method: 'POST',
                body: JSON.stringify({
                    data: {
                        name,
                        password,
                        phone,
                        email,
                    }
                }),
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            const json = await response.json();
            console.log(json);
            await login({username: email, password})
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    }

    return (
        <div>
            Sign up
            <SignupForm signup={signup}/>
        </div>)
}

export default withRouter(SignupContainer);
