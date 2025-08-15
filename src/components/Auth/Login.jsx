import React from 'react'
import { useState } from 'react'
const Login = ({handleLogin}) => {

  
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

  const submitHandler = (e)=>{
    e.preventDefault()
    handleLogin(email,password)
    // console.log("email is",email)
    // console.log("password is",password)

    setEmail("")
    setPassword("")
  }
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 rounded-xl border-emerald-600 p-20'>
        <form
        onSubmit={(e)=>{
          submitHandler(e);
        }}
        className='flex flex-col items-center justify-center'> 
            <input
            value={email}
            onChange={(e)=>
             setEmail(e.target.value)
            }
            required
            className='border-2 outline-none bg-transparent text-xl border-emerald-600 font-medium py-2 px-6 rounded-full placeholder:text-grey-400' type="email" placeholder='Enter your email' />
            <input 
            value={password}
            onChange={(e)=>{
              setPassword(e.target.value)
            }}
            required 
            className='border-2 mt-3 outline-none bg-transparent text-xl border-emerald-600 font-medium py-2 px-6 rounded-full placeholder:text-grey-400' type="password" placeholder='Enter password' />
            <button className='text-white mt-7  bg-emerald-600 hover:bg-emerald-700 font-semibold w-full border-none outline-none text-xl border-emerald-600 py-2 px-8 rounded-full placeholder:text-white' >Log in</button>
        </form>
      </div>
    </div>
  )
}

export default Login
