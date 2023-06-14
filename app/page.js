"use client";

import React, { use } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';
import Image from "next/image";
import axios from 'axios';
import Linehart from "./components/linechart";
import PieChart from "./components/piechart";
import style from './globals.css'

async function getChartsData() {
  try {
    const response = await axios.get(`${process.env.NEXTAUTH_URL}/api`);
    return response.data;
  } catch (error) {
    console.error('Error fetching charts data:', error);
    return null;
  }
}


const chartPromise = getChartsData();

export default function Home() {

  const chartsData = use(chartPromise);

  const router = useRouter();
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/signin");
    },
  });

  return (
    <div>
      {session && (
        <main className="relative px-4">
          <div className="md:absolute md:left-[320px] lg:left-[360px] mt-6 md:pr-8 md:mt-24 w-full md:w-[65vw] lg:w-[75vw]">

            {/* Cards */}
            <div className="grid grid-cols-2 px-4 md:px-0 lg:px-0 gap-4 lg:flex justify-between lg:space-x-6 lg:gap-0">
              <div className="w-full rounded-[20px] px-4 py-4 bg-[#DDEFE0] relative">
                <div className="absolute right-8 top-4"><Image src="revenue.svg" alt="revenue" width={20} height={20} /></div>
                <div className="pt-6 md:pt-4 font-lato font-[400] text-[12px] md:text-[16px]">Total Revenue</div>
                <div className="font-open-sans font-[700] text-[18px] md:text-[24px]">$2,129,430</div>
              </div>

              <div className="w-full rounded-[20px] px-4 py-4 bg-[#F4ECDD] relative">
                <div className="absolute right-8 top-4"><Image src="transactions.svg" alt="revenue" width={20} height={20} /></div>
                <div className="pt-6 md:pt-4 font-lato font-[400] text-[12px] md:text-[16px]">Total Transactions</div>
                <div className="font-open-sans font-[700] text-[18px] md:text-[24px]">1,520</div>
              </div>

              <div className="w-full rounded-[20px] px-4 py-4 bg-[#EFDADA] relative">
                <div className="absolute right-8 top-4"><Image src="likes.svg" alt="revenue" width={20} height={20} /></div>
                <div className="pt-6 md:pt-4 font-lato font-[400] text-[12px] md:text-[16px]">Total Likes</div>
                <div className="font-open-sans font-[700] text-[18px] md:text-[24px]">9,721</div>
              </div>

              <div className="w-full rounded-[20px] px-4 py-4 bg-[#DEE0EF] relative">
                <div className="absolute right-8 top-4"><Image src="users.svg" alt="revenue" width={20} height={20} /></div>
                <div className="pt-6 md:pt-4 font-lato font-[400] text-[12px] md:text-[16px]">Total Users</div>
                <div className="font-open-sans font-[700] text-[18px] md:text-[24px]">892</div>
              </div>
            </div>

            {/* Activities Chart */}
            <div className="mt-8 px-4 md:px-0 lg:px-0">
              <div className="bg-white rounded-[20px] p-2 md:px-[40px] md:py-[30px] my-[40px]">
                <div className="flex justify-between items-center mb-[30px]">
                  <div>
                    <p className="font-montserrat text-[18px] font-[700]">Activities</p>
                    <select className="text-[#858585]" defaultValue="May-June 2021">
                      <option value="May-June 2021">May - June 2021</option>
                    </select>
                  </div>
                  <div className="grid md:flex font-lato text-[14px] font-[400]">
                    <div className="flex items-center mr-[35px]">
                      <div className="h-3 w-3 rounded-full bg-[#e9a0a0] mr-3"> </div>
                      <p className="">Guest</p>
                    </div>
                    <div className="flex items-center">
                      <div className="h-3 w-3 rounded-full bg-[#9bdd7c] mr-3"> </div>
                      <p className="">User</p>
                    </div>
                  </div>
                </div>
                <Linehart data={chartsData.line} />
              </div>
            </div>

            {/* Products and Schedule */}

            <div className="flex justify-between space-x-3 pb-4 md:pb-12 px-4 md:px-0">
              <div className="bg-white w-1/2 rounded-[20px] px-[40px] py-4 mr-[40px]">
                <div className="flex justify-between items-center mb-2">
                  <p className="text-lg font-bold font-montserrat">Top products</p>
                  <select className="bg-transparent text-sm font-normal p-0 border-none text-gray-500 font-montserrat " defaultValue="May-June 2021">
                    <option value="May-June 2021">May - June 2021</option>
                  </select>
                </div>
                <div className="grid lg:flex items-center">
                  <PieChart data={chartsData.pie} />
                  <div className="md:pl-[2rem] justify-around lg:pl-[4vw]">
                    <div className="flex">
                      <div className="bg-[#98D89E] h-3 w-3 rounded-full mt-3 mr-2"></div>
                      <div className="py-2">
                        <p className="font-montserrat font-[700] text-[14px]">Basic Trees</p>
                        <p className="font-lato text-[#858585] text-[12px] font-[400]">55%</p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="bg-[#F6DC7D] h-3 w-3 rounded-full mt-3 mr-2"></div>
                      <div className="py-2">
                        <p className="font-montserrat font-[700] text-[14px]">Custom Short Pants</p>
                        <p className="font-lato text-[#858585] text-[12px] font-[400]">31%</p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="bg-[#EE8484] h-3 w-3 rounded-full mt-3 mr-2"></div>
                      <div className="py-2">
                        <p className="font-montserrat font-[700] text-[14px]">Super Hoodies</p>
                        <p className="font-lato text-[#858585] text-[12px] font-[400]">14%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white w-1/2 rounded-[20px] px-[40px] py-4 mr-[40px]">
                <div className="flex justify-between items-center mb-8">
                  <p className="font-montserrat text-[18px] font-[700]">Today&apos;s Schedule</p>
                  <p className="text-[#858585] font-montserrat text-[14px] font-[400]">See all &gt;</p>
                </div>
                <div>
                  {chartsData.schedule &&
                    chartsData.schedule.map((item, index) => {
                      return (
                        <div key={index} className="flex mb-3">
                          <div
                          // {skill.name == "React Js" ? 'animate-spin-slow w-[5.5rem] h-[5.5rem]' : 'w-[5.5rem] h-[5.5rem]'} 
                            className={item.title == "Meeting with suppliers from Kuta Bali" ? "bg-[#9BDD7C] w-1 mr-4 " : "bg-[#6972C3] w-1 mr-4"}
                          ></div>
                          <div className="font-lato text-xs font-normal text-gray-500">
                            <p className="text-sm font-bold text-gray-700">{item.title}</p>
                            <p>{item.time}</p>
                            <p>{item.venue}</p>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>

          </div>
        </main>
      )
      }
    </div >
  );
}