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
    <div className='md:grid md:grid-cols-5 h-screen bg-[#F5F5F5]'>

      <div className='col-span-2 bg-black flex justify-center items-center text-3xl md:text-6xl font-bold text-white font-montserrat py-4'>Board.</div>

      <div className='col-span-3 py-6 flex justify-center items-center'>
        <div className='p-4 ms:p-8'>
          <div className='px-4 md:px-0 text-3xl md:text-4xl font-montserrat font-[900]'>Sign In</div>
          <div className='px-4 md:px-0 text-md font-[400] font-lato tracking-wide md:py-2'>Sign in to your account</div>
          <div className="md:flex grid place-items-center items-center justify-center md:space-x-1 space-y-2 md:space-y-0 md:justify-between py-2">
            <button onClick={() => handleGoogleLogin()} className="flex items-center space-x-2 text-[#858585] bg-white px-4 py-2 text-[12px] leading-[14.63px] rounded-[10px]">
              <Image src="/google-icon.svg" alt="google" width={16} height={16} />
              <span className='tracking-wide font-montserrat'>Sign in with Google</span>
            </button>
            <button className="flex items-center space-x-2 text-[#858585] bg-white px-4 py-2 text-[12px] leading-[14.63px] rounded-[10px]">
              <Image src="/apple-icon.svg" alt="apple" width={16} height={16} />
              <span className='tracking-wide font-montserrat'>Sign in with Apple</span>
            </button>
          </div>

          <form className='lg:w-[385px] bg-white rounded-2xl px-4 md:px-10 md:py-8 py-6 mt-6 flex flex-col'>
            <div className='md:text-lg font-lato tracking-wide'>Email address</div>
            <input className='rounded-lg bg-[#F5F5F5] px-4 py-2 focus:outline-none border-none' type='email' value={data.email}
              onChange={e => setData({ ...data, email: e.target.value })}
              required placeholder='Enter your email' />

            <div className='md:text-lg font-lato tracking-wide mt-4'>Password</div>
            <input className='rounded-lg bg-[#F5F5F5] px-4 py-2 focus:outline-none border-none' type='password' required
              value={data.password}
              onChange={e => setData({ ...data, password: e.target.value })} placeholder='Enter your password' />

            <Link href={'/forgot'}><div className='text-[#346BD4] text-md font-lato tracking-wide my-4'>Forgot password?</div></Link>

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