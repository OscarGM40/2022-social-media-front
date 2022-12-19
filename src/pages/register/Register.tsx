import { Link } from "react-router-dom";
import "./Register.scss";

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>DevOps Social</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio minima, maiores
            enim ipsam praesentium et voluptates qui incidunt, amet quo pariatur officiis in
            aspernatur, eum tempore blanditiis repellendus delectus ducimus.
          </p>
          <span>Do you have an account?</span>
          <Link to={`/login`}>
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Enter username" />
            <input type="email" placeholder="Enter email" />
            <input type="password" placeholder="Enter password" />
            <input type="text" placeholder="Enter name" />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Register;
