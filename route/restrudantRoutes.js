const express = require('express');
const {getRestaurantDetailsByCuisine, getRestaurantDetailsByIdSort, getRestaurantDetailsByDelicatessen} = require("../controller/restrudantController");
const router = express.Router();

router.route('/cuisine/:details').get(getRestaurantDetailsByCuisine)
router.route('/:sortBy').get(getRestaurantDetailsByIdSort);
router.route('/Delicatessen').get(getRestaurantDetailsByDelicatessen);



module.exports = router;