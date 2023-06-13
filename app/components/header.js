"use client"

import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import { useSession, signOut } from "next-auth/react";
import { BiSearch } from 'react-icons/bi';
import Image from 'next/image';

export default function Header() {

    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const handleAvatarClick = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const handleLogout = () => {
        signOut();
    };


    const router = useRouter();
    const { pathname } = router;
    const { data: session } = useSession();

    const trimmedPathname = (pathname || '/Dashboard').substring(1);

    return (
        <div>
            {session && (
                <main className="relative px-4">
                    <div className="md:absolute md:left-[320px] md:flex md:justify-between md:items-center lg:left-[360px] mt-6 md:pr-8 lg:mt-8 w-full md:w-[65vw] lg:w-[75vw]">
                        <div className='font-montserrat text-[24px] font-[700]'>
                            {trimmedPathname}
                        </div>

                        <div className='flex space-x-8'>
                            <div className="flex items-center bg-white border rounded-xl px-3 py-2">
                                <input type="text" placeholder="Search..." className="w-full outline-none font-lato text-[14px] font-[400]" />
                                <BiSearch className="text-gray-500 ml-2" />
                            </div>
                            <Image src="notification.svg" width={24} height={24} alt="Notification" />
                            <Image className="rounded-full cursor-pointer" onClick={handleLogout} src={session?.user.image} width={39} height={39} alt="Avatar" />
                        </div>
                    </div>
                </main>
            )}
        </div>
    )
}
