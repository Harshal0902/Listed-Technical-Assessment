"use client"

import { useState } from "react"
import axios from "axios"
import { toast } from "react-hot-toast"
import Image from 'next/image'
import Link from 'next/link'
import { signIn, useSession } from 'next-auth/react'

export default function Register() {

    const [data, setData] = useState({
        name: '',
        email: '',
        password: ''
    })

    const handleGoogleLogin = () => {
        signIn("google", { callbackUrl: "/" });
    };

    const registerUser = async (e) => {
        e.preventDefault()
        axios.post('/api/register', data)
            .then(() => toast.success('User has been registered!'))
            .catch(() => toast.error('Something went wrong!'))
    }

    return (
        <div className='md:grid md:grid-cols-5 h-screen font-montserrat bg-[#F5F5F5]'>

            <div className='col-span-2 bg-black flex justify-center items-center text-3xl md:text-6xl font-bold text-white leading-loose'>Board.</div>

            <div className='col-span-3 flex justify-center items-center'>
                <div className='p-8'>
                    <div className='px-4 md:px-0 text-3xl md:text-4xl font-montserrat font-[900]'>Register</div>
                    <div className='px-4 md:px-0 text-md font-[400] font-lato tracking-wide md:py-2'>Register to your account</div>
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

                    <form className='lg:w-[385px] bg-white rounded-2xl px-4 md:px-10 md:py-8 py-6 mt-6 flex flex-col' onSubmit={registerUser}>
                        <div className='text-lg font-lato tracking-wide'>Username</div>
                        <input className='rounded-lg bg-[#F5F5F5] px-4 py-2 focus:outline-none border-none' type='text' required
                            value={data.name}
                            onChange={e => setData({ ...data, name: e.target.value })} placeholder='Enter your Username' />

                        <div className='text-lg font-lato tracking-wide'>Email address</div>
                        <input className='rounded-lg bg-[#F5F5F5] px-4 py-2 focus:outline-none border-none' type='email' required
                            value={data.email}
                            onChange={e => setData({ ...data, email: e.target.value })} placeholder='Enter your email' />

                        <div className='text-lg font-lato tracking-wide mt-4'>Password</div>
                        <input className='rounded-lg bg-[#F5F5F5] px-4 py-2 focus:outline-none border-none' type='password' required
                            value={data.password}
                            onChange={e => setData({ ...data, password: e.target.value })} placeholder='Enter your password' />

                        <div className='text-lg font-lato tracking-wide mt-4'>Confirm Password</div>
                        <input className='rounded-lg bg-[#F5F5F5] px-4 py-2 focus:outline-none border-none' type='password' placeholder='Enter your password once again' />

                        <button type="submit" className='bg-black text-white rounded-lg px-8 py-2 font-lato tracking-wide mt-6'>Register</button>
                    </form>

                    <p className='text-center text-[#858585] pt-6 font-lato tracking-wide'>
                        Already have an account? <Link href={'/signin'}><span className='text-[#346BD4]'>Sign In here</span></Link>
                    </p>

                </div>
            </div>

        </div>
    )
}
