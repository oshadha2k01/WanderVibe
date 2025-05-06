import { Link } from 'react-router-dom';

const Home = () => {
  const featuredDestinations = [
    {
      id: 1,
      name: 'Sigiriya',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVUYl_vzzsPl-Lpg0i7cDuNbsTds-jdEYlJg&s',
      description: 'Ancient rock fortress and UNESCO World Heritage site with stunning frescoes and panoramic views.',
    },
    {
      id: 2,
      name: 'Galle Fort',
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/68/d4/01/caption.jpg?w=1200&h=-1&s=1',
      description: 'Historic Portuguese and Dutch colonial fort with charming streets and coastal views.',
    },
    {
      id: 3,
      name: 'Ella',
      image: 'https://media.istockphoto.com/id/1406974336/photo/train-passing-over-nine-arch-bridge.jpg?s=612x612&w=0&k=20&c=vcgZUUaLWpzdFg9Rw4hUTx5g1evILmY-CYtCe1G7SPc=',
      description: 'Scenic hill country town with breathtaking views, waterfalls, and hiking trails.',
    },
    {
      id: 4,
      name: 'Kandy',
      image: 'https://media.istockphoto.com/id/185277804/photo/photo-of-lake-in-kandy-sri-lanka.jpg?s=612x612&w=0&k=20&c=CnKH0IX1vdFf79wWQ9XW6TcD8srg7D-o6eCgjZuHvxw=',
      description: 'Cultural capital with the Temple of the Sacred Tooth Relic and beautiful lake.',
    },
    {
      id: 5,
      name: 'Yala National Park',
      image: 'https://media.istockphoto.com/id/534789901/photo/elephant.jpg?s=612x612&w=0&k=20&c=RenAVA9qVsmH5gdHuvFi6qRUdkfJ_7g8f_ob8UCuNc0=',
      description: 'Famous wildlife sanctuary known for leopards, elephants, and diverse bird species.',
    },
    {
      id: 6,
      name: 'Mirissa',
      image: 'https://media.istockphoto.com/id/1838183180/photo/mirissa-beach-sri-lanka.jpg?s=612x612&w=0&k=20&c=1sshO6oVfJtCLZnPtmW4rAqNzlcAOTbtaCdVC7mkOsQ=',
      description: 'Paradise beach destination with whale watching and stunning sunsets.',
    }
  ];

  const popularExperiences = [
    {
      id: 1,
      title: 'Wildlife Safari',
      image: 'https://www.lankatourexperts.com/wp-content/uploads/2023/07/Sri-Lanka-Wildlife-Safari.webp',
      description: 'Experience the thrill of spotting elephants, leopards, and exotic birds in their natural habitat.',
    },
    {
      id: 2,
      title: 'Tea Plantation Tour',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPChyNK9-cY9pfySMzBiYxRI2gi0AM56qFLA&s',
      description: 'Visit world-famous tea estates and learn about the art of tea making.',
    },
    {
      id: 3,
      title: 'Beach Paradise',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE81h6bVYrVPqUv2bkrOXR51OnhrmOMvPX3g&s',
      description: 'Relax on pristine beaches with crystal clear waters and golden sands.',
    },
    {
      id: 4,
      title: 'Cultural Shows',
      image: 'https://www.pearldestinations.com/images/cultural-show-sri-lanka.jpg',
      description: 'Experience traditional dance performances and cultural shows.',
    }
  ];

  const culturalHighlights = [
    {
      id: 1,
      title: 'Traditional Cuisine',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMMyZOyR5ShlXLCS3w5Gzha7KrbblRKv5vOw&s',
      description: 'Savor authentic Sri Lankan dishes like rice and curry, hoppers, and kottu roti.',
    },
    {
      id: 2,
      title: 'Ayurvedic Wellness',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFMK03P4FTfeSwuiVAQWSFC_E2DLZC7YJOZA&s',
      description: 'Experience ancient healing traditions and wellness treatments.',
    },
    {
      id: 3,
      title: 'Local Festivals',
      image: 'https://nexttravelsrilanka.com/wp-content/uploads/2020/10/Three-tuskers-clad-in-illuminated-red-costumes-standing-in-front-of-the-illuminated-white-building-complex-1.jpg',
      description: 'Participate in vibrant festivals like the Kandy Esala Perahera.',
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://thumbs.dreamstime.com/b/silhouettes-traditional-sri-lankan-stilt-fishermen-stormy-koggala-lanka-fishing-method-fishing-98408974.jpg"
            alt="Sri Lanka Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Discover the Pearl of the Indian Ocean
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Experience the magic of Sri Lanka with our expert guides
            </p>
            <Link
              to="/services"
              className="inline-block bg-primary hover:bg-secondary text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300"
            >
              Start Your Journey
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-20 bg-cloud">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-midnight mb-12">
            Featured Destinations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredDestinations.map((destination) => (
              <div
                key={destination.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
              >
                <div className="relative h-64">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-midnight mb-2">
                    {destination.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{destination.description}</p>
                  <Link
                    to="/services"
                    className="text-primary hover:text-secondary font-medium transition-colors"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Experiences */}
      <section className="py-20 bg-midnight text-cloud">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Popular Experiences
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {popularExperiences.map((experience) => (
              <div key={experience.id} className="text-center">
                <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
                  <img
                    src={experience.image}
                    alt={experience.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-4">{experience.title}</h3>
                <p className="text-gray-300">{experience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Highlights */}
      <section className="py-20 bg-cloud">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-midnight mb-12">
            Cultural Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {culturalHighlights.map((highlight) => (
              <div key={highlight.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="relative h-64">
                  <img
                    src={highlight.image}
                    alt={highlight.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-midnight mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600">{highlight.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-midnight text-cloud">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose WanderVibe?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Local Expertise</h3>
              <p className="text-gray-300">
                Our guides are locals who know every hidden gem in Sri Lanka.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Best Price Guarantee</h3>
              <p className="text-gray-300">
                We offer competitive prices and ensure the best value for your money.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Customized Tours</h3>
              <p className="text-gray-300">
                We create personalized itineraries based on your preferences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Explore Sri Lanka?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of happy travelers who have experienced the magic of Sri Lanka with us.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg transition-colors duration-300"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home; 