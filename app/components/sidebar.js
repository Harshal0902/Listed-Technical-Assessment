"use client";

import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';
import Link from "next/dist/client/link";
import { HiX } from "react-icons/hi";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaBars } from "react-icons/fa";

import { fade } from "../animations"
import { motion } from "framer-motion"
export default function Navbar() {

  const path = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const { data: session } = useSession();

  return (
    <div className="relative">
      {session && (
        <div className="md:absolute md:p-4 lg:p-8 py-4 px-10">

          <nav className="md:w-[280px] md:bg-black rounded-2xl md:p-8">
            <div className="hidden md:block text-white font-montserrat font-bold text-[36px] text-center md:text-left">Board.</div>

            <button className="md:hidden left-4 top-4 absolute font-bold ease-linear transition-all duration-150" type="button" onClick={() => setIsOpen(true)} aria-hidden="false" aria-label="button">
              <FaBars className="h-7 w-7" aria-hidden="false" />
            </button>

            {isOpen ? (
              <div>
                <motion.div variants={fade} initial="hidden" animate="visible" className="ml-3 py-4 flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none md:hidden">
                  <div className="ml-0 w-[300px]">
                    <div className="border-0 rounded-xl shadow-lg relative flex flex-col w-full bg-black outline-none focus:outline-none">
                      <div className="flex items-start justify-between py-4 pl-4 border-solid rounded-t">
                        <div>
                          <div className="text-3xl pl-4 font-base font-extrabold cursor-pointer text-white font-montserrat">
                            Board.
                          </div>
                        </div>

                        <button className="absolute right-6 top-4 text-white" onClick={() => setIsOpen(false)} aria-hidden="false" aria-label="button">
                          <HiX className="h-7 w-7" aria-hidden="false" />
                        </button>

                      </div>

                      <div className="flex justify-between flex-col py-8 pl-8 w-auto pt-4 h-[78vh]">

                        <div className="flex-col space-y-6 ml-0 w-auto flex h-auto" >
                          <Link href="/dashboard">
                            <div className={`flex content-center text-white ${path === "/dashboard" && "font-[700]"}`}>
                              <Image src="/dashboard_icon.svg" alt="dashboard_icon" width={15} height={15} />
                              <p className="font-montserrat ml-4 text-[18px]">Dashboard</p>
                            </div>
                          </Link>

                          <Link href="/transactions">
                            <div className={`flex content-center text-white ${path === "/transactions" && "font-[700]"}`}>
                              <Image src="/transaction_icon.svg" alt="transactions_icon" width={15} height={15} />
                              <p className="font-montserrat ml-4 text-[18px]">Transactions</p>
                            </div>
                          </Link>

                          <Link href="/schedules">
                            <div className={`flex content-center text-white ${path === "/schedules" && "font-[700]"}`}>
                              <Image src="/schedule_icon.svg" alt="schedule_icon" width={15} height={15} />
                              <p className="font-montserrat ml-4 text-[18px]">Schedules</p>
                            </div>
                          </Link>

                          <Link href="/users">
                            <div className={`flex content-center text-white ${path === "/users" && "font-[700]"}`}>
                              <Image src="/user_icon.svg" alt="user_icon" width={15} height={15} />
                              <p className="font-montserrat ml-4 text-[18px]">Users</p>
                            </div>
                          </Link>

                          <Link href="/Settings">
                            <div className={`flex content-center text-white ${path === "/settings" && "font-[700]"}`}>
                              <Image src="/setting_icon.svg" alt="setting_icon" width={15} height={15} />
                              <p className="font-montserrat ml-4 text-[18px]">Settings</p>
                            </div>
                          </Link>
                        </div>
                      </div>

                      <div className="flex-col space-y-3 w-auto flex h-auto py-4 px-8" >
                        <Link href="/help">
                          <div className={`flex content-center text-white ${path === "/Help" && "font-[700]"}`}>
                            <p className="font-montserrat font-[400] text-[14px]">Help</p>
                          </div>
                        </Link>
                        <Link href="/settings">
                          <div className={`flex content-center text-white ${path === "/settings" && "font-[700]"}`}>
                            <p className="font-montserrat font-[400] text-[14px]">Contact us</p>
                          </div>
                        </Link>
                      </div>

                    </div>
                  </div>
                </motion.div>

                <div className="opacity-25 fixed inset-0 z-40 h-screen bg-black md:hidden"></div>
              </div>
            ) : null}

            <div className="hidden w-full md:flex md:justify-between md:flex-col md:w-auto pt-12 md:h-[105vh]" >

              <div className="md:flex-col md:space-y-6 md:ml-0 md:w-auto flex flex-col md:h-auto" >
                <Link href="/dashboard">
                  <div className={`flex content-center text-white ${path === "/dashboard" && "font-[700]"}`}>
                    <Image src="/dashboard_icon.svg" alt="dashboard_icon" width={15} height={15} />
                    <p className="font-montserrat ml-4 text-[18px]">Dashboard</p>
                  </div>
                </Link>

                <Link href="/transactions">
                  <div className={`flex content-center text-white ${path === "/transactions" && "font-[700]"}`}>
                    <Image src="/transaction_icon.svg" alt="transactions_icon" width={15} height={15} />
                    <p className="font-montserrat ml-4 text-[18px]">Transactions</p>
                  </div>
                </Link>

                <Link href="/schedules">
                  <div className={`flex content-center text-white ${path === "/schedules" && "font-[700]"}`}>
                    <Image src="/schedule_icon.svg" alt="schedule_icon" width={15} height={15} />
                    <p className="font-montserrat ml-4 text-[18px]">Schedules</p>
                  </div>
                </Link>

                <Link href="/users">
                  <div className={`flex content-center text-white ${path === "/users" && "font-[700]"}`}>
                    <Image src="/user_icon.svg" alt="user_icon" width={15} height={15} />
                    <p className="font-montserrat ml-4 text-[18px]">Users</p>
                  </div>
                </Link>

                <Link href="/Settings">
                  <div className={`flex content-center text-white ${path === "/settings" && "font-[700]"}`}>
                    <Image src="/setting_icon.svg" alt="setting_icon" width={15} height={15} />
                    <p className="font-montserrat ml-4 text-[18px]">Settings</p>
                  </div>
                </Link>
              </div>

              <div className="md:flex-col md:space-y-4 md:ml-0 md:w-auto flex flex-col md:h-auto" >
                <Link href="/help">
                  <div className={`flex content-center text-white ${path === "/Help" && "font-[700]"}`}>
                    <p className="font-montserrat font-[400] text-[14px]">Help</p>
                  </div>
                </Link>
                <Link href="/settings">
                  <div className={`flex content-center text-white ${path === "/settings" && "font-[700]"}`}>
                    <p className="font-montserrat font-[400] text-[14px]">Contact us</p>
                  </div>
                </Link>
              </div>

            </div>
          </nav>
        </div>
      )}
    </div>
  )
}
