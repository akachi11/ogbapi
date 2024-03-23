const Order = require('../models/Order');
// const {
//     verifyToken,
//     verifyAndAuthToken,
//     verifyAdminAuthToken
// } = require('./verifyToken');

const router = require('express').Router();

//CREATE

router.post("/", async (req, res) => {
    const newOrder = new Order(req.body)

    try {
        const savedOrder = await newOrder.save();
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
        const orders = await Order.find({ _id: req.params.id })
        res.status(200).json(orders)
    } catch (err) {
        res.status(500).json(err)
    }
});

//GET ALL 
router.get("/find-all", async (req, res) => {
    const query = req.query.new
    try {
        const orders = query
            ? await Order.find().sort({ _id: -1 }).limit(1)
            : await Order.find();
        res.status(200).json(orders)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router;