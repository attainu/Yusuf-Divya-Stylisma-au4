const Men = require('../Models/Men');
const Women = require('../Models/Women');
const Kids = require('../Models/Kids');

module.exports = (app) => {
  app.post('/addproduct', async (req, res) => {
    const body = req.body;
    console.log("BODY",body)
    switch (body.SECTION) {
      case 'men':
        console.log(body.CATEGORIES);
        try {
          let men = await Men.create({
            categories: body.CATEGORIES,
            section: body.SECTION,
            size: body.SIZE,
            productcolor: body.productcolor,
            productimage: body.productimage,
            productname: body.productname,
            productprice: body.productprice,
            productquantity: body.productquantity,
            productrating: body.productrating,
          });
          console.log(men);
          res.send({men:men});
        } catch (error) {
          console.error(error.message);
        }
      case 'women':
        try {
          let women = await Women.create({
            categories: body.CATEGORIES,
            section: body.SECTION,
            size: body.SIZE,
            productcolor: body.productcolor,
            productimage: body.productimage,
            productname: body.productname,
            productprice: body.productprice,
            productquantity: body.productquantity,
            productrating: body.productrating,
          });
          res.send({women:women});
        } catch (error) {
          console.error(error);
        }
      case 'kids':
        try {
          let kids = await Kids.create({
            categories: body.CATEGORIES,
            section: body.SECTION,
            size: body.SIZE,
            productcolor: body.productcolor,
            productimage: body.productimage,
            productname: body.productname,
            productprice: body.productprice,
            productquantity: body.productquantity,
            productrating: body.productrating,
          });
          res.send({kids:kids});
        } catch (error) {
          console.error(error);
        }
    }
  });
  app.get('/getproduct/men', async (req, res) => {
    try {
      let men = await Men.findAll({
        where: {
          section: 'men',
        },
      });
      res.send({
        data: men,
      });
      console.log(men);
    } catch (err) {
      console.log(err);
    }
  });

  app.get('/getproduct/women', async (req, res) => {
    try {
      let women = await Women.findAll({
        where: {
          section: 'women',
        },
      });
      res.send({
        data: women,
      });
      console.log(women);
    } catch (err) {
      console.log(err);
    }
  });

  app.get('/getproduct/kids', async (req, res) => {
    try {
      let kids = await Kids.findAll({
        where: {
          section: 'kids',
        },
      });
      res.send({
        data: kids,
      });
      console.log(kids);
    } catch (err) {
      console.log(err);
    }
  });
};
