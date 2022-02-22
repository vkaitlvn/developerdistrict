import React from 'react'
import { GoogleLogout } from 'react-google-login';

const clientId = '215418207398-qa6vc807hlna3moj2ep0hqj5767obuid.apps.googleusercontent.com';

function Logout() {
    const onSuccess = () => {
        alert('Logout made successfully');
    };
    return (
        <div>
            <GoogleLogout
            clientId = {clientId}
            buttonText = "Logout"
            onLogoutSuccess = {onSuccess}
            ></GoogleLogout>
        </div>
    );
}

export default Logout;