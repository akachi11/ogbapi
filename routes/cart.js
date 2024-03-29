const Cart = require('../models/Cart');
// const {
//     verifyToken,
//     verifyAndAuthToken,
//     verifyAdminAuthToken
// } = require('./verifyToken');

const router = require('express').Router();

//CREATE

router.post("/", async (req, res) => {
    const newCart = new Product(req.body)

    try {
        const savedCart = await newCart.save();
        res.status(200).json(savedCart)
    } catch (err) {
        res.status(500).json(err)
    }
})

//UPDATE
router.put("/:id", async (req, res) => {
    try {
        const updatedCart = await Cart.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body
            },
            { new: true }
        );
        res.status(200).json(updatedCart)
    } catch (err) {
        res.status(500).json(err);
    }
})

//DELETE 
router.delete("/:id", async (req, res) => {
    try {
        await Cart.findByIdAndDelete(req.params.id)
        res.status(200).json("Cart deleted")
    } catch (err) {
        res.status(500).json(err)
    }
});

//GET CART
router.get("/find/:id", async (req, res) => {
    try {
        const cart = await Cart.findOne({ userId: req.params.id })
        res.status(200).json(cart)
    } catch (err) {
        res.status(500).json(err)
    }
});

//GET ALL 
router.get("/"), async (req, res) => {
    try {
        const carts = await Cart.find()
        res.status(200).json(carts);
    } catch (err) {
        res.status(500).json(err)
    }
}

module.exports = router;