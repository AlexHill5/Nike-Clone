module.exports = {
  getAll: ( req, res, next ) => {
    const dbInstance = req.app.get('db');
    

     dbInstance.read_products()
      .then( products => res.status(200).send( products ) )
      .catch( () => res.status(500).send() );
  },

  
    getId: ( req, res, next ) => {
    const dbInstance = req.app.get('db');
     dbInstance.shoe_id(req.params.id)
      .then( products => {
        console.log(products)
          res.status(200).send( products ) })

      .catch( (err) => res.status(500).send(err) );
  },
};