const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:azerbaijan@cluster0.ewrjb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
const Schema = mongoose.Schema;


const BookSchema = new Schema({
    title : String,
    author: String,
    image: String,
    about: String
});

const bookdata = mongoose.model('bookdata',BookSchema);

module.exports = bookdata;