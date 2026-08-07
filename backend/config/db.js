const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
async function connectDB() {
    try {
        await mongoose.connect((`${process.env.MONGODB_URL}/${process.env.MONGODB_DBNAME}`))
        console.log('The Local Database connected successfully!')
    }
    catch (error) {
        console.log("❌ MongoDB Connection Failed");
        console.log(error.message);
    }
}
module.exports = connectDB;