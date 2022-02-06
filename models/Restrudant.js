const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RestaurantsSchema = new Schema({
    address: {
        building: Number,
        street: String,
        zipcode: Number

    },
    city: String,
    cuisine: String,
    name: String,
    restaurant_id: Number
});
exports.modules = mongoose.model('Restaurant', RestaurantsSchema);