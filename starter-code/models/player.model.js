const mongoose = require('mongoose');
const constants = require('../constants-players')//para traerse campos cerrados

const KINDOFPLAYER_TYPES = constants.KINDOFPLAYER_TYPES
const LANGUAGES_LIST = constants.LANGUAGES_LIST
const SCHEDULES_LIST = constants.SCHEDULES_LIST

const playerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'name is required'],
    unique: true
  },
  nickInGame: {
    type: String,
    required: [true, 'nick in game is required'],
    unique: true
  },
  kindOfPlayer: {
    type: String,
    required: [true, 'kind of player is required'],
    enum: KINDOFPLAYER_TYPES
  },
  // language: {
  //   type: String,
  //   required: [true, 'language is required'],
  //   enum: LANGUAGES_LIST
  // },
  // schedule: {
  //   type: String,
  //   required: [true, 'schedule is required'],
  //   enum: SCHEDULES_LIST

  // },
  // levelInGame: {
  //   type: String,
  // }
})
 

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;