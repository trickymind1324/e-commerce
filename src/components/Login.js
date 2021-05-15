import React from "react";
import {Link} from "react-router-dom";
import "../App.css";
import logo from "../logo.jpg";

function Login() {
      
return (
      <div className="login">
        <Link to="/">
          <img className="login-logo" src={logo} alt="logo" />
        </Link>
        <div className="login__container">
          <h1>Sign-in</h1>
          <form>
            <h5>E-mail</h5>
            <input type="text" />
            <h5>Password</h5>
            <input type="password"  />
            <button type="submit"className="login__signInButton">Sign In</button>
          </form>
          <p>
            By signing-in, you agree to V-SHOPPING conditions of use & sale.
            Please see our privacy notice, our cookies notice and our
            interest-based ads notice.
          </p>
          <button className="login__registerButton">Create your V-shop Account</button>
        </div>
      </div>
    );
  }

export default Login;