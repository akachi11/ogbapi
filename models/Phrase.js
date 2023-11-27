const mongoose = require('mongoose')

const PhraseSchema = new mongoose.Schema(
    {
        phrase: { type: String, required: true }
    }
)

module.exports = mongoose.model('Phrase', PhraseSchema)