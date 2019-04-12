
const Celebrity = require('../models/celebrity.model');
const Celebrities = require('../data/celebrities.json');
const mongoose = require('mongoose');
require('../config/db.config');

// const celebrities =
// [

//   {
//       "name": "julio iglesias",
//       "occupation": "vividor",
//       "catchPhrase": "soy un truhan soy un senor"
//   },
  
//   {
//       "name": "el fary",
//       "occupation": "idolo",
//       "catchPhrase": "la mandanga"
//   },
  
//   {
//       "name": "la terremoto",
//       "occupation": "cantante",
//       "catchPhrase": "ohu que calor"
//   }
  
//   ]




Celebrity.create(Celebrities)
  .then((Celebrities) => console.info(`${Celebrities.length} new Celeb added to the database`))
  .catch(error => console.error(error))
  .then(() => mongoose.connection.close());