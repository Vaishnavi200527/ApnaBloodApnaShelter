import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">About ApnaBlood</h1>
        <p className="text-xl text-gray-600 text-center mb-12">
          Connecting donors and recipients for a better tomorrow
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-600">
              ApnaBlood is dedicated to ensuring a safe and adequate blood supply for all.
              We connect blood donors, recipients, and blood banks through our platform,
              making the process of blood donation and transfusion more efficient and accessible.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
            <p className="text-gray-600">
              We envision a world where no one dies due to lack of blood. Our goal is to
              create a robust network of blood donors and make blood donation a regular
              practice in our society.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-12">
          <h2 className="text-2xl font-semibold mb-4">How We Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl text-red-600 mb-4">1</div>
              <h3 className="text-xl font-semibold mb-2">Register</h3>
              <p className="text-gray-600">
                Create an account and provide your blood group and location details.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl text-red-600 mb-4">2</div>
              <h3 className="text-xl font-semibold mb-2">Connect</h3>
              <p className="text-gray-600">
                Get connected with blood banks and donors in your area.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl text-red-600 mb-4">3</div>
              <h3 className="text-xl font-semibold mb-2">Save Lives</h3>
              <p className="text-gray-600">
                Donate blood or find donors when needed, making a difference in someone's life.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-red-600 mb-2">10,000+</div>
              <p className="text-gray-600">Registered Donors</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600 mb-2">500+</div>
              <p className="text-gray-600">Blood Banks</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600 mb-2">50,000+</div>
              <p className="text-gray-600">Lives Saved</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600 mb-2">100+</div>
              <p className="text-gray-600">Cities Covered</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 