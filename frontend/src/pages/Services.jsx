import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Adventure Tours',
      description: "Experience thrilling adventures in the world's most exciting destinations.",
      image: 'https://images.unsplash.com/photo-1501554728187-ce583db33af7',
      features: [
        'Hiking & Trekking',
        'Water Sports',
        'Wildlife Safaris',
        'Mountain Climbing',
      ],
    },
    {
      id: 2,
      title: 'Cultural Experiences',
      description: 'Immerse yourself in rich cultural traditions and local customs.',
      image: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60',
      features: [
        'Local Festivals',
        'Traditional Workshops',
        'Historical Tours',
        'Cultural Performances',
      ],
    },
    {
      id: 3,
      title: 'Luxury Getaways',
      description: 'Indulge in premium travel experiences with top-tier accommodations.',
      image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6',
      features: [
        '5-Star Hotels',
        'Private Tours',
        'Fine Dining',
        'VIP Services',
      ],
    },
    {
      id: 4,
      title: 'Family Vacations',
      description: 'Create lasting memories with specially curated family-friendly packages.',
      image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205',
      features: [
        'Kid-Friendly Activities',
        'Family Resorts',
        'Educational Tours',
        'Safe Adventures',
      ],
    },
  ];

  const additionalServices = [
    {
      id: 1,
      title: 'Travel Insurance',
      description: 'Comprehensive coverage for your peace of mind during travel.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      id: 2,
      title: 'Visa Assistance',
      description: 'Expert guidance through the visa application process.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      id: 3,
      title: 'Airport Transfers',
      description: 'Seamless transportation to and from airports worldwide.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-midnight text-cloud">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our range of travel services designed to make your journey unforgettable.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-cloud">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="relative h-64">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-midnight mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="inline-block mt-6 text-primary hover:text-secondary font-medium transition-colors"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-midnight mb-12">
            Additional Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service) => (
              <div key={service.id} className="bg-cloud p-8 rounded-lg text-center">
                <div className="text-primary mb-4 mx-auto">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-midnight mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Plan Your Trip?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let us help you create the perfect travel experience tailored to your preferences.
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

export default Services; 