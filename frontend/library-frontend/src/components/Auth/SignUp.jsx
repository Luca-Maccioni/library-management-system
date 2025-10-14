import { useState } from 'react';
import './SignUp.css';

function SignUp() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async () => {
        const response = await fetch("http://localhost:8080/api/auth/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, email, password })
        });
        const data = await response.text();
        console.log(data);
    }

    return (
        <div className="page-container">
            <div className="header">
                <div className="text">Sign Up</div>
            </div>

            <div className="inputs">
                <div className="input">
                    <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
                </div>
                <div className="input">
                    <input type="text" placeholder="Email Address" value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div className="input">
                    <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                </div>
            </div>

            <div className="forgot-password">
                Already have an account ?<span> Sign In!</span>
            </div>

            <div className="submit-container">
                <div className="submit" onClick={handleSubmit}>Sign Up</div>
            </div>
        </div>
    )
}

export default SignUp;