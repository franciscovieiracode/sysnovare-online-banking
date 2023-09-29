const mongoose = require('mongoose');

//The connection string should be in a .env file
//Due to the project goal there´s no need to that
const mongoURI = 'mongodb+srv://franciscovieiracode:123123123@cluster0.gumsczr.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp';

// Mongoose options (optional)
const mongooseOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

// Connect to MongoDB
mongoose.connect(mongoURI, mongooseOptions)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    });

module.exports = mongoose.connection;
