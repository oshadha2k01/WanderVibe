import { FaMapMarkerAlt, FaCalendarAlt, FaUsers, FaStar } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Tropical Paradise Package',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
      location: 'Maldives',
      duration: '7 Days',
      price: '$999',
      rating: 4.9,
      description: 'Experience the ultimate beach getaway with luxury accommodations and water activities.'
    },
    {
      id: 2,
      title: 'Mountain Adventure',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b',
      location: 'Swiss Alps',
      duration: '5 Days',
      price: '$799',
      rating: 4.8,
      description: 'Hike through stunning alpine landscapes and enjoy cozy mountain lodges.'
    },
    {
      id: 3,
      title: 'Cultural Experience',
      image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9',
      location: 'Kyoto, Japan',
      duration: '6 Days',
      price: '$899',
      rating: 4.7,
      description: 'Immerse yourself in Japanese culture with temple visits and traditional activities.'
    },
    {
      id: 4,
      title: 'Safari Adventure',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801',
      location: 'Serengeti, Tanzania',
      duration: '8 Days',
      price: '$1299',
      rating: 4.9,
      description: 'Witness the great migration and experience the African wilderness.'
    }
  ];

  return (
    <div className="min-h-screen bg-cloud">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-primary-900">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-cloud max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Services
            </h1>
            <p className="text-xl">
              Discover our carefully curated travel experiences
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-semibold text-midnight">
                      {service.title}
                    </h3>
                    <div className="flex items-center text-gold">
                      <FaStar className="mr-1" />
                      <span>{service.rating}</span>
                    </div>
                  </div>
                  <p className="text-midnight-600 mb-4">
                    {service.description}
                  </p>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="flex items-center text-primary">
                      <FaMapMarkerAlt className="mr-2" />
                      <span>{service.location}</span>
                    </div>
                    <div className="flex items-center text-primary">
                      <FaCalendarAlt className="mr-2" />
                      <span>{service.duration}</span>
                    </div>
                    <div className="flex items-center text-primary">
                      <FaUsers className="mr-2" />
                      <span>Small Group</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-orange">
                      {service.price}
                    </span>
                    <button className="btn-primary">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-primary-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-midnight mb-12 text-center">
            Additional Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-midnight mb-4">
                Custom Itineraries
              </h3>
              <p className="text-midnight-600 mb-4">
                Let us create a personalized travel plan that matches your preferences and interests.
              </p>
              <button className="text-primary hover:text-primary-600 transition-colors">
                Learn More →
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-midnight mb-4">
                Group Tours
              </h3>
              <p className="text-midnight-600 mb-4">
                Join our small group tours for a social and cost-effective travel experience.
              </p>
              <button className="text-primary hover:text-primary-600 transition-colors">
                Learn More →
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-midnight mb-4">
                Travel Insurance
              </h3>
              <p className="text-midnight-600 mb-4">
                Protect your journey with our comprehensive travel insurance options.
              </p>
              <button className="text-primary hover:text-primary-600 transition-colors">
                Learn More →
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
