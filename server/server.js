const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive')
const products_controller = require('./Products-Controller/Products-Controller')
const connectionString = require('./secrets.js')
const cors = require('cors')



const app = express();

app.use( bodyParser.json() );
app.use(cors({
    origin : 'http://localhost:3000'
}))

massive( connectionString ).then( dbInstance => {
    app.set('db' , dbInstance);


} );

app.get('/MenShoes', products_controller.getAll)





const port = 4000;
app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );