import React from 'react'
import DashBoardSidebar from "../components/DashBoardSidebar";
import DashBoardNavbar from "../components/DashBoardNavbar";
import DashboardHeader from '../components/DashboardHeader';


const DashBoardSellers = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <DashBoardSidebar />
      <main className="flex-1 p-4">
        <DashboardHeader />
        <DashBoardNavbar />
        <h2>DashBoardSellers</h2>
      </main>
    </div>
  )
}

export default DashBoardSellers