import React from "react";
import logo from "../Udoka/Assets/MEALY.svg";
import apple from "../Udoka/Assets/apple 1.svg";
import google from "../Udoka/Assets/google 1.svg";
import facebook from "../Udoka/Assets/facebook 1.svg";
import signupImage from "../Udoka/Assets/signup.svg"

const SignUp = () => {
  return (
    <div className="sign-up-page">
      <div className="left-side">
            {/* <div className="logo-div"> */}
            <img src={logo} alt="logo" className="logo"></img>
            {/* </div> */}

            <form className="input-wrapper">
            <h2>Create an Account</h2>
            <div className="label-div">
                <label htmlFor="name"></label>
            </div>
            <div className="input-div">
                <input type="text" id="name" placeholder="Name" />
            </div>

            <div className="label-div">
                <label htmlFor="email"></label>
            </div>
            <div className="input-div">
                <input type="email" id="email" placeholder="Email" />
            </div>

            <div className="label-div">
                <label htmlFor="password"></label>
            </div>
            <div className="input-div">
                <input type="password" id="password" placeholder="Password" />
            </div>

            <div className="label-div">
                <label htmlFor="password"></label>
            </div>
            <div className="input-div">
                <input
                type="password"
                id="forget-password"
                placeholder="Confirm Password"
                />
            </div>
            </form>

            <div className="checkboxes">
            <div className="first-checkbox">
                <input type="checkbox" id="discount" />
                <label htmlFor="discount" className="checkbox-label">
                I want to receive discounts, loyalty offers and other updates{" "}
                </label>
            </div>

            <div className="second-checkbox">
                <input type="checkbox" id="agree" />
                <label htmlFor="agree" className="checkbox-label">
                yes, I understand and agree to Mealy’s Terms of service{" "}
                </label>
            </div>
            </div>

            <div className="button-icons-div">
                <div>
                    <button>Create an account</button>
                </div>
                <p>Sign up using</p>
                <div className="icons">
                <img src={apple} alt="apple-icon"></img>
                <img src={google} alt="google-icon"></img>
                <img src={facebook} alt="facebook-icon"></img>
                </div>

                <p>
                Already have an account?<a href="#signIn"> Sign In</a>
                </p>
            </div>
        </div>
        <div className="right-side">
            <img src={signupImage} alt="sign-up"></img>
            {/* <img src={rightImage} alt="sign-up"></img> */}
        </div>
    </div>
  );
};

export default SignUp;
