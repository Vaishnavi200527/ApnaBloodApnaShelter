import React from 'react';

export default function BloodRequest() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Request Blood</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Fill out the form below to request blood. Our platform will connect you with potential donors in your area.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <form className="space-y-8">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label htmlFor="blood-type" className="block text-sm font-semibold leading-6 text-gray-900">
                  Blood Type
                </label>
                <select
                  id="blood-type"
                  name="blood-type"
                  className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6"
                >
                  <option>A+</option>
                  <option>A-</option>
                  <option>B+</option>
                  <option>B-</option>
                  <option>AB+</option>
                  <option>AB-</option>
                  <option>O+</option>
                  <option>O-</option>
                </select>
              </div>
              <div>
                <label htmlFor="units" className="block text-sm font-semibold leading-6 text-gray-900">
                  Units Required
                </label>
                <input
                  type="number"
                  name="units"
                  id="units"
                  min="1"
                  className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="location" className="block text-sm font-semibold leading-6 text-gray-900">
                Location
              </label>
              <input
                type="text"
                name="location"
                id="location"
                className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              />
            </div>
            <div>
              <label htmlFor="urgency" className="block text-sm font-semibold leading-6 text-gray-900">
                Urgency Level
              </label>
              <select
                id="urgency"
                name="urgency"
                className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6"
              >
                <option>Emergency</option>
                <option>Urgent</option>
                <option>Normal</option>
              </select>
            </div>
            <div>
              <label htmlFor="notes" className="block text-sm font-semibold leading-6 text-gray-900">
                Additional Notes
              </label>
              <textarea
                id="notes"
                name="notes"
                rows={4}
                className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              />
            </div>
            <div>
              <button
                type="submit"
                className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Submit Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 