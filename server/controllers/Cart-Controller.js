module.exports = {
  addtocart: ( req, res, next ) => {
    const dbInstance = req.app.get('db');
    let product = req.body;
    console.log("PRODUCT", product);

    dbInstance.post_cart([
        product.shoesid,
        product.shoeimg,
        product.shoeName,
        product.shoesize,
        product.shoeprice
      ])
    .then( () => res.status(200).send("AYYEEE" ) )
    .catch( () => res.status(500).send() )

  }, 

    getCart: ( req, res, next ) => {
    const dbInstance = req.app.get('db');
    
     dbInstance.read_cart()
      .then( products => res.status(200).send( products ) )
      .catch( () => res.status(500).send() );
  },

    getSum: ( req, res, next ) => {
    const dbInstance = req.app.get('db');
        
     dbInstance.read_sum()
      .then( sum => res.status(200).send( sum ) )
      .catch( () => res.status(500).send() );
}
} 

