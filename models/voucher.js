const mongoose = require('mongoose')

const VoucherSchema = new mongoose.Schema(
    {
        voucherId: { type: String, required: true },
        voucherValue: { type: Number, required: true },
        voucherAbove: { type: Number, required: true },
        voucherStatus: { type: String, required: true },
        voucherExpiry: { type: String, required: true }
    },
    { timestamps: true }
)

module.exports = mongoose.model('Voucher', VoucherSchema)