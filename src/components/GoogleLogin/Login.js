import React from 'react'
import { GoogleLogin } from 'react-google-login';

const clientId = '215418207398-qa6vc807hlna3moj2ep0hqj5767obuid.apps.googleusercontent.com'

function Login() {
    const onSuccess = (res) => {
        console.log('[Login Success] currentUser:', res.profileObj);
    };
    const onFailure = (res) => {
        console.log('[Login failed] res:', res);
    };

    return (
        <div>
            <GoogleLogin
            clientId={clientId}
            buttonText="Login"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            style={{ marginTop: '100px' }}
            isSignedIn = {true}
            />
        </div>
    );
};

export default Login;
