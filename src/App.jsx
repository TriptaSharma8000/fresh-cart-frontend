import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ForgetPassword from './pages/ForgetPassword';
import Home from './pages/Home';
import DashBoard from './Dashboard/Pages/DashBoard';
import DashBoardProduct from './Dashboard/Pages/DashBoardProduct';
import CheckOutPage from './pages/CheckOutPage';
import AddProductForm from './Dashboard/components/AddProductForm';
import EditProduct from './Dashboard/Pages/EditProduct';
import ProductDetails from './components/ProductDetails';
import WishListPage from './pages/WishListPage';
import ShopCart from './components/ShopCart';
import User from './pages/User'
import UserSetting from './components/UserSetting';
import Address from './components/Address';
import DashBoardCustomers from './Dashboard/Pages/DashBoardCustomers';
import DashBoardOrders from './Dashboard/Pages/DashBoardOrders';
import DashBoardReviews from './Dashboard/Pages/DashBoardReviews';
import DashBoardMenuLevel from './Dashboard/Pages/DashBoardMenuLevel';    
import DashBoardCategories from './Dashboard/Pages/DashBoardCategories';
import DashBoardSellers from './Dashboard/Pages/DashBoardSellers';


const App = () => {
  return (
    <Router>
      <Routes>
        {/* Auth */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />

        {/* Main pages */}
        <Route path="/home" element={<Home />} />
        <Route path="/wishlist" element={<WishListPage />} />
        <Route path="/cart" element={<ShopCart />} />
        <Route path="/checkout" element={<CheckOutPage />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/User" element={<User />} />
        <Route path="/UserSetting" element={<UserSetting />} />
        <Route path="/Address" element={<Address />} />

        {/* Dashboard */}
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/dashboard/DashBoardProduct" element={<DashBoardProduct />} />
        <Route path="/AddProductForm" element={<AddProductForm />} />
        <Route path="/EditProduct/:id" element={<EditProduct />} />
        <Route path="/DashBoard/DashBoardCategories" element={<DashBoardCategories />} />
        <Route path="/DashBoard/DashBoardOrders" element={<DashBoardOrders />} />
        <Route path="/DashBoard/DashBoardSellers" element={<DashBoardSellers />} />
        <Route path="/DashBoard/DashBoardCustomers" element={<DashBoardCustomers />} />
        <Route path="/DashBoard/DashBoardReviews" element={<DashBoardReviews />} />
        <Route path="/DashBoard/DashBoardMenuLevel" element={<DashBoardMenuLevel />} />

      </Routes>
    </Router>
  );
};

export default App;
