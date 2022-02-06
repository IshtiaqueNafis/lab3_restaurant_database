const Restrudants = require('../models/Restrudant');

exports.getRestaurantDetailsByCuisine = (req, res, next) => {
    try {
        console.log(Restrudants);
    } catch (e) {
          
    }
}

exports.getRestaurantDetailsByIdSort = (req, res, next) => {
    console.log(req.params.sortBy);

}
exports.getRestaurantDetailsByDelicatessen = (req, res, next) => {
    console.log(Restrudants);
    console.log(req);

}

