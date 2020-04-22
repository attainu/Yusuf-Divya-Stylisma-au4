const Men = require('../Models/Men');
const Women = require('../Models/Women');
const Kids = require('../Models/Kids');

module.exports = (app) => {
  app.post('/addproduct', async (req, res) => {
    const { body } = req;
    if (body.SECTION == 'men') {
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
        res.send(men);
      } catch (error) {
        console.error(error);
      }
    } else if (body.SECTION == 'women') {
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
      } catch (error) {
        console.error(error);
      }
    } else {
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
      } catch (error) {
        console.error(error);
      }
    }
  });
};
