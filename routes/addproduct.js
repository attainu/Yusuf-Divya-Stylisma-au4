const Men = require('../Models/Men');
const Women = require('../Models/Women');
const Kids = require('../Models/Kids');

module.exports = (app) => {
  app.post('/addproduct', async(req, res) => {
    const { body } = req;
    if(body.SECTION == 'men'){
      try {
        let men = await Men.create({
          
        })
      } catch (error) {
        console.error(error)
      }
    }
    else if(body.SECTION == 'men') {

    } 
    else {

    }
  });
};
