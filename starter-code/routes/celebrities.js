const express = require('express');
const Celebrity = require('../models/celebrity.model');
const router  = express.Router();
const celebritiesController = require('../controllers/celebrities.controller')



router.get('/', celebritiesController.list);

router.get('/new', celebritiesController.new)
router.post('/', celebritiesController.create)

router.get('/:id', celebritiesController.detail)
router.post('/delete/:id', celebritiesController.delete)//it5

router.get('/:id/edit', celebritiesController.edit)
router.post('/:id', celebritiesController.doEdit)

module.exports = router; 
// /* GET home page */
// // router.get('/celebrities', celebritiesControler.show);
// router.get('/', (req, res, next) => {
//   Celebrity.find({})
//     .then((celebrities) => {
//       console.log(celebrities);
//       res.render('celebrities/index', { celebrities });
//     })
//     .catch(next);
// });

// router.post('/', (req, res, next) => {
//   const { name, occupation, catchPhrase } = req.body;
//   Celebrity.create({ name, occupation, catchPhrase })
//     .then((result) => {
//       res.redirect('/celebrities');
//     })
//     .catch(next);
// });

// module.exports = router;


// ====================  PLAYERS ROUTES DONE
  
// const express = require('express');
// const Celebrity = require('../models/player.model');
// const router  = express.Router();
// const celebritiesController = require('../controllers/players.controller')



// router.get('/', playersController.list);

// router.get('/new', playersController.new)
// router.post('/', playersController.create)

// router.get('/:id', playersController.detail)
// router.post('/delete/:id', playersController.delete)

// router.get('/:id/edit', playersController.edit)
// router.post('/:id', playersController.doEdit)

// module.exports = router; 

// ====================  PLAYERS ROUTES DONE
