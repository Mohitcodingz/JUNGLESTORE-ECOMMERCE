// we will create the server here not routes to acquire the .env and using the config() this is a function inside of the dotenv so it can process env port.
const app = require('./app');
const dotenv = require('dotenv');
const connectDB = require('./config/db')
dotenv.config();
connectDB();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`The server is running on http://localhost:${PORT}`)
})