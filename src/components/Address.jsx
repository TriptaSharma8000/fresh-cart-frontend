import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const AddressCard = ({ type, name, address, phone, isDefault, onSetDefault }) => {
  return (
    <div className="border rounded-xl p-4 w-full md:w-80 shadow-sm">
      <div className="flex items-center mb-2">
        <span className={`h-3 w-3 rounded-full mr-2 ${isDefault ? "bg-green-500" : "bg-gray-400"}`}></span>
        <h2 className="font-semibold text-lg">{type}</h2>
      </div>
      <p className="text-sm text-gray-700">{name}</p>
      <p className="text-sm text-gray-700">{address}</p>
      <p className="text-sm text-gray-700 mb-4">{phone}</p>
      {isDefault ? (
        <button className="bg-blue-600 text-white text-xs px-3 py-1 rounded mb-2">Default address</button>
      ) : (
        <button
          onClick={onSetDefault}
          className="text-green-600 text-sm font-medium mb-2 hover:underline"
        >
          Set as Default
        </button>
      )}
      <div className="flex gap-4 text-sm">
        <button className="text-gray-700 hover:underline">Edit</button>
        <button className="text-red-600 hover:underline">Delete</button>
      </div>
    </div>
  );
};

const AddressForm = ({ onClose }) => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    address1: "",
    address2: "",
    city: "",
    country: "India",
    state: "Gujarat",
    zip: "",
    business: "",
    isDefault: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", form);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm z-50">
      <div className="bg-white w-full max-w-sm p-4 rounded-lg shadow-xl relative mx-4">
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-400 hover:text-black text-xl">&times;</button>
        <h2 className="text-lg font-semibold mb-1">New Shipping Address</h2>
        <p className="text-xs text-gray-500 mb-4">Add new shipping address for your order delivery.</p>
        <form onSubmit={handleSubmit} className="space-y-2">
          <input name="firstName" placeholder="First name" className="w-full p-2 border rounded text-sm" onChange={handleChange} />
          <input name="lastName" placeholder="Last name" className="w-full p-2 border rounded text-sm" onChange={handleChange} />
          <input name="address1" placeholder="Address Line 1" className="w-full p-2 border rounded text-sm" onChange={handleChange} />
          <input name="address2" placeholder="Address Line 2" className="w-full p-2 border rounded text-sm" onChange={handleChange} />
          <input name="city" placeholder="City" className="w-full p-2 border rounded text-sm" onChange={handleChange} />
          <select name="country" value={form.country} onChange={handleChange} className="w-full p-2 border rounded text-sm">
            <option>India</option>
          </select>
          <select name="state" value={form.state} onChange={handleChange} className="w-full p-2 border rounded text-sm">
            <option>Gujarat</option>
            <option>Maharashtra</option>
            <option>Punjab</option>
            <option>Rajasthan</option>
          </select>
          <input name="zip" placeholder="Zip Code" className="w-full p-2 border rounded text-sm" onChange={handleChange} />
          <input name="business" placeholder="Business Name" className="w-full p-2 border rounded text-sm" onChange={handleChange} />
          <label className="inline-flex items-center text-sm">
            <input type="checkbox" name="isDefault" className="mr-2" checked={form.isDefault} onChange={handleChange} />
            Set as Default
          </label>
          <div className="flex justify-end gap-3 pt-3">
            <button type="button" onClick={onClose} className="border border-green-600 text-green-600 text-sm px-3 py-1 rounded hover:bg-green-50">Cancel</button>
            <button type="submit" className="bg-green-600 text-white text-sm px-3 py-1 rounded hover:bg-green-700">Save Address</button>
          </div>
        </form>
      </div>
    </div>
  );
};

const Address = () => {
  const [defaultType, setDefaultType] = useState("Home");
  const [showForm, setShowForm] = useState(false);

  const addresses = [
    {
      type: "Home",
      name: "Jitu Chauhan",
      address: "4450 North Avenue Oakland, Nebraska United States",
      phone: "402-776-1106",
    },
    {
      type: "Office",
      name: "Nitu Chauhan",
      address: "3853 Coal Road, Tannersville Pennsylvania 18372 United States",
      phone: "402-776-1106",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 p-6 flex">
        <aside className="w-64 pr-6 border-r hidden md:block">
          <nav className="space-y-4">
            <div className="text-gray-700 hover:text-black cursor-pointer">Your Orders</div>
            <div className="text-gray-700 hover:text-black cursor-pointer">Settings</div>
            <div className="text-white bg-black px-3 py-2 rounded cursor-pointer">Address</div>
            <div className="text-gray-700 hover:text-black cursor-pointer">Payment Method</div>
            <div className="text-gray-700 hover:text-black cursor-pointer">Notification</div>
            <div className="pt-6 text-gray-700 hover:text-black cursor-pointer">↩ Log out</div>
          </nav>
        </aside>

        <main className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Address</h1>
            <button
              onClick={() => setShowForm(true)}
              className="border border-green-600 text-green-600 px-4 py-2 rounded hover:bg-green-50"
            >
              Add a new address
            </button>
          </div>
          <div className="flex flex-col md:flex-row gap-6">
            {addresses.map((addr) => (
              <AddressCard
                key={addr.type}
                {...addr}
                isDefault={defaultType === addr.type}
                onSetDefault={() => setDefaultType(addr.type)}
              />
            ))}
          </div>
        </main>
      </div>
      {showForm && <AddressForm onClose={() => setShowForm(false)} />}
      <Footer />
    </>
  );
};

export default Address;
