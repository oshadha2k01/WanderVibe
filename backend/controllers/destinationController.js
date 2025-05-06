const Destination = require('../models/Destination');

// Get all destinations
exports.getAllDestinations = async (req, res) => {
  try {
    const destinations = await Destination.find();
    
    res.status(200).json({
      status: 'success',
      results: destinations.length,
      data: {
        destinations
      }
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message
    });
  }
};

// Get featured destinations
exports.getFeaturedDestinations = async (req, res) => {
  try {
    const destinations = await Destination.find({ featured: true });
    
    res.status(200).json({
      status: 'success',
      results: destinations.length,
      data: {
        destinations
      }
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message
    });
  }
};

// Get a single destination
exports.getDestination = async (req, res) => {
  try {
    const destination = await Destination.findById(req.params.id);
    
    if (!destination) {
      return res.status(404).json({
        status: 'fail',
        message: 'No destination found with that ID'
      });
    }
    
    res.status(200).json({
      status: 'success',
      data: {
        destination
      }
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message
    });
  }
};

// Create a new destination
exports.createDestination = async (req, res) => {
  try {
    const newDestination = await Destination.create(req.body);
    
    res.status(201).json({
      status: 'success',
      data: {
        destination: newDestination
      }
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message
    });
  }
};

// Update a destination
exports.updateDestination = async (req, res) => {
  try {
    const destination = await Destination.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );
    
    if (!destination) {
      return res.status(404).json({
        status: 'fail',
        message: 'No destination found with that ID'
      });
    }
    
    res.status(200).json({
      status: 'success',
      data: {
        destination
      }
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message
    });
  }
};

// Delete a destination
exports.deleteDestination = async (req, res) => {
  try {
    const destination = await Destination.findByIdAndDelete(req.params.id);
    
    if (!destination) {
      return res.status(404).json({
        status: 'fail',
        message: 'No destination found with that ID'
      });
    }
    
    res.status(204).json({
      status: 'success',
      data: null
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message
    });
  }
};
