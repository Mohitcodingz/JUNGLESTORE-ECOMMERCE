import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    function reset() {
        setEmail('')
        setPassword('')
    }
    return (
        <div style={{ display: "flex", alignItems: 'center', justifyContent: "center", flexDirection: 'column' }}>
            <h2>Login Page</h2>
            <form action="" style={{ display: 'flex', alignItems: 'center', justifyContent: "center", flexDirection: "column" }}>
                <input type="email" value={email} placeholder='email' onChange={(e) => { setEmail(e.target.value) }} />
                <br />
                <input type="password" value={password} required placeholder='password' onChange={(e) => { setPassword(e.target.value) }} />
                <br />
                <div className="btnContainer" style={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
                    <button type='button' onClick={reset}>Reset</button>
                    <button type='submit'>Submit</button>
                </div>
            </form>
            <p>Don't have an Account</p>
            <Link to='/register'>Register Here</Link>
        </div>
    );
}       