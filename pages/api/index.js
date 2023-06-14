const data = {
    line: [
        {
            user: 100,
            guest: 200,
        },
        {
            name: "Week 1",
            user: 420,
            guest: 380,
        },
        {
            name: "Week 2",
            user: 120,
            guest: 210,
        },
        {
            name: "Week 3",
            user: 460,
            guest: 340,
        },
        {
            name: "Week 4",
            user: 140,
            guest: 270,
        },
        {
            user: 270,
            guest: 460,
        },
    ],
    pie: [
        {
            name: "Basic Tees",
            value: 55,
        },
        {
            name: "Custom Short Pants",
            value: 31,
        },
        {
            name: "Super Hoodies",
            value: 14,
        },
    ],
    schedule: [
        {
            title: "Meeting with suppliers from Kuta Bali",
            time: "14:00-15:00",
            venue: "at Sunset Road, Kuta, Bali",
        },
        {
            title: "Check operation at Giga Factory 1",
            time: "18.00-20.00",
            venue: "at Central Jakarta",
        },
    ],
    transactions: [
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
            amount: 2500,
            status: "completed",
        },
        {
            id: 3,
            date: "2023-05-15",
            description: "Payment from Alex Johnson",
            amount: 500,
            status: "pending",
        },
        {
            id: 4,
            date: "2023-05-15",
            description: "Payment from Johnn",
            amount: 500,
            status: "pending",
        },
        {
            id: 5,
            date: "2023-05-15",
            description: "Payment from Mary",
            amount: 500,
            status: "pending",
        },
        {
            id: 6,
            date: "2023-05-15",
            description: "Payment from Johnn",
            amount: 500,
            status: "pending",
        },
        {
            id: 7,
            date: "2023-05-15",
            description: "Payment from Mary",
            amount: 500,
            status: "pending",
        },
        {
            id: 8,
            date: "2023-05-15",
            description: "Payment from Johnn",
            amount: 500,
            status: "pending",
        },
    ],
};

export default function handler(req, res) {
    res.status(200).json(data);
}
