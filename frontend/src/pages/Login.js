import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { FullscreenLayout } from "../components";
import { login } from "../store/actions/login";

export const Login = () => {
  const dispatch = useDispatch();
  const [loginFormData, setLoginFormData] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (event) =>
    setLoginFormData({
      ...loginFormData,
      [event.target.name]: event.target.value,
    });

  const handleFormSubmit = (event) => {
    event.preventDefault();
    dispatch(login(loginFormData, "/home"));
  };

  return (
    <FullscreenLayout>
      <div className="mx-auto flex min-h-screen max-w-xs flex-col items-center justify-center">
        <div className="mb-8 text-center">
          <h1 className="mb-6">Login</h1>
          <p className="mb-2 text-gray">Enter your username and password.</p>
        </div>
        <form
          className="w-full space-y-6"
          method="POST"
          onSubmit={handleFormSubmit}
        >
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="johndoe"
              required
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="Password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="password"
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="text-center">
            <input type="submit" value="Login" />
          </div>
        </form>
        <div className="pt-6">
          <p className="text-gray">
            Don't have an account? <Link to="/signup">Signup</Link>
          </p>
        </div>
      </div>
    </FullscreenLayout>
  );
};
