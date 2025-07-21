const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// MongoDB Connection with Database Name
mongoose.connect('mongodb://127.0.0.1:27017/mspwebsite', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(async () => {
    console.log('MongoDB Connected 🚀');

    // Create a dummy collection/document to force database creation
    const Dummy = mongoose.model('dummy', new mongoose.Schema({
        createdAt: { type: Date, default: Date.now }
    }));

    await Dummy.create({});  // Inserting a single dummy document
    console.log('Database and dummy collection created 🎉');

})
.catch((err) => console.error('MongoDB Error:', err));

// Example Route
app.get('/', (req, res) => {
    res.send('MSP Backend is Running 🎉');
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
