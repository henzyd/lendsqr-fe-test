import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.style.scss";
import Logo from "../../assets/icons/logo.svg";
import LoginIMG from "../../assets/images/pablo-sign-in 1.png";

const Login = () => {
  const navigate = useNavigate();
  const [passwordDisplay, setPasswordDisplay] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [smallTextEmail, setSmallTextEmail] = useState<"visible" | "hidden">(
    "hidden"
  );
  const [smallTextPassword, setSmallTextPassword] = useState<
    "visible" | "hidden"
  >("hidden");

  function showPasswordHandler() {
    if (passwordDisplay) {
      setPasswordDisplay(false);
    } else {
      setPasswordDisplay(true);
    }
  }

  function checkEmail(): boolean {
    const regex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return regex.test(email);
  }

  function formDataHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!checkEmail() && !password) {
      setSmallTextEmail("visible");
      setSmallTextPassword("visible");
    } else if (!checkEmail()) {
      setSmallTextEmail("visible");
      setSmallTextPassword("hidden");
    } else if (!password) {
      setSmallTextPassword("visible");
      setSmallTextEmail("hidden");
    } else {
      navigate("/users");
    }
  }

  return (
    <div className=" Login-page">
      <img src={Logo} alt="Logo" className="Logo" />
      <div className="login-container">
        <figure className="login-left-container">
          <img src={LoginIMG} alt="login-left-img" />
        </figure>
        <div className="login-right-container">
          <div className="login-form-title">
            <h1>Welcome!</h1>
            <h4>Enter details to login.</h4>
          </div>
          <form className="login-form" method="post" onSubmit={formDataHandler}>
            <div className="login-email">
              <input
                name="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
              />
              <small style={{ visibility: `${smallTextEmail}` }}>
                Please enter a valid email
              </small>
            </div>
            <div className="login-password">
              <div>
                <input
                  name="password"
                  type={passwordDisplay ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setPassword(e.target.value)
                  }
                />
                <p onClick={showPasswordHandler}>
                  {passwordDisplay ? "HIDE" : "SHOW"}
                </p>
              </div>
              <small style={{ visibility: `${smallTextPassword}` }}>
                Enter a password
              </small>
            </div>
            <p>FORGOT PASSWORD?</p>
            <button type="submit">LOG IN</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
