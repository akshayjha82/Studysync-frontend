import React, { useState } from "react";
import { User } from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Clear previous session data
      localStorage.clear();
  
      const response = await axios.post('https://studysync-backend-lct3.onrender.com/login', { email, password });
      const { token } = response.data;
  
      // Store user email and token
      localStorage.setItem("userEmail", email);
      localStorage.setItem('token', token);
  
      // Navigate to chat page after login
      navigate('/dashboard');
    } catch (error) {
      console.error('Login error:', error);
      setErrorMessage(error.response?.data?.message || 'Something went wrong');
    }
  };
  

  return (
    <div className="pt-20 min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
        <div className="text-center mb-8">
          <User className="h-12 w-12 text-indigo-600 mx-auto mb-2" />
          <h2 className="text-2xl font-bold text-gray-900">Welcome Back</h2>
          <p className="text-gray-600">Sign in to your account</p>
        </div>
        {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>} 

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-600 focus:outline-none"
              placeholder="your@email.com"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-600 focus:outline-none"
              placeholder="••••••••"
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input type="checkbox" className="h-4 w-4 text-indigo-600" />
              <label className="ml-2 text-gray-600">Remember me</label>
            </div>
            
            
          </div>
          <div>
          <a href="#" className="text-indigo-600 hover:text-indigo-800">
              Forgot password?
            </a>
          </div>
          <button type='submit' className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700">
            Sign In
          </button>
        </form>

        <p className="mt-4 text-center text-gray-600">
          Don't have an account?{' '}
          <Link to="/signup" className="text-indigo-600 hover:text-indigo-800">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
