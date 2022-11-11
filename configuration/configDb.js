const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log('DATABASE CONECTED')
})
.catch((err) => {
    console.log('DATABASE CONECTION FAILED',err);
    process.exit(1);
});