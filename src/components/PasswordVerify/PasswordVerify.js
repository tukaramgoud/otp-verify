import './PasswordVerify.css'
import {Link} from 'react-router-dom'

const PasswordVerify = props => {
    // eslint-disable-next-line
    const {itemDetails} = props 
    return(
        <div className="app-container">
        <img src='https://res.cloudinary.com/dlrhkmxgx/image/upload/v1695667554/undraw_confirmed_81ex_nyperh.png' alt='some' 
        className="image-setting"/>
        <div className="some-container">
           <h1 className="heading">Please verify Mobile number</h1>
           <p className="paragraph">An OTP is sent to +917896781234</p>
           <Link className="route-link" to="/">
               <p className='change-num'>Change Phone Number</p>
         </Link>
          
        </div>


        <div >
           <p className="second-para">Didn’t receive the code?</p>

        </div>
        
        <div>
           <button type="button" className="style-button">Verify</button>
        </div>
        
   </div>
    )
}

export default PasswordVerify