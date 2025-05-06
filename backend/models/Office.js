const mongoose = require('mongoose');

const officeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'An office must have a name'],
      trim: true
    },
    address: {
      type: String,
      required: [true, 'An office must have an address'],
      trim: true
    },
    phone: {
      type: String,
      required: [true, 'An office must have a phone number']
    },
    email: {
      type: String,
      required: [true, 'An office must have an email'],
      lowercase: true
    },
    hours: {
      type: String,
      required: [true, 'An office must have operating hours']
    },
    coordinates: {
      lat: {
        type: Number,
        required: [true, 'An office must have latitude coordinates']
      },
      lng: {
        type: Number,
        required: [true, 'An office must have longitude coordinates']
      }
    },
    isHeadOffice: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);

const Office = mongoose.model('Office', officeSchema);

module.exports = Office;
