"use client"

import React, { use } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';

const transactions = [
    {
        id: 1,
        date: "2023-05-17",
        description: "Payment from John Doe",
        amount: 1000,
        status: "completed",
    },
    {
        id: 2,
        date: "2023-05-16",
        description: "Payment from Jane Smith",
        amount: 725,
        status: "completed",
    },
    {
        id: 3,
        date: "2023-05-15",
        description: "Payment from Alex Johnson",
        amount: 687,
        status: "pending",
    },
    {
        id: 4,
        date: "2023-05-15",
        description: "Payment from Johnn",
        amount: 9633,
        status: "pending",
    },
    {
        id: 5,
        date: "2023-05-15",
        description: "Payment from Mary",
        amount: 963,
        status: "pending",
    },
    {
        id: 6,
        date: "2023-05-15",
        description: "Payment from Johnn",
        amount: 7866,
        status: "pending",
    },
    {
        id: 7,
        date: "2023-05-15",
        description: "Payment from Mary",
        amount: 741,
        status: "pending",
    },
    {
        id: 8,
        date: "2023-05-15",
        description: "Payment from Johnn",
        amount: 7866,
        status: "pending",
    },
    {
        id: 9,
        date: "2023-05-15",
        description: "Payment from Johnn",
        amount: 7866,
        status: "pending",
    },
    {
        id: 10,
        date: "2023-05-15",
        description: "Payment from Mary",
        amount: 275,
        status: "pending",
    },
    {
        id: 11,
        date: "2023-05-15",
        description: "Payment from Johnn",
        amount: 786,
        status: "pending",
    },
    {
        id: 12,
        date: "2023-05-15",
        description: "Payment from Johnn",
        amount: 786,
        status: "pending",
    },
    {
        id: 13,
        date: "2023-05-15",
        description: "Payment from Mary",
        amount: 785,
        status: "pending",
    },
    {
        id: 14,
        date: "2023-05-15",
        description: "Payment from Johnn",
        amount: 588,
        status: "pending",
    },
];

const TransactionsPage = () => {

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
                <div className="relative px-4">
                    <div className="md:absolute md:left-[320px] lg:left-[360px] mt-6 md:pr-8 md:mt-24 w-full md:w-[65vw] lg:w-[75vw]">
                        <div className="bg-white shadow overflow-hidden rounded-lg font-lato">
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Date
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Description
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Amount
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Status
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        {transactions.map((transaction) => (
                                            <tr key={transaction.id}>
                                                <td className="px-6 py-4 whitespace-nowrap sm:w-1/4 md:w-1/6 lg:w-1/4 xl:w-1/6 text-sm text-gray-500">
                                                    {transaction.date}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap sm:w-1/4 md:w-2/6 lg:w-1/4 xl:w-2/6 text-sm text-gray-500">
                                                    {transaction.description}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap sm:w-1/4 md:w-1/6 lg:w-1/4 xl:w-1/6 text-sm text-gray-500">
                                                    {transaction.amount}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap sm:w-1/4 md:w-1/6 lg:w-1/4 xl:w-1/6 text-sm text-gray-500 capitalize">
                                                    {transaction.status}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                </div>
            )
            }
        </div >
    );
};

export default TransactionsPage;