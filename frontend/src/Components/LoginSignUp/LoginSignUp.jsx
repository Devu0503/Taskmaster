import React from 'react'
import './LoginSignUp.css'
import login_img from '../Assets/login_img.jpg'

const LoginSignUp = () => {
  return (
    <div className='login_sign_up'>
      <div className="login_sign_up_left">
        <img src={login_img} alt="" />
      </div>
      <div className="login_sign_up_right">
        <div className="login_sign_up_logo"><i class="fa-solid fa-clipboard-check"></i> </div>
        <div className="login_sign_up_header"><h1>SignUp</h1></div>
          <div className="login_sign_up_inputs">
            <div className="login_sign_up_input_name"><i class="fa-solid fa-user"></i><input type="text" placeholder="Name" />
            </div>
            <div className="login_sign_up_input_email"><i class="fa-regular fa-envelope"></i><input type="email" placeholder="Email"/></div>
            <div className="login_sign_up_input_password"><i class="fa-regular fa-lock"></i><input type="password" placeholder="Password" /></div>

          <div className="forget_password">forget password? <span>click here!</span></div>
          <div className="submit_button">
            <div className="submit_signup"><button>signup</button></div>
            <div className="submit_login"><button>login</button></div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default LoginSignUp
