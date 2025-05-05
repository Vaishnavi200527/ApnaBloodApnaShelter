import React from 'react';

const DonateBlood: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Donate Blood</h1>
        <p className="text-xl text-gray-600 text-center mb-12">
          Your donation can save lives
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Eligibility Criteria</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-red-600 mr-2">✓</span>
                <span>Age between 18-65 years</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">✓</span>
                <span>Weight at least 50 kg</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">✓</span>
                <span>Hemoglobin level at least 12.5 g/dL</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">✓</span>
                <span>No major illnesses or infections</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">✓</span>
                <span>Not pregnant or breastfeeding</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Donation Process</h2>
            <ol className="space-y-4">
              <li className="flex items-start">
                <span className="text-red-600 mr-2">1.</span>
                <span>Registration and basic health check</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">2.</span>
                <span>Medical history review</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">3.</span>
                <span>Blood donation (takes about 10-15 minutes)</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">4.</span>
                <span>Rest and refreshments</span>
              </li>
            </ol>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Schedule Your Donation</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="p-3 border rounded-lg"
              />
              <input
                type="email"
                placeholder="Email"
                className="p-3 border rounded-lg"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="p-3 border rounded-lg"
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
              <input
                type="date"
                className="p-3 border rounded-lg"
              />
              <select className="p-3 border rounded-lg">
                <option value="">Select Preferred Time</option>
                <option value="morning">Morning (9 AM - 12 PM)</option>
                <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
                <option value="evening">Evening (4 PM - 7 PM)</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700"
            >
              Schedule Donation
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DonateBlood; 