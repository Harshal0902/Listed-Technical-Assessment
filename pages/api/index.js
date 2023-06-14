const data = {
    line: [
        {
            User: 100,
            Guest: 200,
        },
        {
            name: "Week 1",
            User: 420,
            Guest: 380,
        },
        {
            name: "Week 2",
            User: 120,
            Guest: 210,
        },
        {
            name: "Week 3",
            User: 460,
            Guest: 340,
        },
        {
            name: "Week 4",
            User: 140,
            Guest: 270,
        },
        {
            User: 270,
            Guest: 460,
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
        }
    ],
    scheduleData: [
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
    ]
};

export default function handler(req, res) {
    res.status(200).json(data);
}
