import './SignUp.css'

function SignUp () {
    return (
        <>
        
        <div className="page-container">
            <div className="header">
                <div className="text">Sign Up</div>
            </div>

            <div className="inputs">
                <div className="input">
                    <input type="text" placeholder="Username" />
                </div>
                <div className="input">
                    <input type="text" placeholder="Email Adress" />
                </div>
                <div className="input">
                    <input type="password" placeholder="Password" />
                </div>
            </div>

            <div className="forgot-password">
                Already have an account ?<span> Sign In!</span>
            </div>

            <div className="submit-container">
                <div className="submit">Sign Up</div>
            </div>
        </div>


        </>
    )
}

export default SignUp