"use client"

import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const TransactionsPage = () => {
    const [transactions, setTransactions] = useState([]);
    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            router.push('/signin');
        },
    });
    const router = useRouter();

    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const response = await axios.get("/api");
                const data = response.data;
                setTransactions(data.transactions);
            } catch (error) {
                console.error('Error fetching transactions:', error);
            }
        };

        fetchTransactions();
    }, []);

    return (
        <div>
            {session && (
                <div className="relative px-4">
                    <div className="md:absolute md:left-[320px] lg:left-[360px] my-6 md:pr-8 md:mt-24 w-full md:w-[65vw] lg:w-[75vw]">
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
            )}
        </div>
    );
};

export default TransactionsPage;
