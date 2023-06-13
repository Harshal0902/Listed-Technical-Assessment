'use client'

import { useState, useEffect } from "react"
import Image from 'next/image'
import Link from 'next/link'
import { signIn, useSession } from 'next-auth/react'
import { toast } from "react-hot-toast"
import { useRouter } from "next/navigation"

export default function Login() {

  const session = useSession()
  const router = useRouter()
  const [data, setData] = useState({
    email: '',
    password: ''
  })

  // useEffect(() => {
  //   if (session?.status === 'authenticated') {
  //     router.push('/')
  //   }
  // })

  const handleGoogleLogin = () => {
    signIn("google", { callbackUrl: "/" });
  };

  // const loginUser = async (e) => {
  //   e.preventDefault()
  //   signIn('credentials',
  //     {
  //       ...data, redirect: false
  //     })
  //     .then((callback) => {
  //       if (callback?.error) {
  //         toast.error(callback.error)
  //       }

  //       if (callback?.ok && !callback?.error) {
  //         toast.success('Logged in successfully!')
  //       }
  //     })
  // }

  return (
    <div className='md:grid md:grid-cols-5 h-screen font-montserrat bg-[#F5F5F5]'>

      <div className='col-span-2 bg-black flex justify-center items-center text-3xl md:text-6xl font-bold text-white leading-loose'>Board.</div>

      <div className='col-span-3 py-6 flex justify-center items-center'>
        <div className='p-8'>
          <div className='text-2xl md:text-4xl font-bold '>Sign In</div>
          <div className='text-lg font-lato tracking-wide md:py-2'>Sign in to your account</div>
          <div className="md:flex items-center justify-center space-y-2 md:space-y-0 md:justify-between md:space-x-2 py-2">
            <button onClick={() => handleGoogleLogin()} className="flex items-center space-x-4 text-[#858585] bg-white px-8 py-2 text-md rounded-2xl">
              <Image src="/google-icon.svg" alt="google" width={20} height={20} />
              <span className='tracking-wide font-montserrat'>Sign in with Google</span>
            </button>
            <button className="flex items-center space-x-4 text-[#858585] bg-white px-10 py-2 text-md rounded-2xl">
              <Image src="/apple-icon.svg" alt="apple" width={20} height={20} />
              <span className='tracking-wide font-montserrat'>Sign in with Apple</span>
            </button>
          </div>

          <form className='lg:w-[33rem] bg-white rounded-3xl px-4 md:px-12 py-6 mt-6 flex flex-col'>
            <div className='text-lg font-lato tracking-wide'>Email address</div>
            <input className='rounded-lg bg-[#F5F5F5] px-4 py-2 focus:outline-none border-none' type='email' value={data.email}
              onChange={e => setData({ ...data, email: e.target.value })}
              required placeholder='Enter your email' />

            <div className='text-lg font-lato tracking-wide mt-4'>Password</div>
            <input className='rounded-lg bg-[#F5F5F5] px-4 py-2 focus:outline-none border-none' type='password' required
              value={data.password}
              onChange={e => setData({ ...data, password: e.target.value })} placeholder='Enter your password' />

            <Link href={'/forgot'}><div className='text-[#346BD4] text-md font-lato tracking-wide my-6'>Forgot password?</div></Link>

            <button type="submit" className='bg-black text-white rounded-lg px-8 py-2 font-lato tracking-wide'>Sign In</button>
          </form>

          <p className='text-center text-[#858585] pt-6 font-lato tracking-wide'>
            Don't have an account? <Link href={'/register'}><span className='text-[#346BD4]'>Register here</span></Link>
          </p>

        </div>
      </div>

    </div>
  )
}