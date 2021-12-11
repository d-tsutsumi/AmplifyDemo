import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./../../context/context";
import { Auth } from "aws-amplify";
import "./login.css";
import Header from "../Header";

const Login = () => {
  const navigate = useNavigate();
  const { signIn } = useContext(AuthContext);
  const [userName, setuserName] = useState("");
  const [password, setPassword] = useState("");

  const loginHandle = async (e) => {
    e.preventDefault();
    try {
      const user = await Auth.signIn(userName, password);
      signIn(true, user);
      navigate("/about");
    } catch (e) {
      console.log(e);
      signIn(false, undefined);
    }
  };
  return (
    <>
      <Header />
      <div className="form-wrapper">
        <h1>Login</h1>
        <form>
          <div className="form-item">
            <label htmlFor="email"></label>
            <input
              type="email"
              name="email"
              required="required"
              value={userName}
              onChange={(e) => setuserName(e.target.value)}
              placeholder="Email Address"
            ></input>
          </div>
          <div className="form-item">
            <label htmlFor="password"></label>
            <input
              type="password"
              name="password"
              required="required"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <div className="button-panel">
            <input
              type="submit"
              className="button"
              title="Sign In"
              value="Sign In"
              onClick={loginHandle}
            ></input>
          </div>
        </form>
        <div className="form-footer">
          <p>
            <a href="/">Create an account</a>
          </p>
          <p>
            <a href="/">Forgot password?</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
