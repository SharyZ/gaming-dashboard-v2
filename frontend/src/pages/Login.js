import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FullscreenLayout } from "../components";

export const Login = () => {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) =>
    setLoginFormData({
      ...loginFormData,
      [event.target.name]: event.target.value,
    });

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("Login", loginFormData);
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
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="johndoe@example.com"
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
