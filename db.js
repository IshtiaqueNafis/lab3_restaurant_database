const mongoose = require('mongoose');


const connectDB = async () =>{
    await mongoose.connect(`mongodb+srv://nafu:nafu123@cluster0.hxiiq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {useNewUrlParser: true , useUnifiedTopology: true});
    console.log(`mongodb Connected`)
}

module.exports = connectDB;