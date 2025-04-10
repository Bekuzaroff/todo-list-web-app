const mongoose = require('mongoose');
const validator = require('validator');
const mongoose_validator = require('mongoose-validator');




//mongoose validation extension for check matching passwords
//params*
    // the current validator's key - to use it by this key in other fields
    // function returns true/false if the passwords do match or not 
    // message to show in case of failed validation
mongoose_validator.extend(
    'pass_match',
    function(password){
        console.log(password)
        return password === this.confirm_password
    },
    'your passwords do not match'
)
//validator itself used by its key
const passwords_match = mongoose_validator({
    validator: 'pass_match'
})
/*making user schema with fields:
    email: string,
    password: string,
    confirm_password: string*/
const user_schema = mongoose.Schema({
    email: {
        type: String,
        unique: [true, 'email with this user already exists'],
        validate: validator.isEmail
    },
    password: {
        type: String,
        validate: passwords_match,
        minlength: 6
    },
    confirm_password: {
        type: String,
        minlength: 6
    },
});



const User = mongoose.model('user_model', user_schema);
module.exports = User;