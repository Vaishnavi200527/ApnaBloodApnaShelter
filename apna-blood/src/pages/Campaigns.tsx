import React from 'react';

const Campaigns: React.FC = () => {
  const campaigns = [
    {
      id: 1,
      title: 'Community Blood Drive',
      date: 'June 15, 2024',
      time: '9:00 AM - 5:00 PM',
      location: 'City Community Center',
      description: 'Join us for our monthly community blood donation drive. Refreshments will be provided.',
      image: '/campaigns/community-drive.jpg',
    },
    {
      id: 2,
      title: 'Corporate Blood Donation Camp',
      date: 'June 20, 2024',
      time: '10:00 AM - 4:00 PM',
      location: 'Tech Park Auditorium',
      description: 'Special blood donation camp for corporate employees. Free health check-up included.',
      image: '/campaigns/corporate-camp.jpg',
    },
    {
      id: 3,
      title: 'University Blood Donation Week',
      date: 'June 25-30, 2024',
      time: '9:00 AM - 4:00 PM',
      location: 'University Campus',
      description: 'Week-long blood donation campaign at the university campus.',
      image: '/campaigns/university-week.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Blood Donation Campaigns</h1>
        <p className="text-xl text-gray-600 text-center mb-12">
          Join our upcoming blood donation campaigns
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {campaigns.map((campaign) => (
            <div
              key={campaign.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-48">
                <img
                  src={campaign.image}
                  alt={campaign.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{campaign.title}</h3>
                <div className="space-y-2 mb-4">
                  <p className="text-gray-600">
                    <span className="font-semibold">Date:</span> {campaign.date}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold">Time:</span> {campaign.time}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold">Location:</span> {campaign.location}
                  </p>
                </div>
                <p className="text-gray-600 mb-4">{campaign.description}</p>
                <button className="w-full bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-4">Organize a Campaign</h2>
          <p className="text-gray-600 mb-6">
            Want to organize a blood donation campaign in your community or organization?
            Fill out the form below and we'll help you get started.
          </p>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Organization Name"
                className="p-3 border rounded-lg"
              />
              <input
                type="text"
                placeholder="Contact Person"
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
              <input
                type="text"
                placeholder="Proposed Location"
                className="p-3 border rounded-lg"
              />
              <input
                type="date"
                className="p-3 border rounded-lg"
              />
            </div>
            <textarea
              placeholder="Additional Information"
              rows={4}
              className="w-full p-3 border rounded-lg"
            />
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

export default Campaigns; 