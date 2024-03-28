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
        verified: req.body.verified
    });

    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser)
    } catch (err) {
        res.status(500).json(err)
    }
});

//LOGIN
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username })
        if (!user) return res.status(402).json("Wrong Credentials")

        const Opassword = user.password

        if (Opassword !== req.body.password) {
            res.status(401).json("Wrong password");
            return;
        }

        const accessToken = jwt.sign({
            id: user.id,
            isAdmin: user.isAdmin
        }, process.env.JWT_SEC,
            { expiresIn: "3d" }
        )

        const { password, ...others } = user._doc

        res.status(200).json({ ...others, accessToken })

    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router;