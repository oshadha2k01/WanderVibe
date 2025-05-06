const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'A destination must have a name'],
      trim: true,
      maxlength: [50, 'A destination name cannot be more than 50 characters']
    },
    image: {
      type: String,
      required: [true, 'A destination must have an image']
    },
    description: {
      type: String,
      required: [true, 'A destination must have a description'],
      trim: true
    },
    featured: {
      type: Boolean,
      default: false
    },
    country: {
      type: String,
      required: [true, 'A destination must have a country']
    },
    continent: {
      type: String
    }
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

const Destination = mongoose.model('Destination', destinationSchema);

module.exports = Destination;
