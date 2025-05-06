import { FaUsers, FaGlobe, FaAward } from 'react-icons/fa';

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'John Smith',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a',
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      role: 'Travel Expert',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2',
    },
    {
      id: 3,
      name: 'Michael Chen',
      role: 'Tour Guide',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
    },
  ];

  return (
    <div className="min-h-screen bg-cloud">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-primary-900">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-cloud max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About WanderVibe
            </h1>
            <p className="text-xl">
              Creating unforgettable travel experiences since 2015
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-midnight mb-6">
              Our Story
            </h2>
            <p className="text-midnight-600 mb-8">
              WanderVibe was founded with a simple mission: to make travel accessible, 
              enjoyable, and meaningful for everyone. We believe that travel has the 
              power to transform lives and create lasting memories.
            </p>
            <p className="text-midnight-600">
              Our team of experienced travel experts works tirelessly to curate the 
              perfect experiences for our clients, ensuring that every journey is 
              unique and unforgettable.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-primary-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-midnight mb-12 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary text-cloud w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUsers size={24} />
              </div>
              <h3 className="text-xl font-semibold text-midnight mb-2">
                Customer First
              </h3>
              <p className="text-midnight-600">
                We prioritize our customers' needs and satisfaction above all else.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-cloud w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaGlobe size={24} />
              </div>
              <h3 className="text-xl font-semibold text-midnight mb-2">
                Sustainable Travel
              </h3>
              <p className="text-midnight-600">
                We promote responsible tourism and sustainable travel practices.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-cloud w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaAward size={24} />
              </div>
              <h3 className="text-xl font-semibold text-midnight mb-2">
                Excellence
              </h3>
              <p className="text-midnight-600">
                We strive for excellence in every aspect of our service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-midnight mb-12 text-center">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="text-center">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-48 h-48 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-midnight mb-1">
                  {member.name}
                </h3>
                <p className="text-primary">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
