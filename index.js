const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./Routes/users');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
 
// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error(err));

// Middleware
app.use(express.json()); // Parse incoming JSON requests (optional)

// Routes
app.use('/api/users', userRoutes);

app.listen(port, () => console.log(`Server listening on port ${port}`));
