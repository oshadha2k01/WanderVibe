const express = require('express');
const packageController = require('../controllers/packageController');
const authController = require('../controllers/authController');

const router = express.Router();

router
  .route('/')
  .get(packageController.getAllPackages)
  .post(
    authController.protect,
    authController.restrictTo('admin'),
    packageController.createPackage
  );

router.get('/featured', packageController.getFeaturedPackages);

router
  .route('/:id')
  .get(packageController.getPackage)
  .patch(
    authController.protect,
    authController.restrictTo('admin'),
    packageController.updatePackage
  )
  .delete(
    authController.protect,
    authController.restrictTo('admin'),
    packageController.deletePackage
  );

module.exports = router;
