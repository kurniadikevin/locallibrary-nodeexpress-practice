const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//schema content
const Genre = new Schema({
    name : { type: String, require: true,
             minLength : 3 , maxLength : 100}
})

// Virtual genre url
Genre.virtual("url").get(function(){
 return `/catalog/genre/${this._id}`;
});

// Export model
module.exports = mongoose.model("Genre", Genre);