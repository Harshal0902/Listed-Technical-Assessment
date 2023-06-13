const data = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Bob Johnson' },
  ];
  
  export default function handler(req, res) {
    res.status(200).json(data);
  }
  