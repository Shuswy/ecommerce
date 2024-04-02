const { Schema, model } = require("mongoose");
const bcrypt = require('bcrypt');
const saltRounds = 10;

const userSchema = new Schema({
    name: String,
    email: {type: String, unique: true},
    password: String
});

userSchema.pre('save', function(next) {
    // 'this' now correctly refers to the document being saved
    const user = this;

    // Only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // Generate a salt and hash the password
    bcrypt.hash(user.password, saltRounds, (err, hash) => {
        if (err) return next(err);
        user.password = hash; // Set the hashed password
        next();
    });
});

const UserModel = model('User', userSchema); // It's common to use 'User' as the model name
module.exports = UserModel;
