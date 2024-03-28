const mongoose = require('mongoose')

const UserVerificationSchema = new mongoose.Schema(
    {
        userId: { type: String, required: true },
        uniqueString: { type: String, required: true },
        createdAt: { type: Date },
        expiresAt: { type: Date }
    },
    { timestamps: true }
)

module.exports = mongoose.model('UserVerification', UserVerificationSchema)