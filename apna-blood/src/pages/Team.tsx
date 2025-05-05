import React from 'react';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: 'Mahek Kawna',
      role: 'Lead Developer',
      image: '/team/mahek.jpg',
      description: 'Full-stack developer with expertise in React and TypeScript.',
    },
    {
      name: 'Vaishnavi Kumbhar',
      role: 'Frontend Developer',
      image: '/team/vaishnavi.jpg',
      description: 'UI/UX specialist with a focus on creating intuitive user experiences.',
    },
    {
      name: 'Taniya Nagdev',
      role: 'Backend Developer',
      image: '/team/taniya.jpg',
      description: 'Backend engineer specializing in API development and database management.',
    },
    {
      name: 'Disha Kulkarni',
      role: 'Quality Assurance',
      image: '/team/disha.jpg',
      description: 'QA engineer ensuring the highest standards of software quality.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Our Technical Team</h1>
        <p className="text-xl text-gray-600 text-center mb-12">
          Meet the talented individuals behind ApnaBlood
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-64">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-red-600 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-4">About Our Team</h2>
          <p className="text-gray-600 mb-4">
            Our technical team consists of passionate developers and engineers dedicated to creating
            a seamless blood donation experience. We work together to ensure the platform is
            reliable, secure, and user-friendly.
          </p>
          <p className="text-gray-600">
            Each team member brings unique skills and expertise to the table, contributing to
            the success of ApnaBlood. We are committed to continuous improvement and innovation
            to better serve our community.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team; 