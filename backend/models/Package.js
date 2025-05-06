const mongoose = require('mongoose');

const packageSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'A package must have a title'],
      trim: true
    },
    description: {
      type: String,
      required: [true, 'A package must have a description'],
      trim: true
    },
    image: {
      type: String,
      required: [true, 'A package must have an image']
    },
    price: {
      type: Number,
      required: [true, 'A package must have a price']
    },
    duration: {
      type: String,
      required: [true, 'A package must have a duration']
    },
    destination: {
      type: mongoose.Schema.ObjectId,
      ref: 'Destination'
    },
    featured: {
      type: Boolean,
      default: false
    },
    tags: [String],
    inclusions: [String],
    itinerary: [
      {
        day: Number,
        title: String,
        description: String
      }
    ]
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

// Virtual populate
packageSchema.virtual('reviews', {
  ref: 'Review',
  foreignField: 'package',
  localField: '_id'
});

const Package = mongoose.model('Package', packageSchema);

module.exports = Package;
