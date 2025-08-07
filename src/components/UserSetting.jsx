import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const UserSetting = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [passwords, setPasswords] = useState({
    current: "",
    new: "",
  });

  const handleDetailChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setPasswords({ ...passwords, [e.target.name]: e.target.value });
  };

  const handleDetailSubmit = () => {
    alert("Details saved");
  };

  const handlePasswordSubmit = () => {
    alert("Password changed");
  };

  const handleDeleteAccount = () => {
    if (window.confirm("Are you sure you want to delete your account?")) {
      alert("Account deleted");
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex min-h-screen bg-gray-50">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r p-6 space-y-6">
          <div className="text-lg font-semibold">Account</div>
          <nav className="space-y-4 text-gray-700">
            <Link
              to="/user"
              className="hover:text-black cursor-pointer block"
            >
              Your Orders
            </Link>
            <div className="font-semibold text-white bg-black px-3 py-2 rounded">
              Settings
            </div>
            <div className="hover:text-black cursor-pointer">Address</div>
            <div className="hover:text-black cursor-pointer">Payment Method</div>
            <div className="hover:text-black cursor-pointer">Notification</div>
            <div className="pt-6 border-t hover:text-black cursor-pointer">Log out</div>
          </nav>
        </aside>

        {/* Main Settings Content */}
        <main className="flex-1 p-10 overflow-y-auto">
          {/* Account Details */}
          <div className="mb-10">
            <h3 className="text-xl font-semibold mb-4">Account details</h3>
            <div className="space-y-4 max-w-md">
              <input
                type="text"
                name="name"
                value={userDetails.name}
                onChange={handleDetailChange}
                placeholder="Name"
                className="w-full border rounded px-4 py-2"
              />
              <input
                type="email"
                name="email"
                value={userDetails.email}
                onChange={handleDetailChange}
                placeholder="Email"
                className="w-full border rounded px-4 py-2"
              />
              <input
                type="tel"
                name="phone"
                value={userDetails.phone}
                onChange={handleDetailChange}
                placeholder="Phone number"
                className="w-full border rounded px-4 py-2"
              />
              <button
                onClick={handleDetailSubmit}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Save Details
              </button>
            </div>
          </div>

          <hr className="my-10" />

          {/* Password Section */}
          <div className="mb-10">
            <h3 className="text-xl font-semibold mb-4">Password</h3>
            <div className="space-y-4 max-w-md">
              <input
                type="password"
                name="new"
                value={passwords.new}
                onChange={handlePasswordChange}
                placeholder="New Password"
                className="w-full border rounded px-4 py-2"
              />
              <input
                type="password"
                name="current"
                value={passwords.current}
                onChange={handlePasswordChange}
                placeholder="Current Password"
                className="w-full border rounded px-4 py-2"
              />
              <p className="text-sm text-gray-600">
                Can't remember your current password?{" "}
                <a href="#" className="text-green-600 underline">
                  Reset your password
                </a>.
              </p>
              <button
                onClick={handlePasswordSubmit}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Save Password
              </button>
            </div>
          </div>

          <hr className="my-10" />

          {/* Delete Account */}
          <div className="max-w-xl">
            <h3 className="text-xl font-semibold mb-2 text-red-600">Delete Account</h3>
            <p className="text-gray-700 mb-2">Would you like to delete your account?</p>
            <p className="text-sm text-gray-500 mb-4">
              This account contains 12 orders. Deleting your account will remove all the order details associated with it.
            </p>
            <button
              onClick={handleDeleteAccount}
              className="bg-red-100 text-red-600 border border-red-500 px-4 py-2 rounded hover:bg-red-200"
            >
              I want to delete my account
            </button>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default UserSetting;
