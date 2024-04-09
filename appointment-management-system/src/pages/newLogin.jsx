import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/newLogin.css";

export default function Login(props) {
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="login-container">
      <button className="back-button" onClick={() => navigate("/")}>
        MediSync
      </button>
      <div className="login-form">
        <div className="login-header">
          <h1 className="header-text">Welcome Back</h1>
          {/* <h2 className="header-subtext">Continue your  </h2> */}
        </div>
        <div className="login-inputs">
          <div>
            <h3>Email</h3>
            <input
              className="login-input"
              type="text"
              onChange={(event) => {}}
            />
            {emailError && (
              <h3 className="error-message">Invalid E-mail address.</h3>
            )}
          </div>
          <div>
            <h3>Password</h3>
            <div className="password-input">
              <input
                className="login-input"
                type={showPassword ? "text" : "password"}
                onChange={(event) => {}}
              />
              <button
                className="show-password-button"
                onClick={() => setShowPassword(!showPassword)}
              >
                Show/Hide
              </button>
            </div>
            {passwordError && (
              <h3 className="error-message">
                Must be between 8 and 15 characters in length
                <br></br>
                Must include a number
              </h3>
            )}
            <h4 className="forgot-password">Forgot password?</h4>
          </div>
        </div>
        <div className="login-buttons">
          <button className="login-button" onClick={() => navigate("/")}>
            Login
          </button>
        </div>
        <div className="signup-link">
          <h3>New to MediSync?</h3>
          <a href="/register" className="signup-button">
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
}
