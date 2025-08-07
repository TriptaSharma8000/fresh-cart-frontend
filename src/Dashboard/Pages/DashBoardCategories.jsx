import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUtensils,
  faBreadSlice,
  faBaby,
  faGlassWhiskey,
  faToiletPaper,
  faEgg,
  faDrumstickBite,
  faCarrot,
  faChevronDown,
  faEllipsisV,
} from '@fortawesome/free-solid-svg-icons';

import DashBoardSidebar from '../components/DashBoardSidebar';
import DashboardHeader from '../components/DashboardHeader';
import DashBoardNavbar from '../components/DashBoardNavbar';

const categories = [
  { icon: faUtensils, name: 'Snack & Munchies', product: 12, status: 'Published' },
  { icon: faBreadSlice, name: 'Bakery & Biscuits', product: 8, status: 'Published' },
  { icon: faBaby, name: 'Baby Care', product: 32, status: 'Published' },
  { icon: faGlassWhiskey, name: 'Cold Drinks & Juices', product: 34, status: 'Published' },
  { icon: faToiletPaper, name: 'Toiletries', product: 23, status: 'Unpublished' },
  { icon: faEgg, name: 'Dairy, Bread & Eggs', product: 16, status: 'Published' },
  { icon: faDrumstickBite, name: 'Chicken, Meat & Fish', product: 14, status: 'Published' },
  { icon: faCarrot, name: 'Fruits & Vegetables', product: 32, status: 'Published' },
];

const StatusBadge = ({ status }) => (
  <span
    className={`px-2 py-1 text-xs font-medium rounded ${
      status === 'Published' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
    }`}
  >
    {status}
  </span>
);

const DashBoardCategories = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <DashBoardSidebar />

      <main className="flex-1 p-4">
        <DashboardHeader />
        <DashBoardNavbar />

        {/* Top section */}
        <div className="flex justify-between items-center my-6">
          <h2 className="text-2xl font-semibold">Categories</h2>
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
            Add New Category
          </button>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-4 mb-4">
          <input
            type="text"
            placeholder="Search Category"
            className="border border-gray-300 rounded px-3 py-2 w-1/3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button className="border border-gray-300 rounded px-4 py-2 flex items-center gap-2 bg-white">
            Status <FontAwesomeIcon icon={faChevronDown} />
          </button>
        </div>

        {/* Category Table */}
        <div className="border rounded-lg overflow-hidden bg-white">
          <table className="w-full text-sm">
            <thead className="bg-gray-100 text-gray-600 text-left">
              <tr>
                <th className="px-4 py-3"><input type="checkbox" /></th>
                <th className="px-4 py-3">Icon</th>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Product</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category, idx) => (
                <tr key={idx} className="border-t hover:bg-gray-50">
                  <td className="px-4 py-2"><input type="checkbox" /></td>
                  <td className="px-4 py-2 text-lg">
                    <FontAwesomeIcon icon={category.icon} className="text-gray-700" />
                  </td>
                  <td className="px-4 py-2">{category.name}</td>
                  <td className="px-4 py-2">{category.product}</td>
                  <td className="px-4 py-2">
                    <StatusBadge status={category.status} />
                  </td>
                  <td className="px-4 py-2">
                    <FontAwesomeIcon icon={faEllipsisV} className="cursor-pointer text-gray-500" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
          <span>Showing 1 to 10 of 14 entries</span>
          <div className="flex gap-1">
            <button className="border border-gray-300 px-3 py-1 rounded">Previous</button>
            <button className="bg-green-600 text-white px-3 py-1 rounded">1</button>
            <button className="border border-gray-300 px-3 py-1 rounded">2</button>
            <button className="border border-gray-300 px-3 py-1 rounded">Next</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashBoardCategories;
