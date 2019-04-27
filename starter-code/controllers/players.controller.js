const createError = require('http-errors')
const mongoose = require('mongoose')
const Player = require('../models/player.model');

module.exports.list = ((req, res, next) => {
  Player.find({})
    .then( players => {
      res.render('players/index.hbs', {players})
    })
    .catch(error => next(error))
})

module.exports.detail = ((req, res, next) => {
  const criteria = req.params.id
  Player.findById(criteria)
    .then( player => {
      res.render('players/detail.hbs', {player})
    })
    .catch(error => next(error))
})

module.exports.new = ((req, res, next) => {
  res.render('players/new.hbs')
})

module.exports.create = ((req, res, next) => {
  const player = new Player(req.body)
  console.log(player)
  player.save()
    .then( () => {
      res.redirect('/players')
    })
    .catch(error => {
      if (error instanceof mongoose.Error.ValidationError) {
        res.render('players/new.hbs')
      }})
})


module.exports.delete = ((req, res, next) => {
  const criteria = req.params.id
  Player.deleteOne({_id: criteria})
  .then( () => {
    res.redirect('/players')
  })
  .catch(error => next(error))
})

module.exports.edit = ((req, res, next) => {
  const id = req.params.id
  Player.findById(id)
    .then( player => {
      res.render('players/edit.hbs', {player})
    })
    .catch(error => next(error))
})

module.exports.doEdit = ((req, res, next) => {
  const id = req.params.id
  const update = req.body
  Player.findByIdAndUpdate(id, req.body)
    .then( () => {
      res.redirect('/players')
    })
    .catch(error => next(error))
})