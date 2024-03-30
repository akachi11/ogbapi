const User = require('../models/User');
const UserVerification = require('../models/UserVerification');
// const { verifyToken, verifyAndAuthToken, verifyAdminAuthToken } = require('./verifyToken');

const router = require('express').Router();

router.put("/:id", async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body
            },
            { new: true }
        );
        res.status(200).json(updatedUser)
    } catch (err) {
        res.status(500).json(err);
    }
})

//DELETE 
router.delete("/:id", async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("User deleted")
    } catch (err) {
        res.status(500).json(err)
    }
});

//GET USER
router.get("/find/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        res.status(200).json(user)
    } catch (err) {
        res.status(500).json(err)
    }
});

// FORM CHECK
router.post("/find-user", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email })
        if (user == null) {
            const next = await User.findOne({ username: req.body.username })
            if (next !== null) {
                res.status(200).json({ 'Match': 'Username' })
            } else {
                res.status(200).json({ 'Match': next })
            }
        } else {
            res.status(200).json({ 'Match': 'Mail' })
        }

    } catch (err) {
        res.status(500).json(err)
    }
})

//GET ALL USERS
router.get("/find-all", async (req, res) => {
    const query = req.query.new
    try {
        const users = query
            ? await User.find().sort({ _id: -1 }).limit(1)
            : await User.find();
        res.status(200).json(users)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router;