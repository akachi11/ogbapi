const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
    {
        firstname: { type: String, required: true },
        lastname: { type: String },
        username: { type: String, required: true, unique: true },
        phone: { type: String },
        email: { type: String, required: true, unique: true },
        password: { type: String },
        verified: { type: Boolean, default: false },
        vouchers: [
            {
                voucherId: { type: String }
            }
        ],
        isAdmin: { type: Boolean, default: false },
    },
    { timestamps: true }
)

module.exports = mongoose.model('User', UserSchema)