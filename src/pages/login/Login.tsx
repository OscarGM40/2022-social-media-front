import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./Login.scss";

const Login = () => {
  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    login();
  };
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello world</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio minima, maiores
            enim ipsam praesentium et voluptates qui incidunt, amet quo pariatur officiis in
            aspernatur, eum tempore blanditiis repellendus delectus ducimus.
          </p>
          <span>Don't you have an account?</span>
          <Link to={`/register`}>
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Enter username" />
            <input type="password" placeholder="Enter password" />
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
