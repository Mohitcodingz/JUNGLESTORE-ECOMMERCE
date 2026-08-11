import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    function reset() {
        setEmail('')
        setPassword('')
    }

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            const response = await axios.post('http://localhost:3000/login', {
                email: email,
                password: password
            })
            console.log(response.data);
            if (response.data.success) {
                localStorage.setItem('token', response.data.token)
            }
        } catch (error) {
            console.error('The error is', error)
        }
    }
    return (
        <div style={{ display: "flex", alignItems: 'center', justifyContent: "center", flexDirection: 'column' }}>
            <h2>Login Page</h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center', justifyContent: "center", flexDirection: "column" }}>
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