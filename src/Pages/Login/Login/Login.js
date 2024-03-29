import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import swal from "sweetalert";
import { AuthContext } from "../../../Contex/AuthProvidor";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const { login, googleSignUp } = useContext(AuthContext);
  const googleProvidor = new GoogleAuthProvider();
  const [loginError, setLoginError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = (data) => {
    console.log(data);
    setLoginError("");
    login(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
        swal("Login!", "successfully!", "success");
      })
      .catch((error) => {
        console.log(error.message);
        setLoginError(error.message);
      });
  };
  const handleWithGoogleSignIn = () => {
    googleSignUp(googleProvidor)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setLoginError(error.message);
      });
  };
  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-7">
        <h2 className="text-xl text-center">Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              {...register("email", {
                required: "Email Address is required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-red-600">{errors.email?.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            <label className="label">
              {" "}
              <span className="label-text">Forget Password?</span>
            </label>
            {errors.password && (
              <p className="text-red-600">{errors.password?.message}</p>
            )}
          </div>
          <input
            className="btn btn-accent w-full"
            value="Login"
            type="submit"
          />
          {loginError && <p className="text-red-600">{loginError}</p>}
        </form>
        <p>
          New to Doctors Portal{" "}
          <Link className="text-blue-600" to="/signup">
            Create new Account
          </Link>
        </p>
        <div className="divider">OR</div>
        <button
          onClick={handleWithGoogleSignIn}
          className="btn btn-primary w-full"
        >
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
