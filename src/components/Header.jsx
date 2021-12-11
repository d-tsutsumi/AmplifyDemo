import "./login.css";
import {  Link } from "react-router-dom";
import { Auth } from "aws-amplify";

const Header = () => {
  const signOut = async (e) => {
    e.preventDefault();
    try {
			await Auth.signOut();
			document.location.href = "/login"
    } catch (e) {
      console.log(e);
      console.log(e.response);
    }
	};
	
  return (
    <header className="wapper" id="header">
      <div className="main-nav">
        <Link to="/about">about</Link>
        <Link to="/users">Users</Link>
        <a href="/">Next</a>
        <a href="/">React</a>
        <a href="/">Vue</a>
      </div>
      <div className="login-nav"　onClick={signOut}>
        <span>Logout</span> 
      </div>
    </header>
  );
};

export default Header;
