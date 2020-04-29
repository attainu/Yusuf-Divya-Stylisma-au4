// const express = require('express')
// const app = express.app();
const Order = require('../Models/Orders')

module.exports = (app) => {
//-------------------------------------Create order-------------------------------------------------------




app.post("/bill", async (req, res) => {
    const body = req.body;
    console.log("BODY",body)
    try {
        // const { items_ordered, total_price, payment_mode } = body.bsill;
        const order = await Order.create({
            items_ordered: body.items_ordered,
            total_price: body.total_price,
            payment_mode: body.payment_mode
        })
        res.status(201).send({ statusCode: "201", order: order })
    }
    catch (error) {
        res.status(400).send({ statusCode: "400", message: error })
    }
})

//------------------------------------get all orders-------------------------------------------------------
app.get("order/all", async (req, res) => {
    try {

        const allOrders = await Orders.findAll()
        res.status(200).send({ statusCode: "200", message: allOrders })
    }
    catch (error) {
        res.status(400).send({ statusCode: "400", message: error })
    }
})

//-------------------------------------update order-------------------------------------------------------
app.put("/update/:id", async (req, res) => {
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

app.delete("/delete/:id", async (req, res) => {
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
};