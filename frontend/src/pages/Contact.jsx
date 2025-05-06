import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import * as L from 'leaflet'; // Import Leaflet correctly
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFax, FaClock } from 'react-icons/fa';

// Fix for default marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  // Default position - Sri Lanka center coordinates
  const position = [7.8731, 80.7718]; 
  
  // Office locations
  const offices = [
    {
      id: 1,
      name: 'Colombo Head Office',
      address: '123 Galle Road, Colombo 03, Sri Lanka',
      phone: '+94 11 234 5678',
      email: 'colombo@wandervibe.com',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM',
      position: [6.9271, 79.8612]
    },
    {
      id: 2,
      name: 'Kandy Branch',
      address: '45 Temple Street, Kandy, Sri Lanka',
      phone: '+94 81 234 5678',
      email: 'kandy@wandervibe.com',
      hours: 'Mon-Fri: 9:00 AM - 5:30 PM',
      position: [7.2906, 80.6337]
    },
    {
      id: 3,
      name: 'Galle Branch',
      address: '78 Lighthouse Avenue, Galle Fort, Sri Lanka',
      phone: '+94 91 234 5678',
      email: 'galle@wandervibe.com',
      hours: 'Mon-Sat: 8:30 AM - 5:00 PM',
      position: [6.0328, 80.2170]
    }
  ];

  // FAQ data
  const faqs = [
    {
      id: 1,
      question: 'How do I book a tour with WanderVibe?',
      answer: 'You can book a tour through our website by selecting your desired package and following the booking process, or you can contact our team directly via phone or email for personalized assistance.'
    },
    {
      id: 2,
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, bank transfers, and in some cases, cash payments at our physical offices.'
    },
    {
      id: 3,
      question: 'Can I customize my travel package?',
      answer: "Absolutely! We specialize in creating customized travel experiences. Contact our team with your preferences, and we'll design a personalized itinerary just for you."
    },
    {
      id: 4,
      question: 'What is your cancellation policy?',
      answer: 'Our standard cancellation policy allows full refunds for cancellations made 30 days before departure, 50% refund for cancellations 15-29 days before departure, and no refunds for cancellations less than 15 days before departure. Some packages may have different terms.'
    }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission success
    setSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-cloud">
      {/* Hero Section */}
      <section className="relative h-[300px] bg-primary-900">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-cloud max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Contact Us
            </h1>
            <p className="text-xl">
              Get in touch with our travel experts
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="section-padding py-16">
        <div className="container-custom container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Have questions about our services or need help planning your trip? Fill out the form below and our team will get back to you as soon as possible.
              </p>
              
              {submitted ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                  <p>Thank you for your message! We'll get back to you soon.</p>
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-midnight font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-cloud focus:ring-2 focus:ring-primary focus:border-primary"
                    placeholder="John Doe"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-midnight font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-cloud focus:ring-2 focus:ring-primary focus:border-primary"
                    placeholder="john@example.com"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-midnight font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-cloud focus:ring-2 focus:ring-primary focus:border-primary"
                    placeholder="Inquiry about Maldives Tour"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-midnight font-medium mb-2">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-cloud focus:ring-2 focus:ring-primary focus:border-primary"
                    placeholder="Tell us about your travel plans or questions..."
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="bg-primary hover:bg-primary-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <p className="text-gray-600 mb-8">
                You can reach out to us through any of the following channels or visit one of our offices in person.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <FaPhone className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Phone</h3>
                    <p className="text-gray-600">+94 11 234 5678 (Main)</p>
                    <p className="text-gray-600">+94 76 123 4567 (Customer Support)</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <FaEnvelope className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <p className="text-gray-600">info@wandervibe.com</p>
                    <p className="text-gray-600">support@wandervibe.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <FaMapMarkerAlt className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Main Office</h3>
                    <p className="text-gray-600">123 Galle Road, Colombo 03, Sri Lanka</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <FaFax className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Fax</h3>
                    <p className="text-gray-600">+94 11 234 5679</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <FaClock className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gray-50 py-12">
        <div className="container-custom container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Locations</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Visit us at one of our offices across Sri Lanka for personalized travel planning services.
            </p>
          </div>
          
          <div className="h-[450px] rounded-lg overflow-hidden shadow-md">
            <MapContainer center={position} zoom={8} style={{ height: '100%', width: '100%' }}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {offices.map(office => (
                <Marker key={office.id} position={office.position}>
                  <Popup>
                    <div>
                      <h3 className="font-bold">{office.name}</h3>
                      <p>{office.address}</p>
                      <p>Phone: {office.phone}</p>
                      <p>Hours: {office.hours}</p>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {offices.map(office => (
              <div key={office.id} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">{office.name}</h3>
                <div className="space-y-3">
                  <p className="flex items-start">
                    <FaMapMarkerAlt className="text-blue-600 mr-2 mt-1" />
                    <span>{office.address}</span>
                  </p>
                  <p className="flex items-center">
                    <FaPhone className="text-blue-600 mr-2" />
                    <span>{office.phone}</span>
                  </p>
                  <p className="flex items-center">
                    <FaEnvelope className="text-blue-600 mr-2" />
                    <span>{office.email}</span>
                  </p>
                  <p className="flex items-center">
                    <FaClock className="text-blue-600 mr-2" />
                    <span>{office.hours}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding py-16">
        <div className="container-custom container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our services and booking process.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map(faq => (
              <div key={faq.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer p-6">
                    <h3 className="text-lg font-semibold">{faq.question}</h3>
                    <span className="text-blue-600 group-open:rotate-180 transition-transform">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </details>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Still have questions? We're here to help!</p>
            <a href="mailto:info@wandervibe.com" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
              Email Our Support Team
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container-custom container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Contact us today to begin planning your dream vacation with our expert travel team.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+94112345678" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg text-lg transition duration-300">
              Call Us Now
            </a>
            <a href="#" onClick={(e) => {e.preventDefault(); document.querySelector('form').scrollIntoView({ behavior: 'smooth' });}} className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-3 rounded-lg text-lg transition duration-300">
              Send Message
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
