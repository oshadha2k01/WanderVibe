const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'A service must have a title'],
      trim: true
    },
    description: {
      type: String,
      required: [true, 'A service must have a description'],
      trim: true
    },
    icon: {
      type: String,
      required: [true, 'A service must have an icon']
    },
    category: {
      type: String,
      required: [true, 'A service must have a category'],
      enum: ['tours', 'custom', 'accommodations', 'transport', 'adventure', 'beach', 'winter', 'cultural']
    },
    featured: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;
