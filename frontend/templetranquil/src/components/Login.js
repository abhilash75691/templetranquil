import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const USER_API_END_POINT = 'http://localhost:8080/api/v1/user';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        // Handle login
        const res = await axios.post(
          `${USER_API_END_POINT}/login`,
          { email, password },
          {
            headers: {
              'Content-Type': 'application/json',
            },
            withCredentials: true,
          }
        );
        console.log(res.data); // Handle successful login response
        navigate('/'); // Redirect to home page after login
      } else {
        // Handle signup
        const res = await axios.post(
          `${USER_API_END_POINT}/register`,
          { name, username, email, password },
          {
            headers: {
              'Content-Type': 'application/json',
            },
            withCredentials: true,
          }
        );
        console.log(res.data); // Handle successful signup response
        setIsLogin(true); // Switch back to login mode after successful signup
      }
    } catch (error) {
      console.error('An error occurred:', error);
      if (error.response) {
        console.log('Error response from server:', error.response.data);
        // Handle specific error response from the server
      } else if (error.request) {
        console.log('No response received:', error.request);
        // Handle no response received from the server
      } else {
        console.log('Error setting up request:', error.message);
        // Handle other types of errors
      }
      // You can implement error state or display error message to the user
    }
  };
  const loginSignupHandler = () => {
    setIsLogin(!isLogin)
  }

  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <div className='flex items-center justify-around w-[100%]'>
        <div>
          {/* Logo or branding */}
          <img className='ml-5' width={"300px"} src="https://cityfurnish.com/blog/wp-content/uploads/2024/01/9087-min.jpg" alt="templetranquil-logo" />
        </div>
        <div>
          <div className='my-5'>
            <h1 className='font-bold text-6xl'>Temple Tech</h1>
          </div>
          <h1 className='mt-4 mb-2 text-2xl font-bold'>{isLogin ? "Login" : "Signup"}</h1>
          <form onSubmit={submitHandler} className='flex flex-col w-[55%]'>
            {!isLogin && (
              <>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' className="outline-blue-500 border border-gray px-3 py-2 rounded-full my-1 font-semibold" />
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Username' className="outline-blue-500 border border-gray px-3 py-2 rounded-full my-1 font-semibold" />
              </>
            )}
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' className="outline-blue-500 border border-gray px-3 py-2 rounded-full my-1 font-semibold" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' className="outline-blue-500 border border-gray px-3 py-2 rounded-full my-1 font-semibold" />
            <button className='bg-[#109BF0] border-none py-2 my-4 rounded-full text-lg text-white'>{isLogin ? "Login" : "Create Account"}</button>
          </form>
          <h1>{isLogin ? "Do not have an account?" : "Already have an account?"} <span onClick={loginSignupHandler} className='font-bold text-blue-600 cursor-pointer'>{isLogin ? "Signup" : "Login"}</span></h1>
        </div>
      </div>
    </div>
  );
}


export default Login
