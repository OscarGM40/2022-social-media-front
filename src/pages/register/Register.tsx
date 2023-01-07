import axios, { AxiosError } from "axios";
import { ChangeEvent, MouseEvent, useState } from "react";
import { Link } from "react-router-dom";
import { axiosWithoutCookie } from "../../helpers/customAxios";
import "./Register.scss";

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
  });
  const [err, setErr] = useState<AxiosError<any, any>>();

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({
      ...prev,
      [evt.target.name]: evt.target.value,
    }));
  };
  const handleRegister = async (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    if (!inputs.username || !inputs.name) return;
    try {
      const { data } = await axiosWithoutCookie.post("/auth/register", inputs);
      console.log({ data });
    } catch (err) {
      const error = err as Error | AxiosError;
      if (!axios.isAxiosError(error)) {
        // do whatever you want with native error
        console.log(error);
      }
      if (axios.isAxiosError(error)) {
        setErr(error);
      }
    }
  };
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
            <input
              onChange={handleChange}
              name="username"
              type="text"
              placeholder="Enter username"
            />
            <input onChange={handleChange} name="email" type="email" placeholder="Enter email" />
            <input
              onChange={handleChange}
              name="password"
              type="password"
              placeholder="Enter password"
            />
            <input onChange={handleChange} name="name" type="text" placeholder="Enter name" />
            <>{err && err?.response?.data}</>
            <button onClick={handleRegister}>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Register;
