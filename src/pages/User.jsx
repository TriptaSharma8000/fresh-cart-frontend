import React from "react";
import { FaEye } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";


const orders = [
  {
    id: "#14899",
    date: "March 5, 2023",
    product: "Haldiram's Nagpur Aloo Bhujia",
    size: "400g",
    items: 1,
    status: "Processing",
    amount: "$15.00",
    image: "Image"
  }
];

const statusColor = {
  Processing: "bg-yellow-200 text-yellow-800",
  Completed: "bg-green-200 text-green-800",
  Cancel: "bg-red-200 text-red-800"
};

const User = () => {
  return (
    <>
      <Navbar />
      <div className="flex min-h-screen bg-gray-50">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r p-6 space-y-6">
          <div className="text-lg font-semibold">Your Orders</div>
          <nav className="space-y-4 text-gray-700">
          <div className="font-semibold text-white bg-black px-3 py-2 rounded">Your Orders</div>
<Link to="/UserSetting" className="hover:text-black cursor-pointer block">
  Settings
</Link>
<Link to="/Address" className="hover:text-black cursor-pointer block">
  Address
</Link>
          <div className="hover:text-black cursor-pointer">Payment Method</div>
          <div className="hover:text-black cursor-pointer">Notification</div>
          <div className="pt-6 border-t hover:text-black cursor-pointer">Log out</div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        <h2 className="text-2xl font-bold mb-6">Your Orders</h2>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="text-left bg-gray-100 text-gray-600">
                <th className="p-4">Product</th>
                <th className="p-4">Order</th>
                <th className="p-4">Date</th>
                <th className="p-4">Items</th>
                <th className="p-4">Status</th>
                <th className="p-4">Amount</th>
                <th className="p-4">View</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="p-4 flex items-center gap-4">
                    <img
                      src={order.image}
                      alt={order.product}
                      className="w-12 h-12 object-contain"
                    />
                    <div>
                      <div className="font-semibold">{order.product}</div>
                      <div className="text-sm text-gray-500">{order.size}</div>
                    </div>
                  </td>
                  <td className="p-4">{order.id}</td>
                  <td className="p-4">{order.date}</td>
                  <td className="p-4">{order.items}</td>
                  <td className="p-4">
                    <span
                      className={`px-3 py-1 text-sm rounded-full font-medium ${statusColor[order.status]}`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="p-4">{order.amount}</td>
                  <td className="p-4 text-gray-600 hover:text-black cursor-pointer">
                    <FaEye />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
    <Footer />
    </>
  );
};

export default User;
