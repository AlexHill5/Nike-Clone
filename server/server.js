const express = require('express');
const session = require('express-session');

const bodyParser = require('body-parser');
const massive = require('massive')
const Auth0Strategy = require('passport-auth0');
const passport = require('passport');
const cors = require('cors')
const products_controller = require('./controllers/Products-Controller')
const cart_controller = require('./controllers/Cart-Controller')
const secrets = require('./secrets.js')



const app = module.exports = express();

app.use( bodyParser.json() );
app.use(cors({
    origin : 'http://localhost:3000'
}))

app.use(session({
  resave: true, 
  saveUninitialized: true, 
  secret: secrets.sessionSecret
}))
app.use(passport.initialize());
app.use(passport.session());

massive( secrets ).then( dbInstance => {
    app.set('db' , dbInstance);

    dbInstance.set_schema().then( () => console.log('Tables successfully reset')).catch(err => console.log(err));

    passport.use(new Auth0Strategy({    //this needs to be copied EXACTLY the same caps and all
      domain:       secrets.auth0.domain,
      clientID:     secrets.auth0.clientID,
      clientSecret: secrets.auth0.clientSecret,
      callbackURL:  secrets.auth0.callbackURL
      },  
      //set up to here and then go to the Auth0 site and create a new app/client
      //all three of the domian file,client secret and other stuff from Auth0 goes into config.js
        function(accessToken, refreshToken, extraParams, profile, done) {
          console.log('someone tried to access', profile);

          


    //logic for passing in new or existing account





      done(null, {loggedIn : true})
  }));
  

passport.serializeUser(function(user, done) {      //at this point the authentication process is over
  console.log('serializing', user);
  done(null, user);
});

passport.deserializeUser(function(user, done) {
    console.log('deserialize', user)
  done(null, user);
});

//these are the endppints, this first one kicks off the auth session
app.get('/auth' , passport.authenticate('auth0'));

app.get('/auth/callback', passport.authenticate('auth0', 

{ successRedirect: 'http://localhost:3000/'}));

app.get('/auth/me', function(req, res) {
  if (!req.user) return res.status(200).send('No one logged in!');
  res.status(200).send(req.user);
})
app.get('/auth/logout', function(req, res) {
  req.logout();
  res.redirect('/');
})

// Get
app.get('/MenShoes', products_controller.getAll) 
app.get('/ShoeId/:id', products_controller.getId) 
app.get('/cart', cart_controller.getCart)
app.get('/getsum', cart_controller.getSum)


// post
app.post('/addtocart', cart_controller.addtocart);

//delete
app.delete('/checkout', cart_controller.checkout)
app.delete('/removeFromCart/:id',  (req, res, next) => {
    dbInstance.remove_from_cart(req.params.id)
    console.log(req.params.id)
    res.status(200).send('something was removed from the cart')

  })

})
const port = 4000;
app.listen( port, () => { console.log(`Server listening on port ${port}.`); } )