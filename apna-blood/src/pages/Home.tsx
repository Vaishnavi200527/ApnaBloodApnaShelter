import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-red-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Donate Blood, Save Lives
              </h1>
              <p className="text-xl mb-8">
                Join us in our mission to ensure a safe and adequate blood supply for all.
              </p>
              <div className="flex space-x-4">
                <Link
                  to="/donate-blood"
                  className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-50"
                >
                  Donate Blood
                </Link>
                <Link
                  to="/request-blood"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600"
                >
                  Request Blood
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src="/hero-image.jpg"
                alt="Blood Donation"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Donate Blood?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Save Lives</h3>
              <p>Your blood donation can save up to three lives. Every donation counts.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Health Benefits</h3>
              <p>Regular blood donation helps maintain healthy iron levels and reduces the risk of heart disease.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Community Impact</h3>
              <p>Join a community of donors making a difference in people's lives every day.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Blood Banks Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Find Blood Banks</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
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
        </div>
      </section>

      {/* Campaigns Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Upcoming Blood Donation Campaigns</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Campaign cards will be dynamically rendered here */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Community Blood Drive</h3>
              <p className="text-gray-600 mb-4">Date: June 15, 2024</p>
              <p className="mb-4">Join us for our monthly community blood donation drive.</p>
              <Link
                to="/campaigns/1"
                className="text-red-600 font-semibold hover:text-red-700"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 