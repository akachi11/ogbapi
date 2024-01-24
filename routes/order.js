const Order = require('../models/Order');
// const {
//     verifyToken,
//     verifyAndAuthToken,
//     verifyAdminAuthToken
// } = require('./verifyToken');

const router = require('express').Router();

//CREATE

router.post("/", async (req, res) => {
    const newOrder = new ProOrder(req.body)

    try {
        const savedCart = await newOrder.save();
        res.status(200).json(savedOrder)
    } catch (err) {
        res.status(500).json(err)
    }
})

//UPDATE
router.put("/:id", async (req, res) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body
            },
            { new: true }
        );
        res.status(200).json(updatedOrder)
    } catch (err) {
        res.status(500).json(err);
    }
})

//DELETE 
router.delete("/:id", async (req, res) => {
    try {
        await Order.findByIdAndDelete(req.params.id)
        res.status(200).json("Order deleted")
    } catch (err) {
        res.status(500).json(err)
    }
});

//GET ORDER
router.get("/find/:id", async (req, res) => {
    try {
        const orders = await Order.find({ userId: req.params.id })
        res.status(200).json(orders)
    } catch (err) {
        res.status(500).json(err)
    }
});

//GET ALL 
router.get("/"), async (req, res) => {
    try {
        const orders = await Order.find()
        res.status(200).json(orders);
    } catch (err) {
        res.status(500).json(err)
    }
}

module.exports = router;