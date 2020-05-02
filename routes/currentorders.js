const CurrentOrders = require('../Models/CurrentOrders');

module.exports = (app) => {
  app.post('/currentorders', async (req, res) => {
    const { body } = req;
    try {
      const product = await CurrentOrders.findOne({
        where: {
          section: body.section,
          productname: body.productname,
        },
      });
      if (!product) {
        CurrentOrders.create({
          categories: body.categories,
          section: body.section,
          size: body.size,
          productcolor: body.productcolor,
          productimage: body.productimage,
          productname: body.productname,
          productprice: body.productprice,
          productquantity: body.productquantity,
          productrating: body.productrating,
        });
        return res.status(200).send({ message: 'product added to cart' });
      } else {
        return res.status(400).send({ message: 'product present in cart' });
      }
    } catch (error) {
      console.log('Error >>>> ', error);
    }
  });

  app.get('/currentorders', async (req, res) => {
    const products = await CurrentOrders.findAll();
    if (products) {
      res.status(200).send({ products: products, message: 'product found' });
    } else {
      res.send({ message: 'no items in cart' });
    }
  });

  app.put('/currentorders/:id', async (req, res) => {
    const { body } = req;
    try {
      const product = await CurrentOrders.destroy({
        where: {
          id: body.id,
        },
      });
      return res.send({product:product ,message: 'Product removed from cart' });
    } catch (error) {
      console.log(error);
    }
  });
};
