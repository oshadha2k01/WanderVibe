const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Models
const Destination = require('./models/Destination');
const Service = require('./models/Service');
const Package = require('./models/Package');
const Office = require('./models/Office');
const User = require('./models/User');

// Load env vars
dotenv.config();

// Connect to DB
connectDB();

// Sample data
const destinations = [
  {
    name: 'Maldives',
    image: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZGl2ZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
    description: 'Crystal clear waters and overwater bungalows',
    featured: true,
    country: 'Maldives',
    continent: 'Asia'
  },
  {
    name: 'Santorini, Greece',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2FudG9yaW5pfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
    description: 'White-washed buildings with stunning Aegean Sea views',
    featured: true,
    country: 'Greece',
    continent: 'Europe'
  },
  {
    name: 'Bali, Indonesia',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmFsaXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    description: 'Lush landscapes, temples, and vibrant culture',
    featured: true,
    country: 'Indonesia',
    continent: 'Asia'
  },
  {
    name: 'Kyoto, Japan',
    image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8a3lvdG98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
    description: 'Traditional temples, gardens and rich cultural heritage',
    featured: true,
    country: 'Japan',
    continent: 'Asia'
  }
];

const services = [
  {
    title: 'Guided Tours',
    description: "Expert-led tours to the world's most fascinating destinations, with insider knowledge and exclusive access.",
    icon: 'FaRoute',
    category: 'tours'
  },
  {
    title: 'Customized Itineraries',
    description: 'Personalized travel plans tailored to your interests, timeline, and budget for a truly unique experience.',
    icon: 'FaGlobe',
    category: 'custom'
  },
  {
    title: 'Luxury Accommodations',
    description: 'Premium hotels, resorts, and unique stays that offer comfort, character, and exceptional service.',
    icon: 'FaHotel',
    category: 'accommodations'
  },
  {
    title: 'Transportation Services',
    description: 'Seamless transportation arrangements including flights, private transfers, and local transport options.',
    icon: 'FaPlaneDeparture',
    category: 'transport'
  },
  {
    title: 'Adventure Expeditions',
    description: 'Thrilling adventures for adrenaline seekers, from trekking to whitewater rafting and wildlife safaris.',
    icon: 'FaHiking',
    category: 'adventure'
  },
  {
    title: 'Beach Retreats',
    description: "Relaxing getaways to the world's most beautiful beaches with premium amenities and activities.",
    icon: 'FaWater',
    category: 'beach'
  },
  {
    title: 'Winter Escapes',
    description: 'Magical winter destinations featuring skiing, snowboarding, and cozy mountain retreats.',
    icon: 'FaSnowflake',
    category: 'winter'
  },
  {
    title: 'Cultural Immersions',
    description: 'Deep cultural experiences that connect you with local traditions, cuisines, and authentic ways of life.',
    icon: 'FaSun',
    category: 'cultural'
  }
];

const offices = [
  {
    name: 'Colombo Head Office',
    address: '123 Galle Road, Colombo 03, Sri Lanka',
    phone: '+94 11 234 5678',
    email: 'colombo@wandervibe.com',
    hours: 'Mon-Fri: 9:00 AM - 6:00 PM',
    coordinates: {
      lat: 6.9271,
      lng: 79.8612
    },
    isHeadOffice: true
  },
  {
    name: 'Kandy Branch',
    address: '45 Temple Street, Kandy, Sri Lanka',
    phone: '+94 81 234 5678',
    email: 'kandy@wandervibe.com',
    hours: 'Mon-Fri: 9:00 AM - 5:30 PM',
    coordinates: {
      lat: 7.2906,
      lng: 80.6337
    },
    isHeadOffice: false
  },
  {
    name: 'Galle Branch',
    address: '78 Lighthouse Avenue, Galle Fort, Sri Lanka',
    phone: '+94 91 234 5678',
    email: 'galle@wandervibe.com',
    hours: 'Mon-Sat: 8:30 AM - 5:00 PM',
    coordinates: {
      lat: 6.0328,
      lng: 80.2170
    },
    isHeadOffice: false
  }
];

// Import data into DB
const importData = async () => {
  try {
    // Clear existing data
    await Destination.deleteMany();
    await Service.deleteMany();
    await Package.deleteMany();
    await Office.deleteMany();
    
    console.log('Data cleared...');
    
    // Import new data
    await Destination.insertMany(destinations);
    await Service.insertMany(services);
    await Office.insertMany(offices);
    
    // Create admin user if it doesn't exist
    const adminExists = await User.findOne({ email: 'admin@wandervibe.com' });
    if (!adminExists) {
      await User.create({
        name: 'Admin User',
        email: 'admin@wandervibe.com',
        password: 'admin123',
        role: 'admin'
      });
    }
    
    console.log('Data imported successfully!');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

// Delete data from DB
const deleteData = async () => {
  try {
    await Destination.deleteMany();
    await Service.deleteMany();
    await Package.deleteMany();
    await Office.deleteMany();
    
    console.log('Data destroyed successfully!');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

// Command line arg processing
if (process.argv[2] === '-i') {
  importData();
} else if (process.argv[2] === '-d') {
  deleteData();
} else {
  console.log('Please provide proper command: -i (import) or -d (delete)');
  process.exit();
}
