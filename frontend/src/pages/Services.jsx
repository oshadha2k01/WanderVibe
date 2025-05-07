import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Adventure Tours',
      description: "Experience thrilling adventures in the world's most exciting destinations.",
      image: 'https://www.bestoflanka.com/images/slider/best-things-to-do-in-sri-lanka/adventure-sri-lanka/01.jpg',
      features: [
        'Hiking & Trekking',
        'Water Sports',
        'Sri Lankan Wildlife Safaris',
        'Mountain Climbing',
      ],
    },
    {
      id: 2,
      title: 'Cultural Experiences',
      description: 'Immerse yourself in rich cultural traditions and local customs.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoAUFir0gTnPN2dde5x0ARn0uZJQvQLlGc7hJ0sZZ9orqUuQDNYiZWnO__7ZJhDO-6_4g&usqp=CAU',
      features: [
        'Local Festivals',
        'Traditional Workshops',
        'Historical Tours',
        'Sri Lankan Cultural Heritage',
      ],
    },
    {
      id: 3,
      title: 'Luxury Getaways',
      description: 'Indulge in premium travel experiences with top-tier accommodations.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0HhAPCJgy8UvnGCNfsTRyfWtDDk3vQ-j0tA&s',
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
      image: 'https://www.bestoflanka.com/images/family-adventure-tour-in-maldives.jpg',
      features: [
        'Kid-Friendly Activities',
        'Family Resorts',
        'Educational Tours',
        'Safe Adventures',
      ],
    },
    {
      id: 5,
      title: 'Sri Lanka Specials',
      description: 'Discover the beauty and culture of the Pearl of the Indian Ocean.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy5ewFBLTFL_lLDKr4lvfRQMr7tRVFY8e7Zg&s',
      features: [
        'Beach Retreats',
        'Ancient Temples',
        'Tea Plantation Tours',
        'Ayurvedic Wellness Experiences',
      ],
    },
    {
      id: 6,
      title: 'Wellness & Ayurveda Retreats',
      description: 'Rejuvenate your mind, body, and soul with traditional Sri Lankan healing practices.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxhOqb0egE6DwpMWTxrNGG1r9rqfq6RyIUhA&s',
      features: [
        'Authentic Ayurvedic Treatments',
        'Yoga & Meditation Sessions',
        'Spa & Wellness Centers',
        'Health-focused Cuisine',
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
    {
      id: 4,
      title: 'Local Sri Lankan Guides',
      description: 'Experienced local guides to enhance your Sri Lankan exploration.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-32 bg-midnight text-cloud">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0 overflow-hidden"
          style={{
            backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5kukFasaqOwbmYseHDQPoG9uaVS7uaML0CQ&s")',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            opacity: '0.7'
          }}
        >
          <div className="absolute inset-0 bg-midnight bg-opacity-60"></div>
        </div>
        
        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Our Services</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Discover our range of travel services designed to make your journey through Sri Lanka and beyond unforgettable.
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
          <h2 className="text-3xl font-bold mb-6">Ready to Plan Your Sri Lankan Adventure?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let us help you create the perfect Sri Lankan travel experience tailored to your preferences. Check our <Link to="/about" className="underline hover:text-cloud">About</Link> page to learn more about us or return <Link to="/" className="underline hover:text-cloud">Home</Link>.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="inline-block bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg transition-colors duration-300"
            >
              Contact Us Today
            </Link>
            <Link
              to="/"
              className="inline-block bg-midnight text-white hover:bg-opacity-90 font-semibold px-8 py-3 rounded-lg transition-colors duration-300"
            >
              Explore Home Page
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;