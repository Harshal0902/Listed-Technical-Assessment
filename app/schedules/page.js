"use client"

import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import axios from 'axios'
import { GrSchedules } from "react-icons/gr";

const SchedulePage = () => {

    const [schedules, setSchedules] = useState([]);

    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            router.push('/signin');
        },
    });
    const router = useRouter();

    useEffect(() => {
        const fetchSchedules = async () => {
            try {
                const response = await axios.get("/api");
                const data = response.data;
                setSchedules(data.scheduleData);
            } catch (error) {
                console.error('Error fetching schedules:', error);
            }
        };

        fetchSchedules();
    }, []);

    return (
        <div>
            {session && (
                <div className="relative px-4">
                    <div className="md:absolute md:left-[320px] lg:left-[360px] my-6 md:pr-8 md:mt-24 w-full md:w-[65vw] lg:w-[75vw]">
                        <div className="mx-auto p-4">
                            <div className="grid grid-cols-2 gap-4 font-lato">
                                {schedules.map((schedule) => (
                                    <div
                                        key={schedule.id}
                                        className="bg-white p-4 rounded-lg shadow-md flex flex-col"
                                    >
                                        <div className='flex justify-between items-center'>
                                            <div className="font-bold mb-2">{schedule.time}</div>
                                            <div className="top-4 right-4 text-black">
                                                <GrSchedules size={24} />
                                            </div>
                                        </div>
                                        <div className="mb-2">{schedule.event}</div>
                                        <div className="text-gray-500 text-sm">{schedule.location}</div>
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
