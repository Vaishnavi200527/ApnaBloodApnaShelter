import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Dashboard Header */}
      <header className="bg-red-600 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">ApnaBlood Dashboard</h1>
            <button
              onClick={handleLogout}
              className="bg-white text-red-600 px-4 py-2 rounded hover:bg-red-50"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-4">
              <nav className="space-y-2">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`w-full text-left px-4 py-2 rounded ${
                    activeTab === 'overview' ? 'bg-red-600 text-white' : 'hover:bg-gray-100'
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab('donations')}
                  className={`w-full text-left px-4 py-2 rounded ${
                    activeTab === 'donations' ? 'bg-red-600 text-white' : 'hover:bg-gray-100'
                  }`}
                >
                  My Donations
                </button>
                <button
                  onClick={() => setActiveTab('appointments')}
                  className={`w-full text-left px-4 py-2 rounded ${
                    activeTab === 'appointments' ? 'bg-red-600 text-white' : 'hover:bg-gray-100'
                  }`}
                >
                  Appointments
                </button>
                <button
                  onClick={() => setActiveTab('requests')}
                  className={`w-full text-left px-4 py-2 rounded ${
                    activeTab === 'requests' ? 'bg-red-600 text-white' : 'hover:bg-gray-100'
                  }`}
                >
                  Blood Requests
                </button>
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`w-full text-left px-4 py-2 rounded ${
                    activeTab === 'profile' ? 'bg-red-600 text-white' : 'hover:bg-gray-100'
                  }`}
                >
                  Profile
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-3">
            {activeTab === 'overview' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-2">Total Donations</h3>
                  <p className="text-3xl font-bold text-red-600">5</p>
                  <p className="text-gray-600">Last donation: 2 months ago</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-2">Upcoming Appointments</h3>
                  <p className="text-3xl font-bold text-red-600">1</p>
                  <p className="text-gray-600">Next appointment: June 15, 2024</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-2">Active Requests</h3>
                  <p className="text-3xl font-bold text-red-600">2</p>
                  <p className="text-gray-600">Last request: 1 week ago</p>
                </div>
              </div>
            )}

            {activeTab === 'donations' && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-4">Donation History</h2>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="py-2 px-4 text-left">Date</th>
                        <th className="py-2 px-4 text-left">Blood Bank</th>
                        <th className="py-2 px-4 text-left">Units</th>
                        <th className="py-2 px-4 text-left">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-2 px-4">Apr 15, 2024</td>
                        <td className="py-2 px-4">City Blood Bank</td>
                        <td className="py-2 px-4">1</td>
                        <td className="py-2 px-4">
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded">
                            Completed
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'appointments' && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-4">My Appointments</h2>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="py-2 px-4 text-left">Date</th>
                        <th className="py-2 px-4 text-left">Time</th>
                        <th className="py-2 px-4 text-left">Blood Bank</th>
                        <th className="py-2 px-4 text-left">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-2 px-4">June 15, 2024</td>
                        <td className="py-2 px-4">10:00 AM</td>
                        <td className="py-2 px-4">City Blood Bank</td>
                        <td className="py-2 px-4">
                          <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                            Scheduled
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'requests' && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-4">Blood Requests</h2>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="py-2 px-4 text-left">Date</th>
                        <th className="py-2 px-4 text-left">Blood Group</th>
                        <th className="py-2 px-4 text-left">Units</th>
                        <th className="py-2 px-4 text-left">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-2 px-4">May 20, 2024</td>
                        <td className="py-2 px-4">A+</td>
                        <td className="py-2 px-4">2</td>
                        <td className="py-2 px-4">
                          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                            In Progress
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'profile' && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-4">My Profile</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      className="w-full p-3 border rounded-lg"
                      value="John Doe"
                      readOnly
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Blood Group</label>
                    <input
                      type="text"
                      className="w-full p-3 border rounded-lg"
                      value="A+"
                      readOnly
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full p-3 border rounded-lg"
                      value="john@example.com"
                      readOnly
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      className="w-full p-3 border rounded-lg"
                      value="+91 9876543210"
                      readOnly
                    />
                  </div>
                </div>
                <button className="mt-6 bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700">
                  Edit Profile
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 