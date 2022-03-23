import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FullscreenLayout } from "../components";

export const Signup = () => {
  const [signupFormData, setSignupFormData] = useState({
    username: "",
    email: "",
    password: "",
    re_password: "",
  });

  const handleInputChange = (event) =>
    setSignupFormData({
      ...signupFormData,
      [event.target.name]: event.target.value,
    });

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("Signup", signupFormData);
  };

  return (
    <FullscreenLayout>
      <div className="mx-auto flex min-h-screen max-w-xs flex-col items-center justify-center">
        <div className="mb-8 text-center">
          <h1 className="mb-6">Signup</h1>
          <p className="mb-2 text-gray">
            Enter your username, email and password to register.
          </p>
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
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="password"
              required
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="re_password">Password Confirmation</label>
            <input
              type="password"
              name="re_password"
              id="re_password"
              placeholder="password"
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="text-center">
            <input type="submit" value="Signup" />
          </div>
        </form>
        <div className="pt-6">
          <p className="text-gray">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </FullscreenLayout>
  );
};
