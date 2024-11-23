import "./App.css";
import { Card } from "./Card";

function App() {
  const products = [
    {
      name: "Book",
      price: "100",
      image:
        "data:image/jpeg;base64,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",
    },
    { name: "Juice", price: "200" },
    { name: "Car", price: "900" },
    { name: "Pencil", price: "20" },
    { name: "Laptop", price: "1200" },
    { name: "Chair", price: "300" },
    { name: "Phone", price: "800" },
    { name: "Table", price: "400" },
    { name: "Headphones", price: "150" },
    { name: "Backpack", price: "250" },
    { name: "Shoes", price: "350" },
    { name: "Watch", price: "500" },
    { name: "T-shirt", price: "50" },
    { name: "Camera", price: "1100" },
    { name: "Keyboard", price: "90" },
    { name: "Mouse", price: "70" },
    { name: "Printer", price: "600" },
    { name: "Bottle", price: "30" },
    { name: "Fan", price: "220" },
    { name: "Lamp", price: "180" },
  ];

  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
      }}
    >
      {products.map((p) => (
        <Card name={p.name} price={p.price} image={p.image}></Card>
      ))}
    </div>
  );
}

export default App;
