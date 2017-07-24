module.exports = {
  addtocart: ( req, res, next ) => {
    const dbInstance = req.app.get('db');

  dbInstance.post_cart([req.body.shoename])
  conosle.log(req.body.shoename)

  }, 
} 

