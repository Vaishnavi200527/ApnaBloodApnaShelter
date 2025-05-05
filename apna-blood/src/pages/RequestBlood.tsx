import React from 'react';

const RequestBlood: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Request Blood</h1>
        <p className="text-xl text-gray-600 text-center mb-12">
          Fill out the form below to request blood
        </p>

        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2">Patient's Name</label>
                <input
                  type="text"
                  className="w-full p-3 border rounded-lg"
                  placeholder="Enter patient's name"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Contact Number</label>
                <input
                  type="tel"
                  className="w-full p-3 border rounded-lg"
                  placeholder="Enter contact number"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Required Blood Group</label>
                <select className="w-full p-3 border rounded-lg" required>
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
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Units Required</label>
                <input
                  type="number"
                  min="1"
                  className="w-full p-3 border rounded-lg"
                  placeholder="Enter number of units"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-gray-700 mb-2">Hospital Name</label>
                <input
                  type="text"
                  className="w-full p-3 border rounded-lg"
                  placeholder="Enter hospital name"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-gray-700 mb-2">Hospital Address</label>
                <textarea
                  className="w-full p-3 border rounded-lg"
                  rows={3}
                  placeholder="Enter hospital address"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Required Date</label>
                <input
                  type="date"
                  className="w-full p-3 border rounded-lg"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Required Time</label>
                <select className="w-full p-3 border rounded-lg" required>
                  <option value="">Select Time</option>
                  <option value="morning">Morning (9 AM - 12 PM)</option>
                  <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
                  <option value="evening">Evening (4 PM - 7 PM)</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-gray-700 mb-2">Purpose of Requirement</label>
                <textarea
                  className="w-full p-3 border rounded-lg"
                  rows={3}
                  placeholder="Enter the purpose of blood requirement"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-gray-700 mb-2">Additional Information</label>
                <textarea
                  className="w-full p-3 border rounded-lg"
                  rows={3}
                  placeholder="Enter any additional information"
                />
              </div>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="terms"
                className="mr-2"
                required
              />
              <label htmlFor="terms" className="text-gray-600">
                I confirm that the information provided is accurate and I understand the terms of service.
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="urgent"
                className="mr-2"
              />
              <label htmlFor="urgent" className="text-gray-600">
                This is an urgent requirement (within 24 hours)
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700"
            >
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RequestBlood; 