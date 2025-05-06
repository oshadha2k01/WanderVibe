const express = require('express');
const destinationController = require('../controllers/destinationController');
const authController = require('../controllers/authController');

const router = express.Router();

router
  .route('/')
  .get(destinationController.getAllDestinations)
  .post(
    authController.protect,
    authController.restrictTo('admin'),
    destinationController.createDestination
  );

router.get('/featured', destinationController.getFeaturedDestinations);

router
  .route('/:id')
  .get(destinationController.getDestination)
  .patch(
    authController.protect,
    authController.restrictTo('admin'),
    destinationController.updateDestination
  )
  .delete(
    authController.protect,
    authController.restrictTo('admin'),
    destinationController.deleteDestination
  );

module.exports = router;
