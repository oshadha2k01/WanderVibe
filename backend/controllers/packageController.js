const Package = require('../models/Package');

// Get all packages
exports.getAllPackages = async (req, res) => {
  try {
    // Build query
    const queryObj = { ...req.query };
    const excludedFields = ['page', 'sort', 'limit', 'fields'];
    excludedFields.forEach(el => delete queryObj[el]);
    
    let query = Package.find(queryObj);
    
    // Populate destination
    query = query.populate('destination');
    
    // Execute query
    const packages = await query;
    
    res.status(200).json({
      status: 'success',
      results: packages.length,
      data: {
        packages
      }
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message
    });
  }
};

// Get featured packages
exports.getFeaturedPackages = async (req, res) => {
  try {
    const packages = await Package.find({ featured: true })
      .populate('destination');
    
    res.status(200).json({
      status: 'success',
      results: packages.length,
      data: {
        packages
      }
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message
    });
  }
};

// Get a single package
exports.getPackage = async (req, res) => {
  try {
    const package = await Package.findById(req.params.id)
      .populate('destination');
    
    if (!package) {
      return res.status(404).json({
        status: 'fail',
        message: 'No package found with that ID'
      });
    }
    
    res.status(200).json({
      status: 'success',
      data: {
        package
      }
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message
    });
  }
};

// Create a new package
exports.createPackage = async (req, res) => {
  try {
    const newPackage = await Package.create(req.body);
    
    res.status(201).json({
      status: 'success',
      data: {
        package: newPackage
      }
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message
    });
  }
};

// Update a package
exports.updatePackage = async (req, res) => {
  try {
    const package = await Package.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    
    if (!package) {
      return res.status(404).json({
        status: 'fail',
        message: 'No package found with that ID'
      });
    }
    
    res.status(200).json({
      status: 'success',
      data: {
        package
      }
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message
    });
  }
};

// Delete a package
exports.deletePackage = async (req, res) => {
  try {
    const package = await Package.findByIdAndDelete(req.params.id);
    
    if (!package) {
      return res.status(404).json({
        status: 'fail',
        message: 'No package found with that ID'
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
