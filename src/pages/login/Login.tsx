import axios, { AxiosError } from "axios";
import { ChangeEvent, MouseEvent, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { UserLogin } from "../../types/User.type";
import "./Login.scss";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [inputs, setInputs] = useState<UserLogin>({
    username: "",
    password: "",
  });
  const [err, setErr] = useState<AxiosError<any, any>>();

  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }: ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = async (evt: MouseEvent) => {
    evt.preventDefault();
    if (!inputs.username) return;
    try {
      await login(inputs);
      navigate("/");
    } catch (err) {
      const error = err as Error | AxiosError;
      if (!axios.isAxiosError(error)) {
        console.log(error);
      }
      if (axios.isAxiosError(error)) {
        setErr(error);
      }
    }
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
            <input
              name="username"
              onChange={handleChange}
              type="text"
              placeholder="Enter username"
            />
            <input
              name="password"
              onChange={handleChange}
              type="password"
              placeholder="Enter password"
            />
            <>{err && err?.response?.data}</>
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
