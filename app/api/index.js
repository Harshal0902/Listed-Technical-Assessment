const data = {
    message: "Hello, World!",
    items: ["apple", "banana", "orange"],
  };
  
  export default function handler(req, res) {
    res.status(200).json(data);
  }
  