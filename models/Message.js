const mongoose = require('mongoose')

const MessageSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        products: [
            {
                productId: {
                    type: String
                },
                quantity: {
                    type: Number,
                    default: 1
                }
            }
        ],
        orderId: { type: String, required: true },
        body: { type: String, required: true },
        status: { type: String, default: 'Pending' }
    },
    { timestamps: true }
)

module.exports = mongoose.model('Message', MessageSchema)