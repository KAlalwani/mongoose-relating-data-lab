const mongoose = require('mongoose')
const bcrypt = require('bcryptjs');
    SALT_WORK_FACTOR = 10;
// Schema
const userSchema = mongoose.Schema({
    username:{
        type: String,
        unique: true,
        required: true,
        minLength: 3,
        maxLength: 20

    },
    password:{
        type: String,
        required: true,
        minLength: 5

    },
}, {timestamps: true})

// userSchema.pre('save', function(next) {
//     var user = this;

//     // only hash the password if it has been modified (or is new)
//     if (!user.isModified('password')) return next();

//     // generate a salt
//     bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
//         if (err) return next(err);

//         // hash the password using our new salt
//         bcrypt.hash(user.password, salt, function(err, hash) {
//             if (err) return next(err);
//             // override the cleartext password with the hashed one
//             user.password = hash;
//             next();
//         });
//     });
// });
     
// userSchema.pre('save', async function() {
//     // Only hash the password if it has been modified
//     if (!this.isModified('password')) return;

//     // Generate salt
//     const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);

//     // Hash password
//     this.password = await bcrypt.hash(this.password, salt);
// });

// userSchema.methods.comparePassword = function(candidatePassword, cb) {
//     bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
//         if (err) return cb(err);
//         cb(null, isMatch);
//     });
// };

// userSchema.methods.comparePassword = async function(candidatePassword) {
//     return await bcrypt.compare(candidatePassword, this.password);
// };
  
//  Model
const User = mongoose.model('User', userSchema)

// Export Model

module.exports = User