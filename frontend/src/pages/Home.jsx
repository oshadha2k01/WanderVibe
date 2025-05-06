import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaCalendarAlt, FaUsers } from 'react-icons/fa';

const Home = () => {
  const featuredDestinations = [
    {
      id: 1,
      title: 'Tropical Paradise',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
      location: 'Maldives',
      price: '$999'
    },
    {
      id: 2,
      title: 'Mountain Adventure',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b',
      location: 'Swiss Alps',
      price: '$799'
    },
    {
      id: 3,
      title: 'Cultural Experience',
      image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9',
      location: 'Kyoto, Japan',
      price: '$899'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-primary-900">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-cloud max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Discover Your Next Adventure
            </h1>
            <p className="text-xl mb-8">
              Explore the world's most beautiful destinations with our curated travel experiences.
            </p>
            <Link 
              to="/services" 
              className="btn-primary inline-block"
            >
              Explore Tours
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-16 bg-cloud">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-midnight mb-8 text-center">
            Featured Destinations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDestinations.map((destination) => (
              <div key={destination.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src={destination.image} 
                  alt={destination.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-midnight mb-2">
                    {destination.title}
                  </h3>
                  <div className="flex items-center text-primary mb-4">
                    <FaMapMarkerAlt className="mr-2" />
                    <span>{destination.location}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-orange font-bold">{destination.price}</span>
                    <Link 
                      to={`/services/${destination.id}`}
                      className="text-primary hover:text-primary-600 transition-colors"
                    >
                      Learn More →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-primary-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-midnight mb-12 text-center">
            Why Choose WanderVibe?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary text-cloud w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaMapMarkerAlt size={24} />
              </div>
              <h3 className="text-xl font-semibold text-midnight mb-2">
                Expert Guides
              </h3>
              <p className="text-midnight-600">
                Our experienced guides ensure you have the best travel experience.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-cloud w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCalendarAlt size={24} />
              </div>
              <h3 className="text-xl font-semibold text-midnight mb-2">
                Flexible Planning
              </h3>
              <p className="text-midnight-600">
                Customize your trip according to your preferences and schedule.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-cloud w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUsers size={24} />
              </div>
              <h3 className="text-xl font-semibold text-midnight mb-2">
                Small Groups
              </h3>
              <p className="text-midnight-600">
                Enjoy personalized attention in our small group tours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-orange">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-cloud mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-cloud mb-8 max-w-2xl mx-auto">
            Join us for an unforgettable adventure. Book your tour today and create memories that will last a lifetime.
          </p>
          <Link 
            to="/contact" 
            className="bg-cloud text-orange px-8 py-3 rounded-md font-semibold hover:bg-cloud-100 transition-colors inline-block"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
