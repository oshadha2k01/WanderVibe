import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api from '../config/api';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+94',
    phone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeLocation, setActiveLocation] = useState('Head Office');

  const countryCodes = [
    { code: '+94', country: 'Sri Lanka' },
    { code: '+1', country: 'United States' },
    { code: '+44', country: 'United Kingdom' },
    { code: '+91', country: 'India' },
    { code: '+61', country: 'Australia' },
  ];

  const contactInfo = [
    {
      id: 1,
      title: 'Head Office',
      address: '123 Galle Road, Colombo 03, Sri Lanka',
      phone: '+94 11 234 5678',
      email: 'info@wandervibe.com',
      hours: 'Monday - Friday: 9:00 AM - 6:00 PM',
      coordinates: '6.927079,79.861243',
      city: 'Colombo',
    },
    {
      id: 2,
      title: 'Kandy Branch',
      address: '45 Peradeniya Road, Kandy, Sri Lanka',
      phone: '+94 81 234 5678',
      email: 'kandy@wandervibe.com',
      hours: 'Monday - Saturday: 9:00 AM - 5:00 PM',
      coordinates: '7.290572,80.633726',
      city: 'Kandy',
    },
    {
      id: 3,
      title: 'Galle Branch',
      address: '78 Church Street, Galle Fort, Sri Lanka',
      phone: '+94 91 234 5678',
      email: 'galle@wandervibe.com',
      hours: 'Monday - Saturday: 9:00 AM - 5:00 PM',
      coordinates: '6.0328,80.2168',
      city: 'Galle',
    },
  ];

  // Validation rules
  const validateField = (name, value) => {
    let error = '';

    switch (name) {
      case 'name':
        if (!value) {
          error = 'Name is required';
        } else if (value.length < 2) {
          error = 'Name must be at least 2 characters long';
        } else if (!/^[a-zA-Z\s]+$/.test(value)) {
          error = 'Name can only contain letters and spaces';
        }
        break;

      case 'email':
        if (!value) {
          error = 'Email is required';
        } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
          error = 'Please enter a valid email address';
        }
        break;

      case 'phone':
        if (!value) {
          error = 'Phone number is required';
        } else if (!/^[0-9]{7,12}$/.test(value)) {
          error = 'Phone number must be 7-12 digits';
        }
        break;

      case 'subject':
        if (!value) {
          error = 'Subject is required';
        } else if (value.length < 3) {
          error = 'Subject must be at least 3 characters long';
        } else if (!/^[a-zA-Z\s]+$/.test(value)) {
          error = 'Subject can only contain letters and spaces';
        }
        break;

      case 'message':
        if (!value) {
          error = 'Message is required';
        } else if (value.length < 10) {
          error = 'Message must be at least 10 characters long';
        }
        break;

      default:
        break;
    }

    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'name' || name === 'subject') {
      if (value === '' || /^[a-zA-Z\s]*$/.test(value)) {
        setFormData(prev => ({
          ...prev,
          [name]: value
        }));
      }
    } else if (name === 'phone') {
      if (value === '' || /^[0-9]*$/.test(value)) {
        setFormData(prev => ({
          ...prev,
          [name]: value
        }));
      }
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }

    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    Object.keys(formData).forEach(field => {
      if (field !== 'countryCode') {
        const error = validateField(field, formData[field]);
        newErrors[field] = error;
        if (error) isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error('Please fix the errors in the form');
      return;
    }

    setIsSubmitting(true);

    try {
      // Format phone with country code
      const formattedPhone = formData.phone ? `${formData.countryCode}${formData.phone}` : '';
      
      const payload = {
        ...formData,
        phone: formattedPhone,
        id: Date.now(), // Add a unique ID
        date: new Date().toISOString() // Add submission date
      };
      
      console.log('Saving contact form data to localStorage:', payload);

      // Get existing contact submissions or initialize empty array
      const existingSubmissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
      
      // Add new submission
      existingSubmissions.push(payload);
      
      // Save updated array back to localStorage
      localStorage.setItem('contactSubmissions', JSON.stringify(existingSubmissions));
      
      // Success message
      toast.success('Message saved successfully!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      setTimeout(() => {
        toast.info('Our team will contact you soon!', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }, 3000);

      // Reset form
      setFormData({
        name: '',
        email: '',
        countryCode: '+94',
        phone: '',
        subject: '',
        message: '',
      });
      
      setErrors({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('Error saving form data:', error);
      
      toast.error('Failed to save message. Please try again.', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <ToastContainer />
      {/* Hero Section */}
      <section className="relative h-[40vh]">
        <div className="absolute inset-0">
          <img
            src="https://res.cloudinary.com/comtech/image/upload/v1490467981/vslt/banner-slide4.jpg"
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-200">
              Get in touch with our team of Sri Lanka travel experts
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-cloud">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((info) => (
              <div
                key={info.id}
                className="bg-white rounded-lg p-8 shadow-lg text-center"
              >
                <h3 className="text-xl font-semibold text-midnight mb-4">
                  {info.title}
                </h3>
                <div className="space-y-4">
                  <p className="text-gray-600">{info.address}</p>
                  <p className="text-primary font-medium">{info.phone}</p>
                  <p className="text-primary font-medium">{info.email}</p>
                  <p className="text-gray-500 text-sm">{info.hours}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-midnight mb-6">
              Send Us a Message
            </h2>
            <p className="text-gray-600">
              Have questions about our tours or need help planning your Sri Lanka adventure? We're here to help!
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="flex">
                  <select
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleChange}
                    className={`w-24 px-2 py-2 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-primary focus:border-primary bg-white text-gray-700 text-sm appearance-none ${
                      errors.phone ? 'border-red-500' : ''
                    }`}
                  >
                    {countryCodes.map(({ code, country }) => (
                      <option key={code} value={code}>
                        {code}
                      </option>
                    ))}
                  </select>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`flex-1 px-4 py-2 border border-l-0 rounded-r-lg focus:ring-2 focus:ring-primary focus:border-primary ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="1234567890"
                  />
                </div>
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary ${
                    errors.subject ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
                )}
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Your Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary ${
                  errors.message ? 'border-red-500' : 'border-gray-300'
                }`}
              ></textarea>
              {errors.message && (
                <p className="mt-1 text-sm text-red-500">{errors.message}</p>
              )}
            </div>
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`inline-block bg-primary hover:bg-secondary text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300 ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-cloud">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-midnight mb-6">
              Find Us
            </h2>
            <p className="text-gray-600">
              Visit our offices across Sri Lanka
            </p>
          </div>
          <div className="flex justify-center space-x-4 mb-8">
            {contactInfo.map((info) => (
              <button
                key={info.id}
                onClick={() => setActiveLocation(info.title)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors duration-300 ${
                  activeLocation === info.title
                    ? 'bg-primary text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {info.title}
              </button>
            ))}
          </div>
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15842.92393699508!2d${
                contactInfo.find(info => info.title === activeLocation)?.coordinates.split(',')[1]
              }!3d${
                contactInfo.find(info => info.title === activeLocation)?.coordinates.split(',')[0]
              }!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z${
                contactInfo.find(info => info.title === activeLocation)?.city
              }%20${contactInfo.find(info => info.title === activeLocation)?.title}!5e0!3m2!1sen!2sus!4v1647881234567!5m2!1sen!2sus`}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;