import React from 'react';

function Login({ onLogin })
{
    return (
        <div>
            <button onClick={() => onLogin(true)}>Login</button>
        </div>
    );
}

export default Login;
