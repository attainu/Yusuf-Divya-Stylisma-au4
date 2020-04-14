module.exports = (app) => {
  app.post('/addproduct', (req, res) => {
    const { body } = req;
    console.log(body);
  });
};
