const data = {
    line: [
        {
            user: 100,
            guest: 200,
        },
        {
            name: "Week 1",
            user: 420,
            guest: 460,
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
};

export default function handler(req, res) {
    res.status(200).json(data);
}
