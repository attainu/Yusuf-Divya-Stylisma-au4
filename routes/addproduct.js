const Men = require('../Models/Men');
const Women = require('../Models/Women');
const Kids = require('../Models/Kids');
const passport = require('passport');

module.exports = (app) => {
  app.post('/addproduct', async (req, res, next) => {
    passport.authenticate(
      'jwt',
      { session: false },
      async (err, users, info) => {
        if (err) console.log(err);
        if (info !== undefined) console.log(info.message);
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
            console.error(error.message);
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
            res.send(women);
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
            res.send(kids);
          } catch (error) {
            console.error(error);
          }
        }
      }
    );
  });
};
