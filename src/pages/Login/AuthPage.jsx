import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      // Login logic
      const storedUser = JSON.parse(localStorage.getItem("user"));
      if (storedUser && storedUser.mobile === mobile && storedUser.password === password) {
        alert("Login Successful!");
        navigate("/MainPage");
      } else {
        alert("Invalid Mobile Number or Password!");
      }
    } else {
      // Register logic
      if (password !== confirmPass) {
        alert("Passwords do not match!");
        return;
      }
      const newUser = { mobile, password };
      localStorage.setItem("user", JSON.stringify(newUser));
      alert("Registration Successful! Please Login.");
      setIsLogin(true);
    }

    setMobile("");
    setPassword("");
    setConfirmPass("");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <div className="bg-white rounded-2xl shadow-md p-6 w-full max-w-md">
        {/* Toggle Buttons */}
        <div className="flex justify-center mb-6">
          <div className="flex bg-gray-100 rounded-full p-1 shadow-inner">
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                isLogin ? "bg-red-100 text-red-600 border border-red-400" : "text-gray-700"
              }`}
              onClick={() => setIsLogin(true)}
            >
              Login
            </button>
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                !isLogin ? "bg-red-100 text-red-600 border border-red-400" : "text-gray-700"
              }`}
              onClick={() => setIsLogin(false)}
            >
              Signup
            </button>
          </div>
        </div>

        {/* Form */}
        <h2 className="text-2xl font-bold mb-4 text-center">
          {isLogin ? "Login" : "Signup"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">Mobile Number</label>
            <input
              type="text"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="Mobile Number"
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-red-300"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-red-300"
              required
            />
          </div>

          {!isLogin && (
            <div>
              <label className="block text-gray-700 mb-1">Confirm Password</label>
              <input
                type="password"
                value={confirmPass}
                onChange={(e) => setConfirmPass(e.target.value)}
                placeholder="Confirm Password"
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-red-300"
                required
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg py-3 transition"
          >
            {isLogin ? "Login" : "Register"}
          </button>
        </form>

        <p className="text-sm text-gray-500 text-center mt-4">
          By proceeding, you agree with our{" "}
          <a href="#" className="text-blue-600 underline">
            Terms of Service & Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
