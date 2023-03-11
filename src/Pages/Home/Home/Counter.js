import { useState } from "react";

function Counter() {
  const [totalSales, setTotalSales] = useState(0);
  const [stock, setStock] = useState(10);
  const [totalReviews, setTotalReviews] = useState(0);

  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="flex items-center space-x-2">
        <span className="font-bold text-2xl">{totalSales}</span>
        <span className="text-gray-500">Total Sales</span>
      </div>
      <div className="flex items-center space-x-2">
        <span className="font-bold text-2xl">{stock}</span>
        <span className="text-gray-500">Stock</span>
      </div>
      <div className="flex items-center space-x-2">
        <span className="font-bold text-2xl">{totalReviews}</span>
        <span className="text-gray-500">Total Reviews</span>
      </div>
      <button
        className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
        onClick={() => setTotalSales(totalSales + 1)}
      >
        Increment Total Sales
      </button>
      <button
        className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-600"
        onClick={() => setStock(stock + 1)}
      >
        Increment Stock
      </button>
      <button
        className="px-4 py-2 text-white bg-yellow-500 rounded hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-600"
        onClick={() => setTotalReviews(totalReviews + 1)}
      >
        Increment Total Reviews
      </button>
    </div>
  );
}
export default Counter;
