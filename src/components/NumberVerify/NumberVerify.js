import { Component } from "react";
import './NumberVerify.css'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import {Link} from 'react-router-dom'
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import firebase from "../../firebase";
// eslint-disable-next-line 
import PasswordVerify from '../PasswordVerify/PasswordVerify'

import 'react-phone-input-2/lib/material.css'

class NumberVerify extends Component{
    state = {isSubmit : false, phone : ''}

    submitButton = () => {
        this.setState({isSubmit : true})
    }

    changeHandle = event => {
        console.log(event)
    }

    configureCaptch = () => {
        

        const auth = getAuth();
        window.recaptchaVerifier = new RecaptchaVerifier(auth, 'sign-in-button', {
          'size': 'invisible',
          'callback': (response) => {
            // reCAPTCHA solved, allow signInWithPhoneNumber.
            this.onSignInSubmit();
          }
        });
          
    }

    onSignInSubmit = event => {
        event.preventDefault()
        this.configureCaptch()
        const phoneNumber = "+" + this.state.phone;
        
        const appVerifier = window.recaptchaVerifier;

        const auth = getAuth();
        signInWithPhoneNumber(auth, phoneNumber, appVerifier)
            .then((confirmationResult) => {
            // SMS sent. Prompt user to type the code from the message, then sign the
            // user in with confirmationResult.confirm(code).
            window.confirmationResult = confirmationResult;
            console.log('otp has been sent')
            // ...
            }).catch((error) => {
            // Error; SMS not sent
            // ...
            console.log('error generated')
            });
    }

    render(){
        const {isSubmit, phone} = this.state
        console.log(isSubmit, phone)
        return(
            <div className="app-container">
                 <img src='https://res.cloudinary.com/dlrhkmxgx/image/upload/v1695667554/AK_logo_pigxbp.png' alt='some' 
                 className="image-setting-num"/>
                 <div className="some-container">
                    <h1 className="heading">Wellcome Back</h1>
                    <p className="paragraph">Please sign into your account</p>
                 </div>
                
                <form>
                    <div id='sign-in-button'></div>
                <div>
                <PhoneInput
                value={this.state.phone}
                onChange={phone => this.setState({ phone })}
                
                country={'in'}
                    inputProps={{
                        name: 'phone',
                        required: true,
                        autoFocus: true
                    }}
                    />
                </div>
                <div>
                    <p  className="second-para">We will send you a one time SMS message.
                        Charges may apply.</p>
                 </div>
                 <div>
                    <Link className="route-link" to="/passwordVerify">
                        <button type="sumit" className="style-button" onClick={this.submitButton}>Sign In with OTP</button>
                    </Link>
                 </div>
                </form>
                 
            </div>
        )
    }
}

export default NumberVerify