const Phrase = require('../models/Phrase');

const router = require('express').Router();

//CREATE

router.post("/", async (req, res) => {
    const newPhrase = new Phrase(req.body)

    try {
        const savedPhrase = await newPhrase.save();
        res.status(200).json(savedPhrase)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router;