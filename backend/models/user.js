const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password:{

    }
   
})
const UserModel = mongoose.model('RegisterCollection', schema);

module.exports = UserModel;