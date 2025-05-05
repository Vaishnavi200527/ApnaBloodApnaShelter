import React from 'react';

const BloodBanks: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Find Blood Banks</h1>
        <p className="text-xl text-gray-600 text-center mb-12">
          Locate blood banks near you
        </p>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Search by location"
              className="flex-1 p-3 border rounded-lg"
            />
            <select className="p-3 border rounded-lg">
              <option value="">Select Blood Group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
            <button className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700">
              Search
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Sample blood bank cards */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">City Blood Bank</h3>
            <p className="text-gray-600 mb-4">123 Main Street, Mumbai</p>
            <p className="mb-4">Open 24/7</p>
            <div className="flex justify-between items-center">
              <span className="text-red-600 font-semibold">Contact: 9876543210</span>
              <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">
                View Details
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">Central Blood Center</h3>
            <p className="text-gray-600 mb-4">456 Hospital Road, Delhi</p>
            <p className="mb-4">Open 9 AM - 6 PM</p>
            <div className="flex justify-between items-center">
              <span className="text-red-600 font-semibold">Contact: 9876543211</span>
              <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">
                View Details
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">Life Blood Bank</h3>
            <p className="text-gray-600 mb-4">789 Health Avenue, Bangalore</p>
            <p className="mb-4">Open 24/7</p>
            <div className="flex justify-between items-center">
              <span className="text-red-600 font-semibold">Contact: 9876543212</span>
              <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BloodBanks; 