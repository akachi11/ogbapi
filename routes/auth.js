const router = require('express').Router();
const User = require('../models/User')
const jwt = require('jsonwebtoken')

//REGISTER
router.post('/register', async (req, res) => {
    const newUser = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        username: req.body.username,
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.password,
        verified: req.body.verified,
        isAdmin: req.body.isAdmin
    });

    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser)
    } catch (err) {
        res.status(500).json(err)
    }
});

// GMAIL-LOGIN
router.post("/g-login", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email })

        res.status(200).json({ user })

    } catch (err) {
        res.status(500).json(err)
    }
})

//FORM-LOGIN
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email })
        if (!user) return res.status(200).json("Wrong Credentials")

        const Opassword = user.password

        if (Opassword !== req.body.password) {
            res.status(200).json("Wrong password");
            return;
        }

        const { password, ...others } = user._doc

        res.status(200).json({ ...others })

    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router;