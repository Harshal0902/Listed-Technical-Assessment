"use client"

import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import axios from 'axios'
import { GrSchedules } from "react-icons/gr";

const scheduleData = [
    {
        id: 1,
        time: '09:00 AM',
        event: 'Meeting',
        location: 'Conference Room A',
    },
    {
        id: 2,
        time: '11:00 AM',
        event: 'Presentation',
        location: 'Auditorium',
    },
    {
        id: 3,
        time: '02:00 PM',
        event: 'Workshop',
        location: 'Training Room B',
    },
    // Add more schedule items with different times, events, and locations
    {
        id: 4,
        time: '04:00 PM',
        event: 'Meeting',
        location: 'Conference Room A',
    },
    {
        id: 5,
        time: '06:00 PM',
        event: 'Presentation',
        location: 'Auditorium',

    },
    {
        id: 6,
        time: '08:00 PM',
        event: 'Workshop',
        location: 'Training Room B',
    },
    {
        id: 7,
        time: '10:00 PM',
        event: 'Meeting',
        location: 'Conference Room A',
    },
    {
        id: 8,
        time: '12:00 PM',
        event: 'Presentation',
        location: 'Auditorium',
    },
    {
        id: 9,
        time: '02:00 AM',
        event: 'Workshop',
        location: 'Training Room B',
    },
    {
        id: 10,
        time: '04:00 AM',
        event: 'Meeting',
        location: 'Conference Room A',
    },
    {
        id: 11,
        time: '06:00 AM',
        event: 'Presentation',
        location: 'Auditorium',
    },

];

const SchedulePage = () => {

    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            router.push('/signin');
        },
    });
    const router = useRouter();

    return (
        <div>
            {session && (
                <div className="relative px-4">
                    <div className="md:absolute md:left-[320px] lg:left-[360px] my-6 md:pr-8 md:mt-24 w-full md:w-[65vw] lg:w-[75vw]">
                        <div className="mx-auto p-4">
                            <div className="grid grid-cols-2 gap-4 font-lato">
                                {scheduleData.map((item) => (
                                    <div
                                        key={item.id}
                                        className="bg-white p-4 rounded-lg shadow-md flex flex-col"
                                    >
                                        <div className='flex justify-between items-center'>
                                            <div className="font-bold mb-2">{item.time}</div>
                                            <div className="top-4 right-4 text-black">
                                                <GrSchedules size={24} />
                                            </div>
                                        </div>
                                        <div className="mb-2">{item.event}</div>
                                        <div className="text-gray-500 text-sm">{item.location}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )
            }
        </div >
    );
};

export default SchedulePage;
