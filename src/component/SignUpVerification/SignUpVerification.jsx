import React from 'react'
import './style.css'

const SignUpVerification = () =>  (
    <div className="verification flex">
        <div className="verify flex">
            <header>
                <h1>Mealy</h1>
            </header>
            <div className="verify-input flex">
                <div className="verify-text flex">
                    <h3>Verify Email</h3>
                    <p>Enter verification code sent to your Email</p>
                </div>
                <div className="input flex">
                    <input type="number" placeholder='Enter code' maxLength={6}/>
                    <button type="submit">Verify</button>
                </div>
            </div>
        </div>
        <div className="image" />
    </div>
)


export default SignUpVerification