import React, { useState } from 'react'

const Login = () =>{

const [email, setEmail]= useState('')
const [password, setPassword]= useState('')

  const submitHandler =(e)=>{
    e.preventDefault()
    console.log("email is",email)
    console.log("password is",password)

    setEmail("")
    setPassword("")
  }


  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 rounded-xl border-emerald-600 p-20'>
            <form onSubmit={(e)=>{
              submitHandler(e)
            }} className='flex flex-col items-center justify-center'>
                <input
                value={email}
                onChange={(e)=>{
                  setEmail(e.target.value)
                }} required className= 'outline-none border-2 bg-transparent border-emerald-600 py-4 text-xl px-3 rounded-full placeholder:text-gray-400' type="email" placeholder='Enter your email' />
                <input 
                value={password}
                onChange={(e)=>{
                  setPassword(e.target.value)
                }}
                required className='outline-none border-2 bg-transparent border-emerald-600 py-4 text-xl px-3 rounded-full mt-3 placeholder:text-gray-400' type="password" placeholder='Enter Password' />
                <button className='mt-7 text-white border-none outline-none border-2 bg-emerald-600 py-6 text-xl px-30 rounded-full placeholder:text-white'>Log in</button>
            </form>
        </div>
    </div>
  )
}

export default Login
