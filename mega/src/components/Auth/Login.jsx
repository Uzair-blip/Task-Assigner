import React, { useState } from 'react'

const Login = ({handleLogin}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // Clear input fields
    handleLogin(email,password)
    setEmail("");
    setPassword("");
  }

  return (
    <div className='flex w-screen h-screen items-center justify-center'>
      <div className='border-2 border-emerald-600 p-20 rounded-lg shadow-lg'>
        <h1 className='text-3xl font-bold mb-6 text-emerald-600'>Login</h1>
        <form 
          onSubmit={onSubmitHandler} 
          className='flex flex-col items-center'
        >
          <input 
            type="email" 
            name="email" 
            id="email"
            value={email} // bind the email value
            required 
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter Email' 
            className='bg-transparent mb-4 px-4 py-2 border border-emerald-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600'
          />
          <input 
            type="password" 
            name="password" 
            id="password"
            value={password} // bind the password value
            required 
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Enter Password' 
            className='bg-transparent mb-4 px-4 py-2 border border-emerald-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600'
          />
          <button 
            type="submit" 
            className='mt-4 px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-red-700 transition-all duration-300'
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login;
