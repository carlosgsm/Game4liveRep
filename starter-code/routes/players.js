// ====================  PLAYERS ROUTES DONE
  
const express = require('express');
const Player = require('../models/player.model');
const router  = express.Router();
const playersController = require('../controllers/players.controller')



router.get('/', playersController.list);

router.get('/new', playersController.new)
router.post('/', playersController.create)

router.get('/:id', playersController.detail)
router.post('/delete/:id', playersController.delete)

router.get('/:id/edit', playersController.edit)
router.post('/:id', playersController.doEdit)

module.exports = router; 

// ====================  PLAYERS ROUTES DONE