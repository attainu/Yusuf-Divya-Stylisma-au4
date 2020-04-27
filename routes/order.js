const express = require('express')
const router = express.Router();
const Order = require('../Models/orders')


//-------------------------------------Create order-------------------------------------------------------
router.post("/create", async (req, res) => {
    console.log(req.body)
    try {
        const {items_ordered, total_price, payment_mode} = req.body.bill;
        const orderCreate = await Order.create({
            items_ordered: items_ordered,
            total_price: total_price,
            payment_mode: payment_mode
        })
        res.status(201).send({ statusCode: "201", message: orderCreate })
    }
    catch (error) {
        res.status(400).send({ statusCode: "400", message: error })
    }
})

//------------------------------------get all orders-------------------------------------------------------
router.get("/all", async (req, res) => {
    try {

        const allOrders = await Order.findAll()
        res.status(200).send({ statusCode: "200", message: allOrders })
    }
    catch (error) {
        res.status(400).send({ statusCode: "400", message: error })
    }
})

//-------------------------------------update order-------------------------------------------------------
router.put("/update/:id", async (req, res) => {
    try {
        const { body, params } = req;
        const updatedOrder = await Order.Update(
            {
                items_ordered: body.items_ordered,
                total_price: body.total_price,
                payment_mode: body.payment_mode
            }, { where: { id: params.id } })

        res.status(200).send({ statusCode: "200", message: updatedOrder })
    }
    catch (error) {
        res.status(400).send({ statusCode: "400", message: error })
    }
})

//-------------------------------------delete order-------------------------------------------------------

router.delete("/delete/:id", async (req, res) => {
    try {
        const { params } = req;
        const deleteorder = await Order.destroy(
            { where: { id: params.id } })
        res.status(200).send({ statusCode: "200", message: deleteorder })
    }
    catch (error) {
        res.status(400).send({ statusCode: "400", message: error })
    }
})




module.exports = router